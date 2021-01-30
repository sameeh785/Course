import axios from 'axios';
// import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import { toast } from 'react-toastify';
import history from './../../history';
import store from './../../store/store';
// import { template } from '@babel/core';

export const getAttachmentLink = (payload) => {

    let formData = new FormData();

    for (let file of payload.files) {
        formData.append("uploadedFile", file);
    }

    formData.append("authID", payload.authID);
    formData.append("projectID", payload.projectID);

    return axios.post('/api/project/getAttachmentLink', formData);

}

export const getVideoLink = (project) => {
    return axios.post('/api/project/getVideoLink', project);
}

export const loadMoreMessages = (payload) => async (dispatch) => {

    try {

        let res = await axios.post('/api/project/loadmessages', payload);

        if (res.data.success) {

            payload.dontDispatch && dispatch({
                type: 'UPDATE_MESSAGEST_LIST',
                payload: res.data.messageList
            });

            // (res.data.messageList.length >= payload.threshold) &&
            //TBC there is minor issue
            payload.callback(res.data.messageList);

        }

    }
    catch (e) {

        toast.error(e.response ? e.response.data.error : 'Could not load messages');
    }

}

export const archiveCard = (payload) => async (dispatch) => {

    let callback = payload.callback;
    delete payload.callback;

    try {

        let res = await axios.post('/api/task/archiveCard', payload);

        if (res.data.success) {
            dispatch({
                type: 'CARD_STATUS_UPDATED',
                payload: payload
            });
            callback(payload, res.data);
        }

    } catch (e) {
        toast.error(e.response ? e.response.data.error : 'Card status could not be updated!');
    }

}

export const deleteProject = (payload) => {

    return axios.post('/api/project/deleteProject', payload);

}

// export const shownIntroVideo = (payload) => {

//     return axios.post('/api/project/shownIntroVideo', payload);

// }

export const loadTemplateDetails = (payload) => {

    return axios.post('/api/project/loadTemplateDetails', payload);

}


export const loadProjectDetails = (payload) => {

    return axios.post('/api/project/loadProjectDetails', payload);

}

export const loadIntros = (payload) => {

    return axios.post('/api/project/loadProjectIntro', payload);

}

export const saveProjectSample = (payload) => {

    return axios.post('/api/project/saveProjectSample', payload);

}

export const saveProjectIntro = (payload) => {

    return axios.post('/api/project/saveProjectIntro', payload);

}

export const deleteProjectIntro = (payload) => {

    return axios.post('/api/project/deleteIntro', payload);

}

export const deleteProjectSample = (payload) => {

    return axios.post('/api/project/deleteSample', payload);

}

export const loadfiles = (payload) => {
    return axios.post('/api/project/discussion/loadfiles', payload)
}

export const createProject = (payload) => {

    return axios.post('/api/project/design', payload);

}

export const renameFile = (payload) => {

    return axios.post('/api/project/discussion/renamefile', payload);

}


export const deleteFile = (payload) => {

    return axios.post('/api/project/discussion/deletefile', payload);

}





export const updateProjectInstallment = (payload) => async dispatch => {

    try {

        const res = await axios.post('/api/project/approveinstallment', payload);

        if (res.data.success) {
            toast.success('Installment approved!');
            dispatch({
                type: 'NEW_PROJECT_UPDATED',
                payload: res.data.project
            });
        } else {
            toast.error(res.data.error);
        }

    } catch (e) {

        toast.error(e.response ? e.response.data.error : 'Installment could not be approved!');

    }

}

export const uploadProjectFeeSlip = (payload) => async dispatch => {

    try {

        store.dispatch({
            type: 'SET_LOADING',
            payload: true
        });

        let formData = new FormData();
        
        for (let item in payload) {

            formData.append(item, payload[item]);

        }

        const res = await axios.post('/api/project/submitvoucher', formData);

        if (res.data.success) {
            toast.success('Your deposit slip successfully submitted');
            store.dispatch({
                type: 'INSTALLMENT_SUBMIT',
                payload: res.data.installment
            });
            payload.callback();
        } else {
            toast.error(res.data.error);
        }

        store.dispatch({
            type: 'SET_LOADING',
            payload: false
        });

    } catch (e) {

        toast.error(e.response ? e.response.data.error : 'Oops, deposit slip  could not be submitted!');

    }

}

export const uploadFile = (payload, args) => {

    // let channel = a"discussion"

    return axios.post('/api/project/' + args.channel + '/uploadFile', payload);

}

