import Usuarios from "../models/usuarios.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const listarUsuarios = async (request, response) => {
  await Usuarios.findAll({
    order: [["id", "ASC"]],
  })
    .then((Usuarios) => {
      return response.json(Usuarios);
    })
    .catch((error) => {
      return response.json(error);
    });
};

const buscarUsuarioPorId = async (request, response) => {
  const { id } = request.params;
  try {
    const usuario = await Usuarios.findByPk(id);
    if (usuario) {
      return response.json(usuario);
    } else {
      return response.status(404).json({ mensagem: "Usuário não encontrado" });
    }
  } catch (error) {
    return response.status(500).json({ erro: error.message });
  }
};

const perfil = async (req, res) => {
  try {
    const usuario = await Usuarios.findByPk(req.usuario.id, {
      attributes: ['id', 'nome', 'email', 'imagem']
    });

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const criarUsuario = async (request, response) => {
  const { nome, sobrenome, telefone, email, senha } = request.body;
  try {
    const senhaHash = await bcrypt.hash(senha, 10);
    const imagem = request.file ? `/uploads/${request.file.filename}` : null;

    const novoUsuario = await Usuarios.create({
      nome,
      sobrenome,
      imagem,
      telefone,
      email,
      senha: senhaHash,
    });
    return response.status(201).json(novoUsuario);
  } catch (error) {
    return response.status(500).json({ erro: error.message });
  }
};

const deletarUsuario = async (request, response) => {
  const { id } = request.params;
  try {
    const usuario = await Usuarios.findByPk(id);
    if (!usuario) {
      return response.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    await usuario.destroy();
    return response.status(204).send();
  } catch (error) {
    return response.status(500).json({ erro: error.message });
  }
};

const atualizarUsuario = async (request, response) => {
  const { nome, sobrenome, telefone, senhaNova, senhaAtual } = request.body;

  const token = request.headers.authorization?.split(" ")[1];
  if (!token) {
    return response.status(401).json({ mensagem: "Token não fornecido" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const id_usuario = decoded.id;

    const usuario = await Usuarios.findByPk(id_usuario);
    if (!usuario) {
      return response.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    const updatedData = {};

    if (nome && nome.trim() !== '') updatedData.nome = nome;
    if (sobrenome && sobrenome.trim() !== '') updatedData.sobrenome = sobrenome;
    if (telefone && telefone.trim() !== '') updatedData.telefone = telefone;

    // Validação de senha
    if (senhaNova !== '') {
      if (senhaNova.trim() === '') {
        return response.status(400).json({ mensagem: "Nova senha não pode ser vazia" });
      }

      if (!senhaAtual || senhaAtual.trim() === '') {
        return response.status(400).json({ mensagem: "Senha atual não fornecida ou inválida" });
      }

      const senhaValida = await bcrypt.compare(senhaAtual, usuario.senha);
      if (!senhaValida) {
        return response.status(400).json({ mensagem: "Senha atual inválida" });
      }

      const senhaHash = await bcrypt.hash(senhaNova, 10);
      updatedData.senha = senhaHash;
    }

    await usuario.update(updatedData);

    return response.status(200).json(usuario);
  } catch (error) {
    return response.status(500).json({ erro: error.message });
  }
};


export {
  listarUsuarios,
  buscarUsuarioPorId,
  criarUsuario,
  deletarUsuario,
  atualizarUsuario,
  perfil
};
