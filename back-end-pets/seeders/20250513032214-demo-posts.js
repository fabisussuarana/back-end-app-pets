export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert("posts", [
    {
      titulo: "Post 1",
      descricao: "Descrição do Post 1",
      imagem: "post1.jpg",
      id_usuario: 1, // Relacionando ao usuário João
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Post 2",
      descricao: "Descrição do Post 2",
      imagem: "post2.jpg",
      id_usuario: 2, // Relacionando ao usuário Maria
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete("posts", null, {});
};
