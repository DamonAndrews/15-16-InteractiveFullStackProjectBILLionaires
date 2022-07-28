const router = require('express').Router();
const { Developer } = require('../../models');


//Update developer info
router.post('/', async (req, res) => {
  try { 
    const developerData = await Developer.create({
    developer_first_name: req.body.developer_first_name,
    developer_last_name: req.body.developer_last_name,
    developer_job_tier: req.body.developer_job_tier,
    developer_email_address: req.body.developer_email_address,
    developer_phone_number: req.body.developer_phone_number,
    developer_address: req.body.developer_address,
  });
  // if the customer is successfully created, the new response will be returned as json
  res.status(200).json(developerData)
} catch (err) {
  res.status(400).json(err);
}
});

module.exports = router;
