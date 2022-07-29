const { Developer } = require('../models');

const devData = [
    {
        first_name: 'Devon',
        last_name: 'Alsakkaf',
        email: 'd.alsakkaf@billionaires.com',
        password: 'test123',
        level: 'Senior',
    }
]

const seedDev = () => Developer.bulkCreate(devData);

module.exports = seedDev;