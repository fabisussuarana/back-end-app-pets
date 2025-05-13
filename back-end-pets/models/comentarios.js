import Sequelize from 'sequelize';
import { dataBase } from '../db.js';
import Usuarios from './usuarios.js';

const Comentarios = dataBase.define('comentarios', {
    id_comentario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    id_post: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: true
    },
}, {
    freezeTableName: true,
    tableName: 'comentarios',
    timestamps: false,
});

Comentarios.belongsTo(Usuarios, {
  foreignKey: 'id_usuario',
  as: 'usuario'
});

export default Comentarios;