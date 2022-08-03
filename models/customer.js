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
    front_end: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    back_end: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maintenance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    full_stack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    remote: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    on_site: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rate_of_pay: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jt_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jt_2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jt_3: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Customer',
  }
);

module.exports = Customer;