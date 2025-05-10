import Sequelize from 'sequelize';
import { dataBase } from '../db.js';
import Usuarios from './usuarios.js';

// id_dicas, titulo, descricao, status, imagem, id_usuario

const Dicas = dataBase.define('dicas', {
    id_dicas: {
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
    status: {
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
    tableName: 'dicas',
    timestamps: false,
});

Dicas.belongsTo(Usuarios, {
  foreignKey: 'id_usuario',
  as: 'usuario'
});

export default Dicas;