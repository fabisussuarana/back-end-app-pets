export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert("dicas", [
    {
      titulo: "Dica 1",
      descricao: "Descrição da Dica 1",
      status: "ativo",
      imagem: "dica1.jpg",
      id_usuario: 1, // Relacionando ao usuário João
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Dica 2",
      descricao: "Descrição da Dica 2",
      status: "ativo",
      imagem: "dica2.jpg",
      id_usuario: 2, // Relacionando ao usuário Maria
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete("dicas", null, {});
};
