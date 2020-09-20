const router = require('express').Router();
const controller = require('../controllers/bookController');

router.route('/')
	.get(controller.findAll)
	.post(controller.create);

router.route('/:id')
	.get(controller.findID)
	.put(controller.update)
	.delete(controller.remove);

router.route('/search/:title')
	.get(controller.search);

module.exports = router;