export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert("dicas", [
    {
      titulo: "Como manter seu pet hidratado",
      descricao: "Deixe sempre potes com água limpa e fresca em locais acessíveis, principalmente nos dias mais quentes. Fontes de água corrente também são ótimas opções para estimular o consumo.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1583511666445-775f1f2116f5",
      id_usuario: 1, // Relacionando ao usuário João
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Escovação adequada dos pelos",
      descricao: "Escove seu pet regularmente para remover pelos soltos e evitar nós. Isso também ajuda a reduzir a quantidade de pelos espalhados pela casa.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1601758123927-196edb17b5a1",
      id_usuario: 2, // Relacionando ao usuário Maria
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Alimentação saudável para cães e gatos",
      descricao: "Ofereça rações de qualidade, evite alimentos humanos e consulte sempre um veterinário antes de mudar a dieta. Petiscos naturais são boas opções de agrado.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
      id_usuario: 3, // Relacionando ao usuário Carlos
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Enriquecimento ambiental para pets",
      descricao: "Brinquedos interativos, túneis e esconderijos ajudam a manter seu pet mentalmente estimulado e feliz. Enriquecimento é essencial, principalmente para pets que ficam sozinhos.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
      id_usuario: 4, // Relacionando ao usuário Ana
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Passeios seguros com seu cão",
      descricao: "Use coleira adequada, evite horários muito quentes, leve saquinhos para recolher as fezes e esteja atento ao ambiente ao redor para garantir a segurança.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1608137681981-d66d8f49b6c1",
      id_usuario: 5, // Relacionando ao usuário Pedro
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Importância da vacinação em dia",
      descricao: "Vacinas protegem seu pet contra diversas doenças graves. Mantenha o cartão de vacinação atualizado e siga as orientações do veterinário.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1619983081563-b64f2d59f3b4",
      id_usuario: 1, // Relacionando ao usuário João
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Como lidar com o medo de fogos de artifício",
      descricao: "Crie um ambiente seguro e silencioso para seu pet. Use sons calmantes, feromônios sintéticos e consulte um veterinário sobre opções de tratamento.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
      id_usuario: 2, // Relacionando ao usuário Maria
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Higiene bucal dos pets",
      descricao: "Escove os dentes do seu pet com produtos específicos e ofereça brinquedos mastigáveis. A saúde bucal evita problemas mais sérios no futuro.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2",
      id_usuario: 3, // Relacionando ao usuário Carlos
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete("dicas", null, {});
};
