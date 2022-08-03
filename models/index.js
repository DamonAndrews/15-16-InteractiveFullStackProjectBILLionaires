const Customer = require('./customer');
const Developer = require('./developer');

Developer.hasMany(Customer, {
    foreignKey: ''
})

module.exports = { Customer, Developer };


