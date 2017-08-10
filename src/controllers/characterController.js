const charactersService = require('../services/charactersService.js');

const getCharacter = (id) => {
	return charactersService.getCharacter(id);
}

module.exports = {
	getCharacter: getCharacter
}

