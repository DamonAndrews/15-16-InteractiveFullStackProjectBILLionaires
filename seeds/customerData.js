const { Customer } = require('../models')
const { generatePDF } = require("../public/js/generatePDF");

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
    },
    {
        company_name: 'Google',
        company_address: '1600 Amphitheatre Pkwy, Mountain View, CA 940436',
        company_phone_number: '(650)253-0000',
        first_name: 'Sundar',
        last_name: 'Pichai',
        email: 'sundarpichai@gmail.com',
        work_description: {
            front_end: '$1200',
            back_end: '$1500',
            maintenance: '$1000',
            full_stack: '$2500',
        },
        location: {
            remote: '$500',
            on_site: '$800',
        },
        rate_of_pay: '$180',
        job_tier: {
            1: '$400',
            2: '$700',
            3: '1100',
        },
    },
    {
        company_name: 'Tesla',
        company_address: '3500 Deer Creek Rd, Palo Alto, CA 94304',
        company_phone_number: '(781)575-4238',
        first_name: 'Elon',
        last_name: 'Musk',
        email: 'elon<3amber@tesla.com',
        work_description: {
            front_end: '$800',
            back_end: '$1100',
            maintenance: '$500',
            full_stack: '$1900',
        },
        location: {
            remote: '$100',
            on_site: '$300',
        },
        rate_of_pay: '$100',
        job_tier: {
            1: '$200',
            2: '$500',
            3: '1000',
        },
    },
    {
        company_name: 'Trilogy',
        company_address: '31 E 22nd St, 10th Floor, New York, NY 10016',
        company_phone_number: '(646)618-8898',
        first_name: 'Dan',
        last_name: 'Sommer',
        email: 'DeeSommers@ihateyou.com',
        work_description: {
            front_end: '$10000',
            back_end: '$13000',
            maintenance: '$8000',
            full_stack: '$20000',
        },
        location: {
            remote: '$2000',
            on_site: '$5000',
        },
        rate_of_pay: '$1000',
        job_tier: {
            1: '$2000',
            2: '$5000',
            3: '10000',
        },
    }
]

const seedCustomer = () => Customer.bulkCreate(customerData);

module.exports = seedCustomer;