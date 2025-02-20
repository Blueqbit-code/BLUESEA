module.exports = (sequelize, DataTypes) => {
    const Carrier = sequelize.define('Carrier', {
      carrier_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      company_name: { type: DataTypes.STRING, allowNull: false },
      api_endpoint: { type: DataTypes.STRING, allowNull: false },
    });
    return Carrier;
  };