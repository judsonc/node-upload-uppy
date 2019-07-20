export const up = (queryInterface, Sequelize) => queryInterface.createTable('Denuncias', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    allowNull: false,
  },
  categoria: Sequelize.STRING,
  descricao: Sequelize.STRING,
  latitude: Sequelize.DOUBLE,
  longitude: Sequelize.DOUBLE,
  endereco: Sequelize.STRING,
  bairro: Sequelize.STRING,
  periferia: Sequelize.STRING,
  distrito: Sequelize.STRING,
  cidade: Sequelize.STRING,
  estado: Sequelize.STRING,
  cep: Sequelize.STRING,
  pais: Sequelize.STRING,
  data: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
});

export const down = queryInterface => queryInterface.dropTable('Denuncias');
