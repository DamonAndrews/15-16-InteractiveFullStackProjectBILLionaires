const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Job_type extends Model {}

Job_type.init (
    {
    work_description: {
        type: DataTypes.ENUM(['Front End', 'Back end', 'Maint.', 'Full Stack']),
        allowNull: false,
    },

    location: {
        type: DataTypes.STRING,
      allowNull: false,
    },
    rate_of_pay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'job_type',
      }
)

module.exports = Job_type;