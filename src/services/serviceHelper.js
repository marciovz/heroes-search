const crypto = require('crypto');
const axios = require('axios');

const {url, key} = require('../config/config.js');

const createHash = (ts, privateKey, pubKey) => {
	return crypto.createHash('md5').update(ts + privateKey + pubKey).digest('hex');
}

const createParams = () => {
	let hash = createHash("1", key.privateKey, key.pubKey)
	return `?ts=1&apikey=${key.pubKey}&hash=${hash}`
}

const makeURL = (contextPath, id) => {
	let params = createParams();
	return `${url.urlBase}${contextPath}/${id}${params}`
}

const makeRequest = (url) => {
	return axios.get(url)
		.then(function (response) {
			return response.data;
		})
		.catch( function (error) {
			console.log(error);
		});
}

module.exports = {
	makeRequest: makeRequest,
	makeURL: makeURL
}
