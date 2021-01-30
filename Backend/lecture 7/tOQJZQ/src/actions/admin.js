import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchDiscounts = (payload) => {
    return axios.post('/api/admin/fetchDiscounts', payload);
}

export const toggleDiscountState = (payload) => {
    return axios.post('/api/admin/toggleDiscountState', payload);
}


export const deletePaymentRecord = (payload) => {

    return axios.post('/api/admin/deletePaymentRecord', payload);

}

export const sendDiscountMessage = (payload) => {
    return axios.post('/api/admin/sendDiscountMessage', payload);
}

export const fetchStudentReport = (payload) => {
    return axios.post('/api/admin/fetchStudentReport', payload);
}

export const loadBlogs = (payload) => {
    return axios.post('/api/admin/get_blogs', payload);
}

export const deleteSubscriber = (payload) => {

    return axios.post('/api/admin/deleteSubscriber', payload);

}

export const approveSubscription = (token) => {

    return axios.post('/api/admin/approveSubscription', token);

}

export const loadSubscribers = (payload) => {

    return axios.post('/api/admin/loadSubscribers', payload);

}

export const approveStudent = (payload) => {

    return axios.post('/api/admin/approveStudent', payload);

}

export const loadFinance = (payload) => {

    return axios.post('/api/admin/load_finance', payload);

}

export const updateStudentStatus = (body) => {

    return axios.post('/api/admin/updateStudentStatus', body);

}

export const load_students_for_mentors = (payload) => {

    return axios.post('/api/admin/load_students_for_mentors', payload);

}

export const loadStudents = (payload) => {

    return axios.post('/api/admin/load_students', payload);

}

// updateProjectBudget

export const updatePermissions = async (payload) => {

    try {

        let res = await axios.put('/api/admin/update_permissions', payload);

        if (res.data.success) {
            toast.success("Permissions updated!");
        } else {
            toast.warn("Permissions cannot be updated right now");
        }

    } catch (e) {

        toast.error(e.data ? e.data.response.data.error : e.message);

    }

}

export const loadPermissionsForUser = (payload) => {

    return axios.post('/api/admin/load_permissions', payload);

}

export const loadNews = (payload) => {

    return axios.get('/api/admin/load_news');


}



export const toggleAdmissions = async (payload) => {

    try {

        let res = await axios.post('/api/admin/toggleAdmissions', payload);

        if (res.data.success) {
            toast.success("Admission status toggled!");
            // payload.callback();
        }


    } catch (e) {

        toast.error("Admission status could not be toggled!");

    }

}

//AuthID must be attached for server-side validation
export const deleteNews = async (payload) => {

    try {

        let res = await axios.post('/api/admin/deleteNews', payload);

        if (res.data.success) {
            toast.success("News deleted successfully");
            payload.callback();
        }


    } catch (e) {

        toast.error("News cannot be deleted at this moment");

    }

}

//AuthID must be attached for server-side validation
export const sendMessage = (payload) => async (dispatch) => {

    try {

        let res = await axios.post('/api/admin/make_news', payload);

        toast.success("News published successfully");

        dispatch({
            type: "NEWS_SAVED",
            payload: res.data.news
        });

    } catch (e) {

        toast.error("News cannot be created at this moment");

    }

}