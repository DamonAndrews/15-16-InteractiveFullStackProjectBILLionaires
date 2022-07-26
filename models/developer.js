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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      }
    },
    level: {
      type: DataTypes.ENUM(['Senior', 'Mid-Level', 'Junior']),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'developer',
  }
);

module.exports = Developer;