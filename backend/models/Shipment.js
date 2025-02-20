module.exports = (sequelize, DataTypes) => {
    const Shipment = sequelize.define('Shipment', {
      shipment_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      shipper_id: { type: DataTypes.INTEGER, allowNull: false },
      origin: { type: DataTypes.STRING, allowNull: false },
      destination: { type: DataTypes.STRING, allowNull: false },
      cargo_type: { type: DataTypes.STRING, allowNull: false },
      weight: { type: DataTypes.FLOAT, allowNull: false },
      delivery_timeline: { type: DataTypes.DATE, allowNull: false },
      status: { type: DataTypes.STRING, defaultValue: 'open' },
    });
    return Shipment;
  };