//THIS IS THE LOGIN PAGE LOGIC

const router = require('express').Router();
const { Developer } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
  try {
    const developerData = await Developer.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const developer = developerData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      developer,
      
      //on homepage while logged in youll be prompted to login or logout depending on your state
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  //if they hit login url while logged in this takes them to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
