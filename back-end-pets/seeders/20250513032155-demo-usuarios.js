export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert("usuarios", [
    {
      nome: "João",
      sobrenome: "Silva",
      imagem: "joao-silva.jpg",
      telefone: "1234567890",
      email: "joao.silva@example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: "Maria",
      sobrenome: "Oliveira",
      imagem: "maria-oliveira.jpg",
      telefone: "0987654321",
      email: "maria.oliveira@example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete("usuarios", null, {});
};
