const router = require('express').Router();
const metadataRoutes = require('./metadata');
const urlRoutes = require('./urls');

router.use('/metadata', metadataRoutes);
router.use('/url', urlRoutes);

module.exports = router;