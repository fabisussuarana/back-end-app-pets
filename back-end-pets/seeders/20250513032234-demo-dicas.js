export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert("dicas", [
    {
      titulo: "Alimentação saudável para cães e gatos",
      descricao: "Ofereça rações de qualidade, evite alimentos humanos e consulte sempre um veterinário antes de mudar a dieta. Petiscos naturais são boas opções de agrado.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id_usuario: 1, 
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Passeios seguros com seu cão",
      descricao: "Use coleira adequada, evite horários muito quentes, leve saquinhos para recolher as fezes e esteja atento ao ambiente ao redor para garantir a segurança.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=1851&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id_usuario: 2, 
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Importância da vacinação em dia",
      descricao: "Vacinas protegem seu pet contra diversas doenças graves. Mantenha o cartão de vacinação atualizado e siga as orientações do veterinário.",
      status: "ativo",
      imagem: "https://plus.unsplash.com/premium_photo-1710406095492-7e62eba19745?q=80&w=2102&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id_usuario: 3, 
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Como lidar com o medo de fogos de artifício",
      descricao: "Crie um ambiente seguro e silencioso para seu pet. Use sons calmantes, feromônios sintéticos e consulte um veterinário sobre opções de tratamento.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
      id_usuario: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Higiene bucal dos pets",
      descricao: "Escove os dentes do seu pet com produtos específicos e ofereça brinquedos mastigáveis. A saúde bucal evita problemas mais sérios no futuro.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2",
      id_usuario: 3, 
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete("dicas", null, {});
};
