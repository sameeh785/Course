import axios from 'axios';

export const signup = (payload, history) => (dispatch) => {

    axios.post('/signup', payload).then((resp) => {

        dispatch({
            type: "USER_SIGNUP",
            user: resp.data
        });

        history.push('/login');

    });

}