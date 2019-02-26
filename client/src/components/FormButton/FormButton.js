import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AuthService from '../AuthService';
import API from '../../utils/API';
import './FormButton.css';

export default class FormButton extends React.Component {


    handleChange = event => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
    };

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    if (this.Auth.loggedIn()) {
        this.props.history.replace('/');
      }
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen} style={{fontSize: '1.3rem'}}>
          Sign Up
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          style ={{fontSize: '1.3rem'}}
        >
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          
          <form onSubmit={this.handleFormSubmit}>
          <DialogContent >
            <DialogContentText style={{fontSize: '1.3rem'}}> 
              Enter your email, create a username and password.
            </DialogContentText>
            <TextField style={{fontSize: '1.3rem'}}
                
              autoFocus
              htmlFor="email"
              name="email"
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              onChange={this.handleChange}
            />
            <TextField
              autoFocus
              htmlFor="username"
              name="username"
              margin="dense"
              id="username"
              label="Full Name"
              type="text"
              fullWidth
              onChange={this.handleChange}
            />
            <TextField
              autoFocus
              htmlFor="pwd"
              name="password"
              margin="dense"
              id="pwd"
              label="Password"
              type="password"
              fullWidth
              onChange={this.handleChange}
            />
            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={this.handleClose} color="primary">
            Sign Up
            </Button>
            
          </DialogActions>
        </form>
          
        </Dialog>
        
      </div>
    );
  }
}