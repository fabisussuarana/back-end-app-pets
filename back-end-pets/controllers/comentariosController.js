import Comentarios from "../models/comentarios.js";
import Usuarios from "../models/usuarios.js";
import jwt from "jsonwebtoken";

const listarComentarios = async (req, res) => {
  try { 
    const comentarios = await Comentarios.findAll({
      include: [
        {
          model: Usuarios,
          as: "usuario_c",
          attributes: ["id", "nome", "imagem"],
        },
      ],
    });
    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const buscarComentarioPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const comentario = await Comentarios.findAll({
      include: [
        {
          model: Usuarios,
          as: "usuario_c",
          attributes: ["id", "nome", "imagem"],
        },
      ],
      where: { id_comentario: id },
    });
    if (comentario) {
      res.json(comentario);
    } else {
      res.status(404).json({ mensagem: "Comentario não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const criarComentario = async (req, res) => {
  const { descricao, id_post, status } = req.body;

  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ mensagem: "Token não fornecido" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const id_usuario = decoded.id;

    const novoComentario = await Comentarios.create({
      descricao,
      id_post,
      id_usuario,
      status,
    });

    res.status(201).json(novoComentario);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const atualizarComentario = async (req, res) => {
  const { id } = req.params;
  const { descricao, status } = req.body;
  try {
    const comentario = await Comentarios.findByPk(id);
    if (!comentario) {
      return res.status(404).json({ mensagem: "Comentario não encontrado" });
    }
    await comentario.update({ descricao, status });
    res.json(post);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const deletarComentario = async (req, res) => {
  const { id } = req.params;
  try {
    const comentario = await Comentarios.findByPk(id);
    if (!comentario) {
      return res.status(404).json({ mensagem: "Comentario não encontrado" });
    }
    await comentario.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export {
  listarComentarios,
  buscarComentarioPorId,
  criarComentario,
  atualizarComentario,
  deletarComentario,
};
