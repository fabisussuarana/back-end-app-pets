import Sequelize from 'sequelize';
import sequelize from "../config/sequelize.js";

import Usuarios from './usuarios.js';

const Comentarios = sequelize.define('comentarios', {
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
    timestamps: true,
});

Usuarios.hasMany(Comentarios, {
  foreignKey: 'id_usuario',
  as: 'usuario_c',
});
Comentarios.belongsTo(Usuarios, {
  foreignKey: 'id_usuario',
  as: 'usuario_c',
});

export default Comentarios;