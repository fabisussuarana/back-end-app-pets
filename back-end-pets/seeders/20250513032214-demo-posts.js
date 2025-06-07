export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert("posts", [
    {
      titulo: "Cachorrinho encontrado no parque",
      descricao: "Encontrei este cachorro perdido no Parque Central. Estava sem coleira, muito dócil e parecia assustado.",
      imagem: "https://images.unsplash.com/photo-1558788353-f76d92427f16",
      id_usuario: 1,
      tipo_post: "Encontrado",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Gatinha para adoção",
      descricao: "Essa linda gatinha foi resgatada da rua. Já está vermifugada e pronta para um novo lar cheio de amor!",
      imagem: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
      id_usuario: 2,
      tipo_post: "Adoção",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Pet desaparecido: ajuda!",
      descricao: "Nosso cãozinho Thor desapareceu ontem à tarde perto da Av. Brasil. Se alguém o vir, por favor, entre em contato.",
      imagem: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      id_usuario: 3,
      tipo_post: "Perdido",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete("posts", null, {});
};