export const submitRejectionResponse = (payload) => async dispatch => {

    try {

        const res = await axios.post('/api/project/submitresponse', payload);

        if (res.data.success) {
            toast.success('Your response has been successfully submitted');
        } else {
            toast.error(res.data.error);
        }

    } catch (e) {

        toast.success('Oops, your response could not be submitted!');

    }

}

export const loadExternalProjects = (payload) => async dispatch => {

    try {
        const res = await axios.get('/api/project/getuserprojects/' + payload.userID);

        dispatch({
            type: "EXT_PROJECTS_LOADED",
            payload: res.data.projects
        });
        // toast.success("Card added!");

    } catch (err) {
        console.log(err);
        // toast.error("Card could not be added!");
    }


}




export const acceptInvitation = (payload) => async dispatch => {

    function loginUser(res) {

        localStorage.setItem("token", res.data.token);

        dispatch({
            type: "LOGIN_SUCCESSFUL",
            token: res.data.token,
            payload: { loggedInUser: res.data.loggedInUser }
        });

        dispatch({
            type: 'PROJECT_LOADED',
            payload: res.data.loggedInUser.project
        });

        dispatch({
            type: 'EXT_PROJECTS_LOADED',
            payload: res.data.loggedInUser.projects
        });

        history.push('/collaboration/project/' + res.data.externalProjectID);

    }

    try {
        const res = await axios.post('/api/project/acceptInvitation/' + payload.token);

        if (res.data.success) {

            loginUser(res);

        } else {

            toast.warn("Welcome " + res.data.error);


            if (res.data.errorCode == 100) {
                //Already joined this project, so load the project and navigate to collaboration

                loginUser(res);

                // dispatch({
                //     type: 'PROJECT_LOADED',
                //     payload: res.data.loggedInUser.projects.find((project) => {

                //         return project._id == res.data.externalProjectID;

                //     })
                // });
            }
        }


    } catch (err) {
        toast.error(err.response.data.error);
    }


}


export const resetProject = (payload) => async dispatch => {

    try {

        let res = await axios.post('/api/project/reset/' + payload.project, payload);

        localStorage.setItem('token', res.data.token);

        if (res.data.success) {

            dispatch({
                type: "LOGIN_SUCCESSFUL",
                payload: res.data
            });
            history.push('/gettingstarted');

        }


    } catch (err) {

        toast.error(err.response ? err.response.data.error : err.message);
        history.push('/');

    }

}

export const updateProjectBudget = (payload) => async dispatch => {

    try {
        const res = await axios.post('/api/project/updatebudget', payload);

        dispatch({
            type: "PROJECT_BUDGET_UPDATED",
            payload: res.data
        })
        toast.success("Budget updated!");

    } catch (err) {
        toast.error(err.response ? err.response.data.error : err.message);
    }

}




export const addLane = (payload) => async dispatch => {

    let callback = payload.callback;
    delete payload.callback;

    try {
        const res = await axios.post('/api/task/addLane', payload);

        if (res.data.success) {
            dispatch({
                type: "ADDED_LANE",
                payload: res.data.lane
            })
            // toast.success("Task list added!");
            callback(true);
        }

    } catch (err) {
        toast.error("Task list could not be added!");
        callback(false);
    }


}

export const addCard = (payload) => async dispatch => {

    let callback = payload.callback;
    delete payload.callback;

    try {
        const res = await axios.post('/api/task/addcard/' + payload.laneID, payload);

        if (res.data.success) {
            dispatch({
                type: "ADDED_CARD",
                payload: { ...payload, scard: res.data.scard }
            });
            // toast.success("Card added!");
            callback(true, res.data);
        }
    } catch (err) {
        toast.error("Card could not be added!");
        callback(false);
    }

}

export const loadNewProjects = (authID) => {

    return axios.get('/api/project/get_new?authID=' + authID);

    // try {
    //     const res = await axios.get('/api/project/get_new?authID=' + authID);

    //     dispatch({
    //         type: "LOADED_NEW_PROJECTS",
    //         payload: res.data
    //     })
    //     toast.success("Loaded New Projects successfully");

    // } catch (err) {
    //     toast.error("New Projects could not be loaded!");
    // }


}

export const loadArchiveProjects = () => async dispatch => {

    try {
        const res = await axios.get('/api/project/get_archive');

        dispatch({
            type: "LOADED_ARCHIVE_PROJECTS",
            payload: res.data
        })
        toast.success("Loaded Active Projects successfully");

    } catch (err) {
        toast.error("Active Projects could not be loaded!");
    }


}

