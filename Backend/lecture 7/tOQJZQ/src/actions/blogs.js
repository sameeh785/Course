
import Axios from 'axios';


export const loadExtNews = () => {

    return Axios.get('/api/blog/loadExtNews');

}

export const getBlogs = (payload) => {

    return Axios.post('/api/blog/getBlogs', payload);

}

export const deleteBlog = (payload) => {

    return Axios.post('/api/blog/deleteBlog', payload);

}


export const archiveBlog = (payload) => {

    return Axios.post('/api/blog/archiveBlog', payload);

}

export const addArticle = (payload) => {

    let formData = new FormData();

    for (let file of payload.files) {
        formData.append('files', file);
    }

    delete payload.files;

    for (let item in payload) {
        formData.append(item, payload[item]);
    }


    return Axios.post('/api/blog/addArticle', formData);

}