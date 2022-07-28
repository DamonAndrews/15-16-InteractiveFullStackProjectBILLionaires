const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Customer extends Model {}

Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    company_name: {
        type: DataTypes.STRING,
      allowNull: false,
    },
    company_address: {
        type: DataTypes.STRING,
      allowNull: false,
    },
    company_phone_number: {
        type: DataTypes.INTEGER,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    job_type_requested: {
        type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'customer',
  }
);

module.exports = Customer;