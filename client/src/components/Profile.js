import React, { Component } from 'react';
import withAuth from './withAuth';
import API from '../utils/API';
import { Link } from 'react-router-dom';

class Profile extends Component {

  constructor () {
    super ()
    this.state = {
      rentsArray: [],
      rentTitle: "",
      rentItemName: "",
      dateAvailable: "",
      rentItemPrice: ""
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
        rentsArray : res.data.rentsArray
      })
    });
    
  };


  render() {
    return (
      <div className="container Profile" style={{marginTop: '20px', paddingTop: '10px', paddingBottom: '700px', fontSize: '2rem'}}>
        <h1>On the profile page!</h1>
        <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p>

        <div className="therentals" style={{fontSize: '1.5rem'}}>
        {this.state.rentsArray.map(item => (
          <div className="parent">
          <p>Title: {item.rentTitle}</p>
          <p>TitleItemName: {item.rentItemName}</p>
          </div>
        ))}
        </div>
        <Link to="/">Go home</Link>
      </div>
    )
  }
}

export default withAuth(Profile);