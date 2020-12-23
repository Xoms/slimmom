import axios from 'axios';

const url = 'https://slimmom-backend.herokuapp.com/';

axios.defaults.baseURL = url;

class PhonebookService {
  //===================  auth ===================

  register(newUser) {
    return axios.post('/auth/register', newUser);
  }

  login(userCredentials) {
    return axios.post('/auth/login', userCredentials);
  }

  logout() {
    return axios.post('/auth/logout');
  }

  getCurrentUser() {
    return axios.get('/user');
  }

  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  unsetToken() {
    axios.defaults.headers.common.Authorization = ``;
  }

  getDailyRate(userCharacteristics) {
    return axios.post(`/daily-rate/`, userCharacteristics);
  }


  //================== contacts ==================
  getContacts() {
    return axios.get('/contacts');
  }

  addContact(newContact) {
    return axios.post('/contacts', newContact);
  }

  delContact(id) {
    return axios.delete(`/contacts/${id}`);
  }

  updateContact(id) {
    return axios.patch(`/contacts/${id}`);
  }
}

export default new PhonebookService();
