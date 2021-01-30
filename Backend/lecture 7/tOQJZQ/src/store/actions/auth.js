import axios from 'axios';


export const updateUser = async (payload, callback) => {

    try {

        // &city = 20;
        let resp = await axios.post('/updateuser',  payload);

        callback(resp)

    } catch (e) {
        console.log(e.response.data);
    }


}
export const deleteUser = async (id, callback) => {

    try {

        // &city = 20;
        let resp = await axios.delete('/deleteuser?abc=' + id);

        callback(resp)

    } catch (e) {
        console.log(e.response.data);
    }


}

export const getUsers = async (callback) => {

    try {

        let resp = await axios.get('/getusers');

        callback(resp)

    } catch (e) {
        console.log(e.response.data);
    }


}

export const signup = async (payload, callback) => {

    try {

        let resp = await axios.post('/signup', payload);

        callback(resp.data);

        // dispatch({
        //     type: "USER_SIGNUP",
        //     user: resp.data
        // });


    } catch (e) {
        console.log(e.response.data);
    }


}