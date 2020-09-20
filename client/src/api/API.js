import axios from 'axios';

export default {
	searchTitle: (query) => {
		return axios.get(`localhost:3001/api/search/${query}`);
	},
	loadSaved: (query) => {
		return axios.get('localhost:3001/api');
	},
	deleteSaved: (query) => {
		return axios.delete(`localhost:3001/api/${query}`);
	},
	saveBook: (query) => {
		return axios.post('localhost:3001/api', query);
	}
}