import Comentarios from '../models/comentarios.js';
import Posts from '../models/posts.js';
import Usuarios from '../models/usuarios.js';

const listarPosts = async (req, res) => {
  const { tipo_post, especie, sexo, raca, idade } = req.query;

  try {
    const posts = await Posts.findAll({
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
  const { titulo, descricao, imagem, id_usuario } = req.body;
  try {
    const novoPost = await Posts.create({ titulo, descricao, imagem, id_usuario });
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

export { listarPosts, buscarPostPorId, criarPost, atualizarPost, deletarPost };
