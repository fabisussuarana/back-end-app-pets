export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert("posts", [
    {
      imagem: "src/uploads/pet-fabiana.png",
      titulo: "Minha gatinha sumiu!",
      descricao: "Perdi minha gatinha, ela é muito querida e faz muita falta. Ele desapareceu nas proximidades do Conjunto Universitário. Se alguém a encontrar, por favor, entre em contato.",
      raca: 'SRD',
      idade: '2 anos',
      especie: 'Gato',
      sexo: 'Fêmea',
      tipo_post: "Perdido",
      id_usuario: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      imagem: "src/uploads/pet-marcelo.png",
      titulo: "Só tem tamanho!",
      descricao: "Minha cachorrinha é muito grande, mas é um amor. Ele adora brincar, correr e é super obediente.",
      raca: 'Rottweiler',
      idade: '6 anos',
      especie: 'Cachorro',
      sexo: 'Fêmea',
      tipo_post: "Padrão",
      id_usuario: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      imagem: "src/uploads/pet-guilherme.png",
      titulo: "Gato safado!!",
      descricao: "Meu gato é muito travesso, ele adora brincar e correr pela casa. Ele lembra o Garfield, mas é muito mais ativo.",
      raca: 'Persa',
      idade: '2 anos',
      especie: 'Gato',
      sexo: 'Macho',
      tipo_post: "Padrão",
      id_usuario: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      imagem: "src/uploads/pet-ingrid.png",
      titulo: "Estou procurando um lar!",
      descricao: "Pessoal, estou procurando um lar para essa linda cachorrinha. Ela é muito dócil, adora brincar e é super carinhosa. Se você está procurando um novo amigo, entre em contato!",
      raca: 'Shih Tzu',
      idade: '3 anos',
      especie: 'Cachorro',
      sexo: 'Fêmea',
      tipo_post: "Adoção",
      id_usuario: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete("posts", null, {});
};
