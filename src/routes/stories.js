const express = require('express');
const router = express.Router();
const storiesController = require('../controllers/storiesController.js');
const { stories } = require('../config/config.js');

router.get('/:id', (req, res) => {
	const id = req.params.id;
	if(id == stories.story1.id) urlThumbnail = stories.story1.urlImg
	else if(id == stories.story2.id) urlThumbnail = stories.story2.urlImg
	else if(id == stories.story3.id) urlThumbnail = stories.story3.urlImg		
	
	storiesController.getStory(id).then((story) => {
		res.render('stories.ejs', { story, urlThumbnail });		
	});    
});

module.exports = router;