export const loadActiveProjectsIn = (token) => {

    return axios.post('/api/project/get_active_projects', { token });
}

export const loadActiveProjects = (authID) => async dispatch => {

    try {
        const res = await axios.get('/api/project/get_active?authID=' + authID);

        dispatch({
            type: "LOADED_ACTIVE_PROJECTS",
            payload: res.data
        })
        toast.success("Loaded Active Projects successfully");

    } catch (err) {
        toast.error("Active Projects could not be loaded!");
    }

}

export const adminupdate = (payload) => async dispatch => {

    try {

        const res = await axios.put('/api/project/update/' + payload._id, payload);

        dispatch({
            type: "PROJECT_UPDATED",
            payload: res.data
        });

        toast.success("Project updated successfully");

    } catch (err) {
        toast.error("Project could not be updated!");
    }
}



export const visitedactivity = (payload) => async dispatch => {

    try {

        const res = await axios.post('/api/project/visitedactivity', payload);

        res.data.success && dispatch({
            type: "VISITED_ACTIVITY",
            payload: payload
        });

        // toast.success("Project updated successfully");

    } catch (err) {
        // toast.error("Project could not be updated!");
    }
}

export const changedicussionstatus = (payload) => {
    return axios.post('/api/project/changedicussionstatus', payload);
}

export const changeStatus = (payload) => async dispatch => {

    try {

        const res = await axios.put('/api/project/update/' + payload._id, payload);

        dispatch({
            type: "PROJECT_UPDATED",
            payload: res.data
        });

        toast.success("Project updated successfully");

    } catch (err) {
        toast.error("Project could not be updated!");
    }
}

export const sendChatMessage = (payload) => async dispatch => {

    try {

        const res = await axios.post('/api/project/discussion/sendmessage/' + payload.dID, {
            videos: payload.videos,
            message: payload.message,
            authID: payload.authID,
            projectID: payload.projectID,
            dID:payload.dID,
            dTitle:payload.dTitle
        });

        // dispatch({
        //     type: "MESSAGE_SENT",
        //     payload: res.data
        // });

        payload.callback(res.data.success ? res.data.message : null);

        // toast.success("Project updated successfully");

    } catch (err) {

        console.log(err);

        // toast.error("Project could not be updated!");
    }
}

export const loadProjectDesign = (payload) => {

    return axios.post('/api/project/loadprojectdesign', payload);

}


export const fetchProjectUpdate = (projectID) => {

    return axios.get('/api/project/byid/' + projectID);

}

export const loadDiscussion = (payload) => {

    return axios.post('/api/project/discussion/get', payload);

}

export const createDiscussion = (payload) => {

    // try {

    return axios.post('/api/project/discussion/create', payload);

    //     dispatch({
    //         type: "DISCUSSION_CREATED",
    //         payload: res.data.discussion
    //     })
    //     // toast.success("Projects loaded successfully");

    // } catch (err) {
    //     // toast.error("Projects could not be loaded!");
    // }

}



export const getprojectforadmin = (payload) => async dispatch => {

    try {

        let callback = payload.callback;
        delete payload.callback;

        const res = await axios.post('/api/project/getprojectforadmin', payload);

        if (res.data.success) {
            callback(res.data.project);
            dispatch({
                type: "PROJECT_LOADED",
                payload: res.data.project
            });
        }
        // toast.success("Projects loaded successfully");

    } catch (err) {
        // toast.error("Projects could not be loaded!");
    }

}

export const fetchProjectById = (projectID) => async dispatch => {

    try {

        const res = await axios.get('/api/project/byid/' + projectID);

        dispatch({
            type: "PROJECT_LOADED",
            payload: res.data
        })
        // toast.success("Projects loaded successfully");

    } catch (err) {
        // toast.error("Projects could not be loaded!");
    }

}

export const loadProjects = (payload) => {
    return axios.post('/api/project/get_all', payload);
}

export const loadTemplates = (payload) => {
    return axios.post('/api/project/get_templates', payload);
}


export const fetchProject = () => async dispatch => {
    const config = {
        headers: {
            "Content-Type": 'application/json'
        }
    }
    try {

        const res = await axios.post('/api/projects');

        dispatch({
            type: "PROJECTS_LOADED",
            payload: res.data
        })
        toast.success("Projects loaded successfully");

    } catch (err) {
        toast.error("Projects could not be loaded!");
    }

}