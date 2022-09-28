const router = require('express').Router();
const metadataController = require('../Controllers/metadataController');

router.route('/').post(metadataController.retrieve);
// /api prefix as this will be more for analytics/metrics/external use
module.exports = router;
