import bcrypt from "bcryptjs";

export const up = async (queryInterface, Sequelize) => {
  const senhaPadrao = await bcrypt.hash("123456", 10);

  await queryInterface.bulkInsert("usuarios", [
    {
      nome: "Fabiana",
      sobrenome: "Sussuarana",
      imagem: "src/uploads/fabiana.png",
      telefone: "(68) 99977-4073",
      email: "fabiana@gmail.com",
      senha: senhaPadrao,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: "Guilherme",
      sobrenome: "Santos",
      imagem: "src/uploads/guilherme.png",
      telefone: "(68) 99981-9200",
      email: "guilherme@gmail.com",
      senha: senhaPadrao,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: "Marcelo",
      sobrenome: "Brasil",
      imagem: "src/uploads/marcelo.png",
      telefone: "(68) 99203-7024",
      email: "marcelo@gmail.com",
      senha: senhaPadrao,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: "Ingrid",
      sobrenome: "Amim",
      imagem: "src/uploads/ingrid.png",
      telefone: "(68) 99235-1001",
      email: "ingrid@gmail.com",
      senha: senhaPadrao,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete("usuarios", null, {});
};
