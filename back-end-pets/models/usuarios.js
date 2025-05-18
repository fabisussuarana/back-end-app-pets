import Sequelize from "sequelize";
import sequelize from "../config/sequelize.js";

const Usuarios = sequelize.define(
  "usuarios",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    sobrenome: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    imagem: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    tableName: "usuarios",
    timestamps: true,
  },
);

export default Usuarios;