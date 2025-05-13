export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert("dicas", [
    {
      titulo: "Como economizar água na sua casa",
      descricao: "Feche a torneira enquanto escova os dentes, tome banhos mais curtos e reutilize a água da máquina de lavar para limpar áreas externas. Pequenas ações fazem grande diferença para o meio ambiente!",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1519699047748-de8e457a634e",
      id_usuario: 1, // Relacionando ao usuário João
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Dicas para cuidar de plantas de interior",
      descricao: "Para manter suas plantas saudáveis, verifique a umidade do solo antes de regar, posicione-as de acordo com a necessidade de luz de cada espécie e limpe as folhas regularmente para remover o pó.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1463320898484-cdee8141c787",
      id_usuario: 2, // Relacionando ao usuário Maria
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Como organizar sua rotina de trabalho",
      descricao: "Estabeleça prioridades, use a técnica pomodoro (25 minutos de foco seguidos por 5 minutos de descanso) e prepare sua lista de tarefas na noite anterior para um dia mais produtivo.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      id_usuario: 3, // Relacionando ao usuário Carlos
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Receita de smoothie energético para o café da manhã",
      descricao: "Misture uma banana, meia xícara de espinafre, uma colher de pasta de amendoim, uma colher de mel e leite vegetal a gosto. Rico em nutrientes e pronto em menos de 5 minutos!",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82",
      id_usuario: 4, // Relacionando ao usuário Ana
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Como manter a motivação para exercícios físicos",
      descricao: "Escolha atividades que você realmente goste, estabeleça metas realistas, encontre um parceiro de treino e celebre seus progressos, por menores que sejam.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c",
      id_usuario: 5, // Relacionando ao usuário Pedro
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Cuidados essenciais com seu pet durante o verão",
      descricao: "Mantenha sempre água fresca disponível, evite passeios nos horários mais quentes do dia, crie áreas sombreadas e nunca deixe seu animal no carro fechado.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1450778869180-41d0601e046e",
      id_usuario: 1, // Relacionando ao usuário João
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Como iniciar uma horta em espaços pequenos",
      descricao: "Comece com ervas aromáticas em vasos pequenos, aproveite a luz natural das janelas e utilize compostagem caseira para fertilizar o solo naturalmente.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      id_usuario: 2, // Relacionando ao usuário Maria
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: "Dicas para dormir melhor",
      descricao: "Mantenha um horário regular para dormir e acordar, evite telas por pelo menos uma hora antes de dormir e crie um ambiente escuro, silencioso e fresco no quarto.",
      status: "ativo",
      imagem: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c",
      id_usuario: 3, // Relacionando ao usuário Carlos
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete("dicas", null, {});
};