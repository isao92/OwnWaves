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

  // get all builds documents as array of objects
  getAllMics: () => {
    return axios.get(`/api/mics`);
  },

  // get data associated with one build
  getOneMics: (id) => {
    return axios.get(`/api/mics/${id}`);
  },

  // builds delete
  deleteOneMics: (id) => {
    return axios.delete(`/api/mics/${id}`)
  },

  // get data associated with one build
  getOneBuilds: (id) => {
    return axios.get(`/api/builds/${id}`);
  },

  // builds delete
  deleteOneBuilds: (id) => {
    return axios.delete(`/api/builds/${id}`)
  },


  
  // get data associated with one request id
  searchRequest: (id) => {
    return axios.get(`/api/request/${id}`);
  },
  
  // get request of all requestes
  getAllRequestes: () => {
    return axios.get(`/api/request`);
  },

  // start a new request document (use on Admin page)
  startRequest: (requestNumDays, userEmail, UserNameOfRequest, PhoneOfRequest, DateOfRequest, uniqueID) => {
    return axios.post('api/request', {
      requestNumDays: requestNumDays,
      userEmail: userEmail,
      UserNameOfRequest: UserNameOfRequest,
      PhoneOfRequest: PhoneOfRequest,
      DateOfRequest: DateOfRequest,
      uniqueID: uniqueID
    }); 
  },



  
  // get data associated with one request id
  searchRent: (id) => {
    return axios.get(`/api/rent/${id}`);
  },
  
  // get request of all requestes
  getAllRent: () => {
    return axios.get(`/api/rent`);
  },

  // start a new request document (use on Admin page)
  startRent: (rentTitle, RentItemName, NameOfRenter, EmailRenter, DateAvailable, RentItemPrice, uniqueID) => {
    return axios.post('api/rent', {
      rentTitle: rentTitle,
      RentItemName: RentItemName,
      NameOfRenter: NameOfRenter,
      EmailRenter: EmailRenter,
      DateAvailable: DateAvailable,
      RentItemPrice: RentItemPrice,
      uniqueID: uniqueID
    }); 
  },


};
