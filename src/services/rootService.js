const serviceHelper = require('./serviceHelper.js');
const { path } = require('../config/config.js');

const prepareData  = (response) => {
	const result = response.data.results[0];
	return {
		attributionText: response.attributionText
	}
}

const getAttributeFromMarvel = (id) => {
	let UrlToStory = serviceHelper.makeURL(path.storiesPath, id);
	return serviceHelper.makeRequest(UrlToStory).then(prepareData)
}

module.exports = {
	getAttributeFromMarvel: getAttributeFromMarvel
}