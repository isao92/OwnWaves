import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import './DescriptionRental.css';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px'
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing.unit * 2}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing.unit * 9}px`,
  },
});

function DescriptionRental2(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemText className="description-rental-text" primary="Address" secondary="321 This Street, Normal Heights, CA"/>
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography className={classes.dividerFullWidth} color="textSecondary" variant="caption">
          1 day min
        </Typography>
      </li>
      <ListItem>
        <ListItemText className="description-rental-text" primary="$80 a day" secondary="Available starting March 1, 2019" />
      </ListItem>
      <Divider component="li" variant="inset" />
      <li>
        <Typography className={classes.dividerFullWidth} color="textSecondary" variant="caption">
          Amenities
        </Typography>
      </li>
      <ListItem>
        <ListItemText className="description-rental-text" primary="No Acoustic Treatment" secondary="Small Electric Heater" />
      </ListItem>
    </List>
  );
}

DescriptionRental2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DescriptionRental2);