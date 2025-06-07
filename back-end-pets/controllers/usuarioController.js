import Usuarios from "../models/usuarios.js";
import bcrypt from 'bcrypt';

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
  const { id } = request.params;
  const { nome, sobrenome, imagem, telefone, email } = request.body;

  const token = request.headers.authorization?.split(" ")[1];
  if (!token) {
    return response.status(401).json({ mensagem: "Token não fornecido" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const id_usuario = decoded.id;

    if (parseInt(id) !== id_usuario) {
      return response.status(403).json({ mensagem: "Ação não permitida" });
    }

    const usuario = await Usuarios.findByPk(id);
    if (!usuario) {
      return response.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    await usuario.update({ nome, sobrenome, imagem, telefone, email });
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
