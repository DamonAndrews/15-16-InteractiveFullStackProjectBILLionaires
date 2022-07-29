const { Developer } = require('../models');

const devData = [
    {
        first_name: 'Devon',
        last_name: 'Alsakkaf',
        email: 'd.alsakkaf@billionaires.com',
        password: 'test123',
        level: 'Senior',
    },
    {
        first_name: 'Stephen',
        last_name: 'Heinen',
        email: 's.heinen@billionaires.com',
        password: 'test1234',
        level: 'Mid-Level',
    },
    {
        first_name: 'Damon',
        last_name: 'Andrews',
        email: 'd.andrews@billionaires.com',
        password: 'test12345',
        level: 'Senior',
    },
    {
        first_name: 'Corey',
        last_name: 'Stuart',
        email: 'c.stuart@billionaires.com',
        password: 'test123456',
        level: 'Mid-Level',
    },
    {
        first_name: 'Chris',
        last_name: 'Tolnai',
        email: 'c.tolnai@billionaires.com',
        password: 'test1234567',
        level: 'Junior',
    }
]

const seedDev = () => Developer.bulkCreate(devData);

module.exports = seedDev;