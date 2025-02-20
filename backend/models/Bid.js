module.exports = (sequelize, DataTypes) => {
    const Bid = sequelize.define('Bid', {
      bid_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      shipment_id: { type: DataTypes.INTEGER, allowNull: false },
      carrier_id: { type: DataTypes.INTEGER, allowNull: false },
      quote_amount: { type: DataTypes.FLOAT, allowNull: false },
      delivery_time: { type: DataTypes.DATE, allowNull: false },
      status: { type: DataTypes.STRING, defaultValue: 'pending' },
    });
    return Bid;
  };