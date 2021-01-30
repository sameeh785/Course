import axios from 'axios';
// import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import { toast } from 'react-toastify';


export const deleteMentor = (payload) => async dispatch => {

    debugger;

    try {
        const res = await axios.delete('/api/mentor/delete/' + payload._id);

        dispatch({
            type: "MENTOR_DELETED",
            payload: payload._id
        })
        toast.success("Deleted mentor successfully");

    } catch (err) {
        toast.error("Mentor could not be deleted!");
    }


}

export const addMentor = (payload) => async dispatch => {

    try {
        const res = await axios.post('/api/mentor/create', payload);

        dispatch({
            type: "MENTOR_CREAETED",
            payload: res.data
        })
        toast.success("Crated mentor successfully");

    } catch (err) {
        toast.error("Mentor could not be created!");
    }


}


export const changeStatus = (payload) => async dispatch => {

    try {
        const res = await axios.put('/api/mentor/update/' + payload._id, payload);

        // dispatch({
        //     type: "MENTOR_UPDATED",
        //     payload: res.data
        // })

        if (res.data._id) {

            dispatch({
                type: "MENTOR_UPDATED",
                payload: payload
            });

            toast.success("Mentor updated successfully!");

        }

    } catch (err) {
        toast.error("Mentors could not be updated!");
    }


}


//Not sure if we will need this, as mentor will get its projects on login
export const loadMentorProjects = (payload) => async dispatch => {

    try {
        const res = await axios.post('/api/mentor/get_my_projects');

        dispatch({
            type: "LOADED_MENTORS",
            payload: res.data
        })
        toast.success("Loaded mentors successfully");

    } catch (err) {
        toast.error("Mentors could not be loaded!");
    }



}


export const loadMentors = (token) => async dispatch => {

    try {
        const res = await axios.post('/api/mentor/get', {token});

        dispatch({
            type: "LOADED_MENTORS",
            payload: res.data
        })
        toast.success("Loaded mentors successfully");

    } catch (err) {
        toast.error("Mentors could not be loaded!");
    }


}