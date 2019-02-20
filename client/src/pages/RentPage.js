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
      NameOfRenter: "",
      EmailOfRenter: "",
      DateAvailable: "",
      RentItemPrice: "",
      uniqueID: ""
  }
  }


  handleFormSubmit = event => {
    
    event.preventDefault();

    API.startRent(this.state.rentTitle, this.state.rentItemName, this.state.NameOfRenter, this.state.EmailOfRenter, this.state.DateAvailable, this.state.RentItemPrice, this.state.uniqueID)
      .then(res => {
        alert(`We will process your form ${res.data.NameOfRenter}`)
        this.setState({ 
          rentTitle: res.data,
          rentItemName: res.data,
          NameOfRenter: res.data,
          EmailOfRenter: res.data,
          DateAvailable: res.data,
          RentItemPrice: res.data,
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
                {`Item Name: ${rent.RentItemName}`}
              </div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`Name: ${rent.NameOfRenter}`}
              </div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`Email: ${rent.EmailOfRenter}`}
              </div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`Date: ${rent.DateAvailable}`}
              </div>
              <div className="row">
              <div className="col-sm-1"></div>
                {`Price: ${rent.RentItemPrice}`}
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
    // else {
    //   rentRows = <p>Loading...</p>;
    // }
    // Kat Search Rent --------------------

    return (
      <div className="container">


        <h1 className="RentingTitle" style={{marginTop: '65px'}}>What Are You Renting?</h1>
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
                  <label htmlFor="NameOfRenter">Name:</label>
                  <input className="form-control"
                        placeholder="Enter Your Name Here"
                        name="NameOfRenter"
                        type="name"
                        id="NameOfRenter"
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="EmailOfRenter">Email:</label>
                  <input className="form-control"
                        placeholder="email@email.com"
                        name="EmailOfRenter"
                        type="email"
                        id="EmailOfRenter"
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="DateOfRent">Date Available:</label>
                  <input className="form-control"
                        placeholder="Enter Date"
                        name="DateOfRent"
                        type="date"
                        id="DateOfRent"
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="RentItemPrice">Price:</label>
                  <input className="form-control"
                        placeholder="$123"
                        name="RentItemPrice"
                        type="number"
                        id="RentItemPrice"
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