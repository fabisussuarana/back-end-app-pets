export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert("posts", [
    {
      titulo: "Cachorrinho encontrado no parque",
      descricao: "Encontrei este cachorro perdido no Parque Central. Estava sem coleira, muito dócil e parecia assustado.",
      imagem: "https://images.unsplash.com/photo-1558788353-f76d92427f16",
      id_usuario: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Gatinha para adoção",
      descricao: "Essa linda gatinha foi resgatada da rua. Já está vermifugada e pronta para um novo lar cheio de amor!",
      imagem: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
      id_usuario: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Pet desaparecido: ajuda!",
      descricao: "Nosso cãozinho Thor desapareceu ontem à tarde perto da Av. Brasil. Se alguém o vir, por favor, entre em contato.",
      imagem: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      id_usuario: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Feirinha de adoção neste sábado!",
      descricao: "Estaremos na Praça das Árvores com diversos pets esperando um lar. Venha adotar um amigo!",
      imagem: "https://images.unsplash.com/photo-1619983081563-b64f2d59f3b4",
      id_usuario: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Antes e depois do resgate",
      descricao: "Veja a transformação incrível do nosso querido Simba após alguns meses de cuidados!",
      imagem: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
      id_usuario: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Filhotes disponíveis para adoção",
      descricao: "Cinco filhotes lindos e brincalhões estão procurando um lar. Adote e mude uma vida!",
      imagem: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
      id_usuario: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Ajude a encontrar a Mel",
      descricao: "A Mel é uma poodle branca que sumiu ontem à noite no bairro Jardim das Flores. Qualquer informação será de grande ajuda.",
      imagem: "https://images.unsplash.com/photo-1601758123927-196edb17b5a1",
      id_usuario: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete("posts", null, {});
};
