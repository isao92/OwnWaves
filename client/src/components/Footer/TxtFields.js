import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    backgroundColor: "#fcf1e5",
    // backgroundColor: "#ef9a5c",

    width: 200
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class FilledTextFields extends React.Component {
  state = {
    name: "Em G",
    email: "emg@gmail.com"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="filled-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-email-input"
          label="Email"
          className={classes.textField}
          value={this.state.email}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="filled"
        />
      </form>
    );
  }
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilledTextFields);