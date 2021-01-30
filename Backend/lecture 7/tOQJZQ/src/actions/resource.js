import axios from 'axios';
import { toast } from 'react-toastify';
import store from './../store';

// let host = "http://localhost:5000";
let host = "";

export const loadResources = (payload) => {

    return axios.post(host + '/api/resource/get', payload);

}

export const loadCategories = () => {
    return axios.get(host + '/api/category/getall');
}

// export const loadCategory = async (args) => {
//     try {
//         let res = await axios.get(host + '/api/category/getall');
//         if (Array.isArray(res.data)) {
//            !args.noToast && toast.success("Categories loaded successfully");
//             store.dispatch({
//                 type: 'CATEGORY_LOADED',
//                 payload: res.data
//             });
//         }
//     } catch (e) {
//         toast.success("Categories could not be loaded!");
//     }
// }

export const deleteResource = (payload) => async dispatch => {
    try {
        let res = await axios.delete(host + '/api/resource/delete/' + payload.id);
        if (res.data._id) {
            toast.success("Resource deleted successfully");
            store.dispatch({
                type: 'RESOURCE_REMOVED',
                payload: payload.id
            });
            payload.callback();
        }
    } catch (e) {
        toast.success("Resource could not be deleted!");
    }
}


export const updateResource = (payload) => async dispatch => {
    try {
        let res = await axios.put(host + '/api/resource/update', payload);
        if (res.data._id) {
            !payload.noToast && toast.success((payload.item || "Resource") +" updated successfully");
            store.dispatch({
                type: "RESOURCE_UPDATED",
                payload: res.data
            });
        }
    } catch (e) {
        toast.success((payload.item || "Resource")+" could not be updated!");
    }
}

export const saveResource = (payload) => async dispatch => {
    try {
        let res = await axios.post(host + '/api/resource/create', payload);
        if (res.data._id) {
            toast.success("Resource added successfully");
            store.dispatch({
                type: "RESOURCE_ADDED",
                payload: res.data
            });
            payload.callback();
        }
    } catch (e) {
        toast.success("Resource could not be added!");
    }
}