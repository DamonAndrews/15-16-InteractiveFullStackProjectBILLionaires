const router = require('express').Router();
const developerRoutes = require('./developerRoutes');



router.use('/', developerRoutes);

module.exports = router;
