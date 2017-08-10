const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController.js');


router.get('/:id', (req, res) => {
	characterController.getCharacter(req.params.id).then((character) => {
		res.render('characters.ejs', {character});	
	});
});


module.exports = router;