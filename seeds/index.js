const sequelize = require('../config/connection');
const seedCustomer = require('./customerData');
const seedDev = require('./devData')

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedCustomer();

    await seedDev();

    process.exit(0);
};

seedAll();