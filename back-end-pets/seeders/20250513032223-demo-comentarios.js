export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert("comentarios", [
    {
      descricao: "Comentário no Post 1",
      id_usuario: 1, // Relacionando ao usuário João
      id_post: 1, // Relacionando ao post 1
      status: "ativo",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      descricao: "Comentário no Post 2",
      id_usuario: 2, // Relacionando ao usuário Maria
      id_post: 2, // Relacionando ao post 2
      status: "ativo",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete("comentarios", null, {});
};
