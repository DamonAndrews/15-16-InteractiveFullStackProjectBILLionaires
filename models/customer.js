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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      work_description: {
        type: DataTypes.ENUM(['Front End', 'Back end', 'Maintenance', 'Full Stack']),
        allowNull: false,
      },
    location: {
      type: DataTypes.ENUM(['Remote', 'On Site']),
      allowNull: false,
    },
    rate_of_pay: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    job_tier: {
      type: DataTypes.ENUM(['1', '2', '3']),
      allowNull: false,
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