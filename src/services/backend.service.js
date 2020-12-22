import axios from 'axios';

const url = "https://slimmom-backend.herokuapp.com/"; 

axios.defaults.baseURL = url;

class PhonebookService {

    //===================  auth ===================

    register(newUser){
        return axios.post('/auth/register', newUser)
    }

    login(userCredentials){
        return axios.post('/auth/login', userCredentials)
    }

    logout(){
        return axios.post('/auth/logout');
    }

    refresh(sid){
        return axios.post('/auth/refresh', sid);
    }

    getCurrentUser(){
        return axios.get('/user')
    }

    setToken(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    unsetToken(){
        axios.defaults.headers.common.Authorization = ``;
    }

    

}

export default new PhonebookService();