import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://the-burger-builder-9bfe3.firebaseio.com/'
});

export default instance;