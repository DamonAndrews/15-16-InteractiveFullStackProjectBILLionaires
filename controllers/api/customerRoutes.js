const router = require('express').Router();
const { Customer } = require('../../models');

// GET all customers
router.get('/', async (req, res) => {
  const customerData = await Customer.findAll().catch((err) => { 
      res.json(err);
    });
      const customers = customerData.map((customer) => customer.get({ plain: true }));
      res.render('all', { customers });
    });

// GET one customer
router.get('/customer/:id', async (req, res) => {
  try{ 
      const customerData = await Customer.findByPk(req.params.id);
      if(!customerData) {
          res.status(404).json({message: 'No customer with this id, please try again to get billing!'});
          return;
      }
      const customer = customerData.get({ plain: true });
      res.render('customer', customer);
    } catch (err) {
        res.status(500).json(err);
    };     
});

// POST a new customer using async/await
router.post('/', async (req, res) => {
  try { 
    const customerData = await Customer.create({
    customer_company_name: req.body.customer_company_name,
    customer_company_address: req.body.customer_company_address,
    customer_company_phone_number: req.customer_company_phone_number,
    customer_contact_first_name: req.body.customer_contact_first_name,
    customer_contact_last_name: req.body.customer_contact_last_name,
    customer_contact_phone_number: req.body.customer_contact_phone_number,
    customer_contact_email: req.body.customer_contact_email,
    customer_job_types_offered: req.body.customer_job_types_offered,
  });
  // if the customer is successfully created, the new response will be returned as json
  res.status(200).json(customerData)
} catch (err) {
  res.status(400).json(err);
}
});

// PUT (update) a new customer using async/await
router.post('/customer/:id:', async (req, res) => {
  try { 
    const customerData = await Customer.create({
    customer_company_name: req.body.customer_company_name,
    customer_company_address: req.body.customer_company_address,
    customer_company_phone_number: req.customer_company_phone_number,
    customer_contact_first_name: req.body.customer_contact_first_name,
    customer_contact_last_name: req.body.customer_contact_last_name,
    customer_contact_phone_number: req.body.customer_contact_phone_number,
    customer_contact_email: req.body.customer_contact_email,
    customer_job_types_offered: req.body.customer_job_types_offered,
  });
  // if the customer is successfully updated, the new response will be returned as json
  res.status(200).json(customerData)
} catch (err) {
  res.status(400).json(err);
}
});

//DELETE a customer
router.delete('/:customer_id', (req, res) => {
  // Looks for the books based on isbn given in the request parameters and deletes the instance from the database
  Customer.destroy({
    where: {
      customer_id: req.params.customer_id,
    },
  })
    .then((deletedCustomer) => {
      res.json(deletedCustomer);
    })
    .catch((err) => res.json(err));
});

module.exports = router;