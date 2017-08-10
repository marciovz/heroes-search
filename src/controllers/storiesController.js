const storiesService = require('../services/storiesService.js');

const getStory = (id) => {
	return storiesService.getStoryFromMarvel(id);
}

module.exports = {
	getStory : getStory
}