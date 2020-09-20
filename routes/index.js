const { transcode } = require('buffer');
// Dependencies
const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./bookAPIRoutes');

router.use('/api', apiRoutes);

router.use((req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;