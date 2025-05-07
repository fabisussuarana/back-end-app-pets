import Usuarios from '../models/usuarios.js';

const listarUsuarios = async (request, response) => {
    await Usuarios.findAll({
        order: [["nome", "ASC"]],
      })
    .then((Usuarios) => {
        return response.json(Usuarios);
    })
    .catch((error) => {
        return response.json(error);
    });    
}

export { listarUsuarios };