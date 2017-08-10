const express = require('express');
const router = express.Router();
const rootController = require('../controllers/rootController.js');
const { stories } = require('../config/config.js')

router.get('/', (req, res) => {
	rootController.getAttribute(stories.story1.id).then((rooter) => {
		res.render('index.ejs',{ stories, rooter });
	});
});

module.exports = router;