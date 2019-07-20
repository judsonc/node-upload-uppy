export default (sequelize, DataTypes) => {
  const Denuncia = sequelize.define('Denuncia', {
    id: {
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
      autoIncrement: false,
      allowNull: false,
      primaryKey: true,
    },
    categoria: DataTypes.STRING,
    descricao: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    endereco: DataTypes.STRING,
    bairro: DataTypes.STRING,
    periferia: DataTypes.STRING,
    distrito: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    cep: DataTypes.STRING,
    pais: DataTypes.STRING,
    data: DataTypes.DATE,
  }, {
    timestamps: true,
    tableName: 'Denuncias',
  });

  return Denuncia;
};
