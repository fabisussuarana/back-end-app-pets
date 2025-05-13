export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert("posts", [
    {
      titulo: "Viagem incrível para as montanhas",
      descricao: "Passei um final de semana incrível explorando trilhas nas montanhas. A vista do topo era simplesmente maravilhosa!",
      imagem: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      id_usuario: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Novo restaurante na cidade",
      descricao: "Experimentei este novo restaurante italiano ontem à noite. A comida estava deliciosa e o ambiente muito aconchegante!",
      imagem: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      id_usuario: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Pôr do sol na praia",
      descricao: "Capturei este momento mágico durante minha caminhada vespertina pela praia. As cores eram absolutamente deslumbrantes.",
      imagem: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      id_usuario: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Meu novo projeto de jardinagem",
      descricao: "Finalmente terminei de plantar meu jardim de ervas. Mal posso esperar para usar ingredientes frescos na cozinha!",
      imagem: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
      id_usuario: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Festival de música do fim de semana",
      descricao: "O festival superou todas as expectativas! As bandas estavam incríveis e a energia da multidão era contagiante.",
      imagem: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
      id_usuario: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Novo café que descobri",
      descricao: "Este café escondido tem o melhor cappuccino da cidade e um ambiente perfeito para trabalhar.",
      imagem: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      id_usuario: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Minha nova planta",
      descricao: "Adicionei esta belezinha à minha coleção de plantas. Alguém tem dicas para cuidar de monstera?",
      imagem: "https://images.unsplash.com/photo-1463320726281-696a485928c7",
      id_usuario: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete("posts", null, {});
};