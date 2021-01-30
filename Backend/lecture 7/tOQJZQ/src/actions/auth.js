import axios from 'axios';
import history from './../../history';
// import { ToastsContainer, ToastsStore } from 'react-toasts';
import { toast } from 'react-toastify';

export const get_profile_pic = (payload) => {
    return axios.get('/api/auth/get_profile_pic?pid=' + payload.projectID + "&uid=" + payload.id);
}


export const resetProject = (payload) => async dispatch => {

    try {

        let res = await axios.delete('/api/auth/' + payload.project, payload);


    } catch (e) {


    }

}

export const decodeJSONToken = (token) => {

    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export const checkUserSession = (body) => async dispatch => {


    let myToken = localStorage.getItem("token");
    if (!myToken) {
        return;
    }
    dispatch({
        type: 'SET_LOADING',
        payload: true
    });

    try {

        const res = await axios.get('/api/auth/session', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${myToken}`
            }
        });

        if (res.data.success) {



            dispatch({
                type: "LOGIN_SUCCESSFUL",
                payload: res.data,
                token: res.data.token
            });

            let loggedUser = res.data.loggedInUser;


            if (loggedUser.type == "student") {
                dispatch({
                    type: 'PROJECT_LOADED',
                    payload: loggedUser.project
                });

                dispatch({
                    type: "EXT_PROJECTS_LOADED",
                    payload: loggedUser.projects
                });

                // if (!loggedUser.internshipActive) {
                //     return history.push('/passedout');
                // }


            } else if (loggedUser.type == "mentor") {
                //Mentor will not personal or external projects, just active projects

                dispatch({
                    type: "LOADED_ACTIVE_PROJECTS",
                    payload: loggedUser.projects
                });


            }

        } else {
            localStorage.removeItem('token');
            dispatch({
                type: 'SET_LOADING',
                payload: false
            });
            history.push('/');
        }


    } catch (err) {

        dispatch({
            type: "LOGIN_FAIL"
        });

    }
}

export const applyAdmission = (body) => async dispatch => {

    let callback = body.callback;

    try {

        const res = await axios.post('/api/auth/applyadmission', body);

        if (res.data.success) {

            localStorage.setItem('token', res.data.token);                
            
            dispatch({
                type: "LOGIN_SUCCESSFUL",
                payload: { loggedInUser: res.data.user },
                token: res.data.token
            });
            dispatch({
                type: "REGISTER_SUCCESS",
                payload: res.data
            })
    
            // Why this check was here, adding this affect the Chat module
            // if (!body.enroll) {
            dispatch({
                type: 'PROJECT_LOADED',
                payload: res.data.user.project
            });
            // }
    
            callback != undefined && callback();
    
            toast.success("Registered Succefully!");


        } else {

            toast.warn("Oops, we cannot apply for admission right now!");

        }


    } catch (err) {

        toast.warn(err.response.data.message);


        // dispatch({
        //     type: "LOGIN_FAIL"
        // });

    }
}





export const updateProfile = (body) => async dispatch => {

    try {

        const res = await axios.put('/api/auth/updateprofile/' + body._id, body);

        if (res.data.success) {

            dispatch({
                type: "PROFILE_UPDATED",
                payload: { loggedInUser: body }
            });

            toast.success("Profile updated!");


        } else {

            toast.warn("Oops, profile could not be updated");

        }


    } catch (err) {

        toast.warn("Oops, your profile could not be updated");


        // dispatch({
        //     type: "LOGIN_FAIL"
        // });

    }
}


export const createNewPassword = (body) => async dispatch => {

    try {

        const res = await axios.post('/api/auth/updatePassword', body);

        if (res.data.success) {
            toast.success("Password updated!");
            history.push('/');
        } else {
            toast.warn(res.data.error);
        }


    } catch (err) {
        toast.warn(err.message);

    }
}

export const checkPassExistence = (email) => {

    return axios.get('/api/auth/checkuser?email=' + email);

}

export const requestNewPassword = (body) => async dispatch => {

    let callback = body.callback;
    delete body.calback;

    dispatch({
        type: 'REQUEST_PASSWORD_START'
    });

    try {

        const res = await axios.get('/api/auth/requestpasssword?email=' + body.email);

        if (res.data.success) {
            toast.success("Please check your email!");
            // body.callback();
            callback(true);
            dispatch({
                type: 'REQUEST_PASSWORD_END'
            });
        } else {
            callback(false);
            toast.warn("Oops, We could not request a new password!");
            dispatch({
                type: 'REQUEST_PASSWORD_END'
            });
        }


    } catch (err) {
        callback(false);

        dispatch({
            type: 'REQUEST_PASSWORD_END'
        });
        
        toast.warn(typeof err.response.data == "object" ? err.response.data.error : "Oops, We could not request a new password!");
        // dispatch({
        //     type: 'REQUEST_PASSWORD_START_END'
        // });

    }
}

export const login = (body) => async dispatch => {

    try {

        const res = await axios.post('/api/auth/login', body);

        if (res.data.errors) {
            toast.warn(res.data.errors[0].msg);
        } else {
            localStorage.setItem('token', res.data.token);
            dispatch({
                type: "LOGIN_SUCCESSFUL",
                payload: res.data,
                token: res.data.token
            });

            // let loggedUser = decodeJSONToken(res.data.token).user;
            let loggedUser = res.data.loggedInUser;



            history.push('/' + loggedUser.type);
            if (loggedUser.type == "student") {
                dispatch({
                    type: 'PROJECT_LOADED',
                    payload: loggedUser.project
                });
                dispatch({
                    type: 'EXT_PROJECTS_LOADED',
                    payload: loggedUser.projects
                });

                // if (!loggedUser.internshipActive) {
                //     return history.push('/passedout');
                // }
            } else if (loggedUser.type == "mentor") {
                //Mentor will not personal or external projects, just active projects

                dispatch({
                    type: 'LOADED_MENTOR_USERS'
                });

                //TBC this may be used in future for collaboration features
                // dispatch({
                //     type: "LOADED_ACTIVE_PROJECTS",
                //     payload: loggedUser.projects
                // });


            }

        }


    } catch (err) {

        dispatch({
            type: "LOGIN_FAIL"
        });

        toast.warn("Oops, we can login right now!");

    }
}

//Register User and Project at the same time
export const registerHandler = (body) => async dispatch => {

    let callback = body.callback;

    try {

        delete body.callback;

        const res = await axios.post('/api/users/' + (body.enroll ? 'enroll_project' : 'create') + (body.token ? '?token=' + body.token : ''), body);

        dispatch({
            type: "LOGIN_SUCCESSFUL",
            payload: { loggedInUser: res.data.user },
            token: res.data.token
        });
        dispatch({
            type: "REGISTER_SUCCESS",
            payload: res.data
        })

        // Why this check was here, adding this affect the Chat module
        // if (!body.enroll) {
        dispatch({
            type: 'PROJECT_LOADED',
            payload: res.data.user.project
        });
        // }

        callback != undefined && callback();

        toast.success("Registered Succefully!");

    } catch (err) {
        callback != undefined && callback();
        toast.error(err.response ? err.response.data.error : err.message);

        dispatch({
            type: "REGISTER_FAIL"
        })
    }
}



export const loadUsers = () => async dispatch => {
    try {
        const res = await axios.get('/api/users/getusers');
        dispatch({
            type: "LOAD_USERS",
            payload: res.data
        })

    } catch (error) {
        console.log(error.message)
    }
}