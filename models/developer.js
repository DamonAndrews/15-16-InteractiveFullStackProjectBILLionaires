// Here is where we set up our Dish model, for when we are ready to connect to a database in future activities.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Developer extends Model {}

Developer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    work_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hours_worked: {
      type: DataTypes.INTEGER,
    },
    bill_rate: {
        type: DataTypes.INTEGER,
      },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;