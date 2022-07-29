const { Customer } = require('../models')

const customerData = [
    {
        company_name: 'Amazon',
        company_address: '440 Terry Ave N, Seattle, WA 98109',
        company_phone_number: '(206)266-1000',
        first_name: 'Jeff',
        last_name: 'Bezos',
        email: 'jBez@amazon.com',
        work_description: {
            front_end: '$1000',
            back_end: '$1300',
            maintenance: '$800',
            full_stack: '$2000',
        },
        location: {
            remote: '$200',
            on_site: '$500',
        },
        rate_of_pay: '$100',
        job_tier: {
            1: '$200',
            2: '$500',
            3: '1000',
        },
    }
]

const seedCustomer = () => Customer.bulkCreate(customerData);

module.exports = seedCustomer;