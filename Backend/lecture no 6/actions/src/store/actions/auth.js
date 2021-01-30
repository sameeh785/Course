import axios from 'axios';
import { connect } from 'react-redux';

export const signup = (payload, history) => async (dispatch) => {
    try{
      let resp = await axios.post('/signup',payload);
      console.log("the data is ",resp.data)
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

export const list = () => async (dispatch) => {
    try{
    let usersList = await axios('/getuser');
    dispatch({
        type : "getUsers",
        data : usersList.data
    })
    }
    catch(e){
        console.log(e.response.data)
    }


}
export const userDelete=(id,index)=> async(dispatch)=>{
try {
    let deleteMyUser=await axios.delete('/deleteUser?abc='+id)
    dispatch({
        type : 'updatedUser',
        arrayIndex : index
    })
} catch (error) {
    console.log(error);
}
}

export const userUpdate =(index,payload) => async(dispatch)=>{
  try{
      let res =await axios.put('/userupdate',payload)
      dispatch({
          type : "USER_UPDATED",
          newData : res.data,
          arrayIndex: index
      })

  }
  catch(e){
      console.log(e.response.data)
  }
}