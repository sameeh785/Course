import axios from 'axios';
import { connect } from 'react-redux';

export const signup = (payload, history) => async (dispatch) => {
    try{
      let resp = await axios.post('/signup',payload);
      dispatch({
                type: "USER_SIGNUP",
                user: resp.data
            });
    
            history.push('/login');
    }
    catch(e){
        alert(e.response.data)
    }

    // axios.post('/signup', payload).then((resp) => {

    //     dispatch({
    //         type: "USER_SIGNUP",
    //         user: resp.data
    //     });

    //     history.push('/login');

    // });

} 

export const login = (payload,history) => (dispatch) =>{
    axios.post('/login',payload).then((resp)=>{
        dispatch({
            type: "USER_LOGIN",
            user:resp.data,
            history1 : history
        })
        history.push('/dashboard');
    })
}