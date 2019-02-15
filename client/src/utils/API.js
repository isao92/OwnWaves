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
  // get all projects documents as array of objects
  getAllProjects: () => {
    return axios.get(`/api/projects`);
  },

  // get data associated with one project
  getOneProjects: (id) => {
    return axios.get(`/api/projects/${id}`);
  },

  // projects delete
  deleteOneProjects: (id) => {
    return axios.delete(`/api/projects/${id}`)
  },

  // get all batch documents as array of objects
  getAllBatch: () => {
    return axios.get(`/api/batch`);
  },

  // start a new batch document (use on Admin page) projects inside parenthesis
  startBatch: (batchNum, bagNum, projects, bagSize) => {
    // projects: projects
    return axios.post('api/batch', {batchNum: batchNum, bagNum: bagNum, projects: projects, bagSize: bagSize}); 
  }
};
