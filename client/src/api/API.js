import axios from 'axios';

export default {
	searchTitle: (query) => {
		return axios.get(`/api/search/${query}`);
	},
	loadSaved: (query) => {
		return axios.get('/api');
	},
	deleteSaved: (query) => {
		return axios.delete(`/api/${query}`);
	},
	saveBook: (query) => {
		return axios.post('/api', query);
	}
}