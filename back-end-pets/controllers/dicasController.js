import Dicas from "../models/dicas.js";
import Usuarios from "../models/usuarios.js";

const listarDicas = async (req, res) => {
  try {
    const dicas = await Dicas.findAll({
      include: [
        {
          model: Usuarios,
          as: "usuario_d",
          attributes: ["id", "nome", "imagem"],
        },
      ],
    });
    res.json(dicas);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const buscarDicaPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const dica = await Dicas.findByPk({
      include: [
        {
          model: Usuarios,
          as: "usuario_d",
          attributes: ["id", "nome", "imagem"],
        },
      ],
      where: { id_dicas: id },
    });
    if (dica) {
      res.json(dica);
    } else {
      res.status(404).json({ mensagem: "Dicas não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const criarDica = async (req, res) => {
  const { titulo, descricao, status, id_usuario } = req.body;
  const imagem = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const novaDica = await Dicas.create({
      titulo,
      descricao,
      status,
      imagem,
      id_usuario,
    });
    res.status(201).json(novaDica);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const atualizarDica = async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, status } = req.body;
  try {
    const dica = await Dicas.findByPk(id);
    if (!dica) {
      return res.status(404).json({ mensagem: "Dica não encontrado" });
    }
    await dica.update({ titulo, descricao, status });
    res.json(dica);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const deletarDica = async (req, res) => {
  const { id } = req.params;
  try {
    const dica = await Dicas.findByPk(id);
    if (!dica) {
      return res.status(404).json({ mensagem: "Dica não encontrado" });
    }
    await dica.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export { listarDicas, buscarDicaPorId, criarDica, atualizarDica, deletarDica };
