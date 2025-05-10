import Usuarios from '../models/usuarios.js';

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
}

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

const criarUsuario = async (request, response) => {
    const { nome, sobrenome, imagem, telefone, email } = request.body;
    try {
        const novoUsuario = await Usuarios.create({
            nome, sobrenome, imagem, telefone, email
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
    try {
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

export { listarUsuarios, buscarUsuarioPorId, criarUsuario, deletarUsuario, atualizarUsuario };