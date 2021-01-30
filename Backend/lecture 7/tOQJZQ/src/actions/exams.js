
import axios from 'axios';

export const saveStudentsTestPermission = (payload) => {
    return axios.post('/api/admin/exams/saveStudentsTestPermission', payload);
}

export const reAllowExam = (payload) => {
    return axios.post('/api/admin/exams/reAllowExam', payload);
}

export const loadResponses = (payload) => {
    return axios.post('/api/admin/exams/loadResponses', payload);
}

export const submitExam = (payload) => {
    return axios.post('/api/admin/exams/submitExam', payload);
}

export const loadExam = (payload) => {
    return axios.post('/api/admin/exams/loadExam', payload);
}

export const toggleExam = (payload) => {
    return axios.post('/api/admin/exams/toggleExam', payload);
}

export const loadStudyScheme = (payload) => {
    return axios.post('/api/admin/exams/loadStudyScheme', payload);
}

export const saveExam = (payload) => {
    return axios.post('/api/admin/exams/saveExam', payload);
}

export const loadExams = (payload) => {
    return axios.post('/api/admin/exams/loadExams', payload);
}