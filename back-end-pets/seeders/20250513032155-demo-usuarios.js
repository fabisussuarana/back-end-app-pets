export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert("usuarios", [
    {
      nome: "João",
      sobrenome: "Silva",
      imagem: "https://randomuser.me/api/portraits/men/32.jpg",
      telefone: "1234567890",
      email: "joao.silva@example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: "Maria",
      sobrenome: "Oliveira",
      imagem: "https://randomuser.me/api/portraits/women/44.jpg",
      telefone: "0987654321",
      email: "maria.oliveira@example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: "Carlos",
      sobrenome: "Ferreira",
      imagem: "https://randomuser.me/api/portraits/men/58.jpg",
      telefone: "5566778899",
      email: "carlos.ferreira@example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: "Ana",
      sobrenome: "Santos",
      imagem: "https://randomuser.me/api/portraits/women/63.jpg",
      telefone: "1122334455",
      email: "ana.santos@example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: "Pedro",
      sobrenome: "Costa",
      imagem: "https://randomuser.me/api/portraits/men/74.jpg",
      telefone: "9988776655",
      email: "pedro.costa@example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete("usuarios", null, {});
};