import React, { Component } from 'react';
import withAuth from './withAuth';
import API from '../utils/API';
import { Link } from 'react-router-dom';

class Profile extends Component {

  constructor () {
    super ()
    this.state = {
      id: "",
      rentsArray: [],
      rentTitle: "",
      rentItemName: "",
      addressOfRental: "",
      rentItemPrice: "",
      dateAvailable: "",
    }
  }

  state = {
    username: "",
    email: ""
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email,
        rentsArray : res.data.rentsArray,
        id: res.data._id
      })
    });
    
  };

  handleFormSubmit = event =>{
    event.preventDefault();
    alert('Clicked delete')
    // store same information into user's array so that he can see his own rental proposals
    API.startRentUser(this.props.user.id, this.state.rentTitle, this.state.rentItemName, this.state.rentItemPrice)
    .then(res => {
      this.props.history.replace('/login');
    })
    .catch(err => {
      alert(err.response.data.message)
    });

  }


  render() {
    return (
      <div className="container Profile" style={{marginTop: '20px', paddingTop: '10px', paddingBottom: '700px', fontSize: '2rem'}}>
        <h1>On the profile page!</h1>
        <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p>
        <h2>My Rental Proposal:</h2>
        <form onSubmit={this.handleFormSubmit}>
        <div className="therentals" style={{fontSize: '1.5rem'}}>
        {this.state.rentsArray.map(item => (
          <div key={item._id} className="parent">
          <p>Title: {item.rentTitle}</p>
          <p>Name of Rental Item: {item.rentItemName}</p>
          <p>Address: {item.addressOfRental}</p>
          <p>Price: {item.rentItemPrice}</p>
          <button type="submit" className="btn btn-primary"> I'm not renting this anymore </button>
          </div>
        ))}
        </div>
        </form>
        <Link to="/">Go home</Link>
      </div>
    )
  }
}

export default withAuth(Profile);