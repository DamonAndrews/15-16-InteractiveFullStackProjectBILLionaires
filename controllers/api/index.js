const router = require('express').Router();
const developerRoutes = require('./developerRoutes');
const customerRoutes = require('./customerRoutes');



router.use('/', developerRoutes);
router.use('/', customerRoutes);

module.exports = router;
