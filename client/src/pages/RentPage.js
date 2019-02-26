import React, {Component} from 'react';

import API from "../utils/API";
import withAuth from '../components/withAuth';
// import './Login.css'
// import {Link} from 'react-router-dom';

class Rent extends Component {
  constructor() {
    super();
    this.state = {
      rentTitle: "",
      rentItemName: "",
      nameOfRenter: "",
      emailOfRenter: "",
      dateAvailable: "",
      rentItemPrice: "",
      uniqueID: "",
      username: "",
      email: ""
  }}

  handleFormSubmit = event => {
    
    event.preventDefault();

    // startRent pushes values into the api call to populate the rents section for admin use
    API.startRent(this.state.rentTitle, this.state.rentItemName, this.state.nameOfRenter, this.state.emailOfRenter, this.state.dateAvailable, this.state.rentItemPrice, this.state.uniqueID)
      .then(res => {
        alert(`We will process your form ${res.data.nameOfRenter}`)
        this.setState({ 
          rentTitle: res.data,
          rentItemName: res.data,
          nameOfRenter: res.data,
          emailOfRenter: res.data,
          dateAvailable: res.data,
          rentItemPrice: res.data,
          uniqueID: res.data
        })
      })
      .catch(err => {
        alert(err.response.data.message)
      });

      // //get user id to then post the rentItemName to that user
      // API.getUser(this.props.user.id).then(res => {
      //   this.setState({
      //     username: res.data.username,
      //     email: res.data.email
      //   })
      // });
      

      // store same information into user's array so that he can see his own rental proposals
      API.startRentUser(this.props.user.id, this.state.rentTitle, this.state.rentItemName)
      .then(res => {
        console.log(res);
        this.props.history.replace('/login');
        
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

  render() {
    const { rentes } = this.state;
    // let rentRows;
    if (rentes) {
      // rentRows = rentes.map(rent => {
        rentes.map(rent => {
        return (
          <div key={rent._id}
            style={{
              border: "1px solid #ced4da",
              backgroundColor: "white",
              borderRadius: ".25rem",
              color: "#007bff",
              textDecoration: "underline",
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 10,
              marginBottom: 5
            }}
          >
            <div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`Title: ${rent.rentTitle}`}
              </div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`Item Name: ${rent.rentItemName}`}
              </div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`Name: ${rent.nameOfRenter}`}
              </div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`Email: ${rent.emailOfRenter}`}
              </div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`Date: ${rent.dateAvailable}`}
              </div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`Price: ${rent.rentItemPrice}`}
              </div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`Rent ID: ${rent.rentTitle.toString() + rent.rentItemName.toString()}`}
              </div>
            
            </div>
          </div>
        );
      });
    } 

    return (
      <div className="container">


        <h1 className="RentingTitle" style={{marginTop: '65px', paddingTop: '15px'}}>What Are You Renting?</h1>
        <div className="row">
          <div className="col-sm-4">

              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="rentTitle">Title: </label>
                  <input className="form-control"
                        placeholder="Title"
                        name="rentTitle"
                        type="text"
                        id="rentTitle"
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="rentItemName">Rental Item Name: </label>
                  <input className="form-control"
                        placeholder="Enter Rental Item Name Here"
                        name="rentItemName"
                        type="text"
                        id="rentItemName"
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="nameOfRenter">Name:</label>
                  <input className="form-control"
                        placeholder="Enter Your Name Here"
                        name="nameOfRenter"
                        type="name"
                        id="nameOfRenter"
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="emailOfRenter">Email:</label>
                  <input className="form-control"
                        placeholder="email@email.com"
                        name="emailOfRenter"
                        type="email"
                        id="emailOfRenter"
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="dateAvailable">Date Available:</label>
                  <input className="form-control"
                        placeholder="Enter Date"
                        name="dateAvailable"
                        type="date"
                        id="dateAvailable"
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="rentItemPrice">Price:</label>
                  <input className="form-control"
                        placeholder="$123"
                        name="rentItemPrice"
                        type="number"
                        id="rentItemPrice"
                        onChange={this.handleChange}/>
                </div>
                

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
        </div>
      </div>

    );
  }
}

// export default Rent;
export default withAuth(Rent);