import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', {username: username, email: email, password: password});
  },
  // get all builds documents as array of objects
  getAllBuilds: () => {
    return axios.get(`/api/builds`);
  },

  // get all builds documents as array of objects
  getAllPlaces: () => {
    return axios.get(`/api/places`);
  },

  // get data associated with one build
  getOnePlaces: (id) => {
    return axios.get(`/api/places/${id}`);
  },

  // builds delete
  deleteOnePlaces: (id) => {
    return axios.delete(`/api/places/${id}`)
  },

  // get data associated with one build
  getOneBuilds: (id) => {
    return axios.get(`/api/builds/${id}`);
  },

  // builds delete
  deleteOneBuilds: (id) => {
    return axios.delete(`/api/builds/${id}`)
  },

  // get all batch documents as array of objects
  getAllBatch: () => {
    return axios.get(`/api/batch`);
  },

  // start a new batch document (use on Admin page) builds inside parenthesis
  startBatch: (batchNum, bagNum, builds, bagSize) => {
    // builds: builds
    return axios.post('api/batch', {batchNum: batchNum, bagNum: bagNum, builds: builds, bagSize: bagSize}); 
  }
};
