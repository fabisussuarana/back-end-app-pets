import Sequelize from 'sequelize';
import { dataBase } from '../db.js';
import Usuarios from './usuarios.js';

const Posts = dataBase.define('posts', {
    id_post: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: true
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    freezeTableName: true,
    tableName: 'posts',
    timestamps: false,
});

Posts.belongsTo(Usuarios, {
  foreignKey: 'id_usuario',
  as: 'usuario'
});

export default Posts;