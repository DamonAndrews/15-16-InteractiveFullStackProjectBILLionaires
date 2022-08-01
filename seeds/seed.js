const sequelize = require('../config/connection');
const { Customer, Developer} = require('../models');
const devData = require('./devData.js');
const customerData = require('./customerData.js');
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await devData();
    process.exit(0);
};
seedDatabase();