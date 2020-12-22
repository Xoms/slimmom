import axios from "axios";

const url = "https://slimmom-backend.herokuapp.com/";

axios.defaults.baseURL = url;

class PhonebookService {
  //===================  auth ===================

  register(newUser) {
    return axios.post("/auth/register", newUser);
  }

  login(userCredentials) {
    return axios.post("/auth/login", userCredentials);
  }

  logout() {
    return axios.post("/auth/logout");
  }

  getCurrentUser() {
    return axios.get("/user");
  }

  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  unsetToken() {
    axios.defaults.headers.common.Authorization = ``;
  }

  getDailyRate(userCharacteristics) {
    axios.defaults.headers.common.Authorization =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmUxZGNiODVjMmJhNzAwMDQ0NDA5NjUiLCJzaWQiOiI1ZmUxZGNjMjVjMmJhNzAwMDQ0NDA5NjYiLCJpYXQiOjE2MDg2Mzc2MzQsImV4cCI6MTYwODY0MTIzNH0.LUdm7gIfo8gLD8EZWyRP5j8l225ZrWvpvqD0-Nb_lsg";
    return axios.post(
      "/daily-rate/5fcffaa7f7ae5300043515a6",
      userCharacteristics
    );
  }

  //================== contacts ==================
  getContacts() {
    return axios.get("/contacts");
  }

  addContact(newContact) {
    return axios.post("/contacts", newContact);
  }

  delContact(id) {
    return axios.delete(`/contacts/${id}`);
  }

  updateContact(id) {
    return axios.patch(`/contacts/${id}`);
  }
}

export default new PhonebookService();
