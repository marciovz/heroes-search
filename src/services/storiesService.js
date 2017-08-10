const serviceHelper = require('./serviceHelper.js');
const { path } = require('../config/config.js');

const prepareData = (response) => {
	let result = response.data.results[0];
	return {
		title: result.title,
		description: result.description,
		attributionText: response.attributionText,
		characters: result.characters && result.characters.items.map((character) => {
			return {
				name: character.name,
				id: character.resourceURI.substring(character.resourceURI.lastIndexOf("/")+1)
			}
		})
	}
}


const getStoryFromMarvel = (id) => {
	let UrlToStory = serviceHelper.makeURL(path.storiesPath, id);
	return serviceHelper.makeRequest(UrlToStory).then(prepareData)
}

module.exports = {
	getStoryFromMarvel: getStoryFromMarvel
}
