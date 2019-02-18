import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import ConfirmButton from '../ConfirmButton/ConfirmButton';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 30,
    backgroundColor: 'white',
    padding: '20px',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
    
    fontSize: '1.5rem'
  },
});

const ranges = [
  {
    value: '3-5',
    label: '3 to 5 days',
  },
  {
    value: '7',
    label: '1 Week',
  },
  {
    value: '14',
    label: '2 Weeks or more',
  },
];

class InputFields extends React.Component {
  state = {
    genre: [''],
    timeRange: ['3-5 days'],
    
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>

      <Grid container spacing={24}>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        <TextField
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Enter your Name"
          InputProps={{
            startAdornment: <InputAdornment position="start">*</InputAdornment>,
          }}
        />
        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="How Long"
          value={this.state.timeRange}
          onChange={this.handleChange('timeRange')}
          InputProps={{
            startAdornment: <InputAdornment position="start">Time</InputAdornment>,
          }}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Enter your Email"
          InputProps={{
            startAdornment: <InputAdornment position="start">*</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-adornment-genre"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Genre"
          value={this.state.genre}
          onChange={this.handleChange('genre')}
          helperText="This is optional"
          
        />

        <ConfirmButton></ConfirmButton>
        
        </Grid>
      </Grid>
      </div>
    );
  }
}

InputFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputFields);
