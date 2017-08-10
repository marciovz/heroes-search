const {url, key, path, formatImage} = require('../config/config.js');
const serviceHelper = require('./serviceHelper');

const preparaData = (response) => {
	let result = response.data.results[0]
	return {
		name: result.name,
		description: result.description,
		attributionText: response.attributionText,
		thumbnail: `${result.thumbnail.path}/${formatImage.imgFoto}.${result.thumbnail.extension}`
	}
}

const getCharacter = (id) => {
	let urlCharacters = serviceHelper.makeURL( path.charactersPath, id);
	return serviceHelper.makeRequest(urlCharacters).then(preparaData)
}

module.exports = {
	getCharacter: getCharacter
}