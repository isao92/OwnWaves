import React, {Component} from 'react';

import API from "../utils/API";
import axios from "axios";
import {Link} from 'react-router-dom';

class Request extends Component {
  constructor() {
    super();
    this.state = {
      requestNumDays: "",
      userEmail: "",
      UserNameOfRequest: "",
      PhoneOfRequest: "",
      DateOfRequest: "",
      uniqueID: ""
  }
  }


  handleFormSubmit = event => {
    
    event.preventDefault();

    API.startRequest(this.state.requestNumDays, this.state.userEmail, this.state.UserNameOfRequest, this.state.PhoneOfRequest, this.state.DateOfRequest, this.state.uniqueID)
      .then(res => {
        alert(`Added: ${res.data.UserNameOfRequest}`)
        this.setState({ 
          request: res.data,
          bag: res.data,
          UserNameOfRequest: res.data,
          PhoneOfRequest: res.data,
          growth: res.data,
          uniqueID: res.data
        })
      })
      .catch(err => {
        alert(err.response.data.message)
      });
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
  };

  searchRequest = () => {
    
    // let { searchNumber } = this.state;
    // searchNumber = "";
    // ${searchNumber}
    axios
      .get(`/api/request/`)
      .then(data => {
        this.setState({ requestes: data.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { requestes } = this.state;
    // let requestRows;
    if (requestes) {
      // requestRows = requestes.map(request => {
        requestes.map(request => {
        return (
          // request.toString removes error log in console
          <div key={request._id}
            style={{
              border: "1px solid #ced4da",
              backgroundColor: "white",
              borderRadius: ".25rem",
              color: "#007bff",
              textDecoration: "underline",
              paddingLeft: 10,
              marginBottom: 5,
            }}
          >
            <div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`Name: ${request.UserNameOfRequest}`}
              </div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`How Many Days: ${request.requestNumDays}`}
              </div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`Email: ${request.userEmail}`}
              </div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`Phone: ${request.PhoneOfRequest}`}
              </div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`Date: ${request.DateOfRequest}`}
              </div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`Request ID: ${request.requestNumDays.toString() + request.userEmail.toString()}`}
              </div>
            
            </div>
          </div>
        );
      });
    } 
    // else {
    //   requestRows = <p>Loading...</p>;
    // }

    return (
      <div className="container" style={{marginTop: '0px'}}>

        <h1 className="RequestTitle">Request Information</h1>
        <div className="row">
          <div className="col-sm-12">

              <form onSubmit={this.handleFormSubmit}>
                
                <div className="row">
                      <div className="col-sm-1"></div>
                          <div className="col-sm-5">
                            <div className="form-group">
                            <label htmlFor="requestNumDays">Number Of Days:</label>
                            <input className="form-control"
                                  placeholder="Enter Number of Days"
                                  name="requestNumDays"
                                  type="number"
                                  id="requestNumDays"
                                  onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="userEmail">Email:</label>
                            <input className="form-control"
                                  placeholder="Enter Email"
                                  name="userEmail"
                                  type="email"
                                  id="userEmail"
                                  onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                              <label htmlFor="UserNameOfRequest">Name:</label>
                              <input className="form-control"
                                    placeholder="Enter Your Name Here"
                                    name="UserNameOfRequest"
                                    type="name"
                                    id="UserNameOfRequest"
                                    onChange={this.handleChange}/>
                            </div>
                          </div>

                          <div className="col-sm-5">
                            <div className="form-group">
                            <label htmlFor="PhoneOfRequest">Phone:</label>
                              <input className="form-control"
                                    placeholder="Enter Phone Number"
                                    name="PhoneOfRequest"
                                    type="number"
                                    id="PhoneOfRequest"
                                    onChange={this.handleChange}/>
                              </div>
                              <div className="form-group">
                                <label htmlFor="DateOfRequest">Date:</label>
                                <input className="form-control"
                                      placeholder="Enter Date"
                                      name="DateOfRequest"
                                      type="date"
                                      id="DateOfRequest"
                                      onChange={this.handleChange}/>
                              </div>
                              <div className="form-group">
                                <label htmlFor="uniqueID">Item Name:</label>
                                <input className="form-control"
                                      placeholder="itemID"
                                      name="uniqueID"
                                      type="text"
                                      id="uniqueID"
                                      onChange={this.handleChange}/>
                            </div>
                            
                          </div>
                          
                      <div className="col-sm-1"></div>
                </div>
                <button type="submit" className="btn btn-primary" style={{marginLeft: '10%'}}>Submit</button>
              </form>

            </div>
     
          <p style={{marginLeft: '15%', marginTop: '15px'}}>Want to rent? -><Link to="/signup">Go to Signup</Link></p>

          
        </div>
      </div>

    );
  }
}

export default (Request);