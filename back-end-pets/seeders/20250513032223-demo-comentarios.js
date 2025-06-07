export const up = async (queryInterface, Sequelize) => {
  // await queryInterface.bulkInsert("comentarios", [
    
  // ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete("comentarios", null, {});
};
