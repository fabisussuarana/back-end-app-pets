import Sequelize from "sequelize";

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("posts", {
    id_post: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    titulo: {
      type: Sequelize.STRING,
    },
    descricao: {
      type: Sequelize.STRING,
    },
    imagem: {
      type: Sequelize.STRING,
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      references: {
        model: "usuarios",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("NOW"),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("NOW"),
    },
    tipo_post: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    especie: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    sexo: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    raca: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    idade: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable("posts");
}
