import Posts from '../models/posts.js';

const listarPosts = async (req, res) => {
  try {
    const posts = await Posts.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const buscarPostPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Posts.findByPk(id);
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
