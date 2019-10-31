import React, { Component } from 'react';
import './MainPage.css';
// import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AuthService from './AuthService';
import API from '../utils/API';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './FormButton.css';
// Eddie's Added Components
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Main extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      try {
      } catch (err) {
        console.log(err);
      }
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(this.state.username, this.state.email, this.state.password)
      .then(res => {
        alert(
          'Account for ' + this.state.username + ' created, you can now login'
        );
      })
      .catch(err => alert(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    if (this.Auth.loggedIn()) {
      try {
        this.props.history.replace('/');
      } catch (err) {
        console.log(err);
      }
      alert('You are already logged in!');
      this.setState({ open: false });
    }
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <main className='mainPage-container'>
          <div className='left-half'>
            <article>
              <Card
                style={{
                  opacity: '.9',
                  background: 'black',
                  width: '55%',
                  color: '#fff'
                }}>
                <CardContent>
                  <h1>Host A Space</h1>
                  <br />
                  <Button variant='contained' color='primary' size='large'>
                    Sign Up
                  </Button>
                </CardContent>
              </Card>
            </article>
          </div>
          <div className='right-half'>
            <article>
              <Card
                style={{
                  opacity: '.9',
                  background: 'black',
                  width: '55%',
                  color: '#fff'
                }}>
                <CardContent>
                  <h1>Rent Equipment</h1>
                  <br />
                  <Button variant='contained' color='primary' size='large'>
                    Sign Up
                  </Button>
                </CardContent>
              </Card>
            </article>
          </div>
        </main>
        <footer className='footer'>
          Copyright {new Date().getFullYear()} Agustin Chavez
        </footer>
      </div>
    );
  }
}

export default Main;
