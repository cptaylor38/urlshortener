const router = require('express').Router();
const shorturlController = require('../Controllers/shorturlController');

router.route('/create').post(shorturlController.create);
router.route('/:id').get(shorturlController.retrieve);

module.exports = router;