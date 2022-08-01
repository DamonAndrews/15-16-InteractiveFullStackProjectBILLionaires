const router = require('express').Router();
const { Developer } = require('../../models');


//Update developer info
router.post('/', async (req, res) => {
  try { 
    const developerData = await Developer.create({
    developer_first_name: first_name,
    developer_last_name: last_name,
    developer_email_address: email_address,
    developer_phone_number: phone_number,
  });
  // if the customer is successfully created, the new response will be returned as json
  res.status(200).json(developerData)
} catch (err) {
  res.status(400).json(err);
}
});

module.exports = router;