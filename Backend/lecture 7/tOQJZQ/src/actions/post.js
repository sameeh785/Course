import axios from 'axios';

// get posts
export const getPosts = () => async (dispatch) => {
	try {
		const res = await axios.get('api/posts');

		dispatch({
			type: 'GET_POSTS',
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: 'POSTS_ERR',
			payload: { msg: err.message },
		});
	}
};
// get post bu id
export const getPost = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/posts/${id}`);

		dispatch({
			type: 'GET_POST',
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: 'POSTS_ERR',
			payload: { msg: err.message },
		});
	}
};
// Update post by id
export const updatePost = (payload) => async (dispatch) => {
	try {
		// let fd = new FormData();

		// for (var item in payload) {
		//   fd.append(item, payload[item]);
		// }
		const res = await axios.put(`/api/posts/${payload._id}`, payload);

		dispatch({
			type: 'UPDATE_POST',
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: 'POSTS_ERR',
			payload: { msg: err.message },
		});
	}
}; // Update post by id
export const updateDate = (id, date) => async (dispatch) => {
	try {
		// let fd = new FormData();

		// for (var item in payload) {
		//   fd.append(item, payload[item]);

		// }
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const body = JSON.stringify({ date });
		const res = await axios.put(`/api/posts/date/${id}`, body, config);

		dispatch({
			type: 'UPDATE_DATE',
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: 'POSTS_ERR',
			payload: { msg: err.message },
		});
	}
};
export const showPost = (id, show) => async (dispatch) => {
	try {
		// let fd = new FormData();

		// for (var item in payload) {
		//   fd.append(item, payload[item]);

		// }
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const body = JSON.stringify({ show });
		const res = await axios.put(`/api/posts/show/${id}`, body, config);

		dispatch({
			type: 'UPDATE_SHOW',
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: 'POSTS_ERR',
			payload: { msg: err.message },
		});
	}
};
export const getViews = (id) => async (dispatch) => {
	try {
		const res = await axios.put(`/api/posts/views/${id}`);

		dispatch({
			type: 'SHOW_VIEWS',
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: 'POSTS_ERR',
			payload: { msg: err.message },
		});
	}
};
// Delete Post
export const deletePost = (id) => async (dispatch) => {
	try {
		const res = await axios.delete(`/api/posts/${id}`);
		const posts = res.data;
		dispatch({
			type: 'DELETE_POST',
			payload: { id, posts },
		});
		console.log(res);
	} catch (err) {
		dispatch({
			type: 'POSTS_ERR',
			payload: { msg: err.message },
		});
	}
};

// Create posts
export const addPost = ({ title, content, image }) => async (dispatch) => {
	let fData = new FormData();
	fData.append('name', title);
	fData.append('content', content);
	fData.append('image', image);
	try {
		const res = await axios.post('api/posts', fData);

		dispatch({
			type: 'ADD_POSTS',
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: 'POSTS_ERR',
			payload: { msg: err.message },
		});
	}
};

export const addArticle = (data) => async (dispatch) => {

	let formData = new FormData();

	let files = data.files;
	delete data.files;

	for(let item in data){
		formData.append(item, data[item]);
	}

	for(let item in files){
		formData.append("images", files[item].file);
	}

	try {
		const res = await axios.post('/api/posts', formData);
		dispatch({
			type: 'ADD_ARTICLE',
			payload: res.data,
		});
	} catch (err) {
		console.log(err.message);
	}
};
