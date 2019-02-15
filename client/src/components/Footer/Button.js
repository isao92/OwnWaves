import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MailOutline from "@material-ui/icons/MailOutline";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: 16,
    height: 55,
    marginLeft: 20,
    marginRight: 20,
    textTransform: "lowercase",
    backgroundColor: "#ef9a5c",
    color: "#b62519",
    fontSize: "1.8em",
    fontFamily: "Trebuchet MS"
  },
  input: {
    display: "none"
  }
});

function Buttons(props) {
  const { classes } = props;
  return (
    <div className={classes.btnTxt}>
      <Button variant="contained" className={classes.button}>
        <MailOutline />
        Subscribe
      </Button>
    </div>
  );
}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Buttons); 