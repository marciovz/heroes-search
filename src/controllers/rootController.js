const rootService = require('../services/rootService.js');

const getAttribute = (id) => {
	return rootService.getAttributeFromMarvel(id);
}

module.exports = {
	getAttribute: getAttribute
}