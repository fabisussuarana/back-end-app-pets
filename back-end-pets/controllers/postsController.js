import Comentarios from '../models/comentarios.js';
import Posts from '../models/posts.js';
import Usuarios from '../models/usuarios.js';
import jwt from "jsonwebtoken";

const listarPosts = async (req, res) => {
  const { tipo_post, especie, sexo, raca, idade } = req.query;

  try {
    const posts = await Posts.findAll({
      include: [
        {
          model: Usuarios,
          as: 'usuario_p',
          attributes: ['id', 'nome', 'imagem', 'telefone'],
        },
        {
          model: Comentarios,
          as: 'comentarios_p',
          attributes: ['id_comentario', 'descricao', 'status', 'id_usuario'],
          include: [
            {
              model: Usuarios,
              as: 'usuario_c',
              attributes: ['id', 'nome', 'imagem'],
            },
          ],
        },
      ],
      where: {
        ...(tipo_post && { tipo_post }),
        ...(especie && { especie }),
        ...(sexo && { sexo }),
        ...(raca && { raca }),
        ...(idade && { idade }),
      },
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const buscarPostPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Posts.findAll({
      include: [
        {
          model: Usuarios,
          as: 'usuario_p',
          attributes: ['id', 'nome', 'imagem'],
        },
        {
          model: Comentarios,
          as: 'comentarios_p',
          attributes: ['id_comentario', 'descricao', 'status', 'id_usuario'],
        },
      ],
      where: { id_post: id },
    });
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ mensagem: 'Post não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const criarPost = async (req, res) => {
  const { titulo, descricao, id_usuario, tipo_post, especie, sexo, raca, idade } = req.body;
  const imagem = req.file ? `src/uploads/${req.file.filename}` : null;

  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ mensagem: "Token não fornecido" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const id_usuario = decoded.id;

    const novoPost = await Posts.create({ 
      titulo, 
      descricao, 
      imagem, 
      id_usuario,
      tipo_post, 
      especie, 
      sexo, 
      raca, 
      idade 
    });
    
    res.status(201).json(novoPost);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const atualizarPost = async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, imagem, id_usuario } = req.body;
  try {
    const post = await Posts.findByPk(id);
    if (!post) {
      return res.status(404).json({ mensagem: 'Post não encontrado' });
    }
    await post.update({ titulo, descricao, imagem, id_usuario });
    res.json(post);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const deletarPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Posts.findByPk(id);
    if (!post) {
      return res.status(404).json({ mensagem: 'Post não encontrado' });
    }
    await post.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const listarComentariosDePost = async (req, res) => {
  const { id } = req.params;

  try {
    const comentarios = await Comentarios.findAll({
      include: [
        {
          model: Usuarios,
          as: 'usuario_c',
          attributes: ['id', 'nome', 'imagem'],
        },
      ],
      where: {
        id_post: parseInt(id, 10), // converte para número
        status: 'ativo', // opcional, se quiser filtrar por status
      },
    });

    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export { listarPosts, buscarPostPorId, criarPost, atualizarPost, deletarPost, listarComentariosDePost };
