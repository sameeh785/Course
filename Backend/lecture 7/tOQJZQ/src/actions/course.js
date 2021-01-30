
import axios from 'axios';

export const loadBatches = (payload)=>{

    return axios.post('/api/course/loadBatches', payload);

}


export const fetchStudents = (payload)=>{

    return axios.post('/api/course/fetchStudents', payload);

}


export const fetchCoursespublic = (payload)=>{

    return axios.post('/api/course/fetchCoursespublic', payload);

}

export const fetchCourses = (payload)=>{

    return axios.post('/api/course/fetchCourses', payload);

}



export const assignTeacher = (payload)=>{

    return axios.post('/api/course/assignTeacher', payload);

}

export const addBatch = (payload)=>{

    return axios.post('/api/course/addbatch', payload);

}