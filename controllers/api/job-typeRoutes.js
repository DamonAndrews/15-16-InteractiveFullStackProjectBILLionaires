const router = require('express').Router();
const { JobType } = require('../../models');

router.post('/job_type', async (req, res) => {
  try { 
    const jobtypeData = await JobType.update({
    jobtype_description_of_work: req.body.jobtype_description_of_work,
    jobtype_work_type: req.body.jobtype_work_type,
    jobtype_rate_of_pay: req.body.jobtype_rate_of_pay,
    jobtype_location: req.body.jobtype_location,
    jobtype_tier: req.body.jobtype_tier,
  });
  
  // if the Job Type is successfully updated, the new response will be returned as json
  res.status(200).json(jobtypeData)
} catch (err) {
  res.status(400).json(err);
}
});



module.exports = router;
