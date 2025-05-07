import Sequelize from 'sequelize';
import { dataBase } from '../db.js';

const Usuarios = dataBase.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: true
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: true
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: true
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    // senha: {
    //     type: Sequelize.STRING,
    //     allowNull: true
    // },
},
{
    freezeTableName: true,
    tableName: 'usuarios',
    timestamps: false,
});

export default Usuarios;