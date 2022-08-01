const router = require('express').Router();
const { Developer } = require('../../models');


//Update developer info
router.post('/', async (req, res) => {
  try { 
    const devData = await Developer.create({
    first_name: req.body.developer_first_name,
    last_name: req.body.developer_last_name,
    email: req.body.developer_email,
    password: req.body.developer_password,
    level: req.body.developer_level,
  });
  // if the customer is successfully created, the new response will be returned as json
  res.status(200).json(devData)
} catch (err) {
  res.status(400).json(err);
}
});


router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await Developer.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Verify the posted password with the password store in the database
    // const validPassword = await userData.checkPassword(req.body.password);

    // if (!validPassword) {
    //   res
    //     .status(400)
    //     .json({ message: 'Incorrect email or password, please try again' });
    //   return;
    // }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
      console.log(req.session)
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
