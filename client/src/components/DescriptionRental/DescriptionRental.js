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
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing.unit * 2}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing.unit * 9}px`,
  },
});

function SubheaderDividers(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemText className="description-rental-text" primary="Address" secondary="123 Madeup St, La Jolla, CA"/>
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography className={classes.dividerFullWidth} color="textSecondary" variant="caption">
          3 day min
        </Typography>
      </li>
      <ListItem>
        <ListItemText className="description-rental-text" primary="$180 a day" secondary="Available starting March 7, 2019" />
      </ListItem>
      <Divider component="li" variant="inset" />
      <li>
        <Typography className={classes.dividerFullWidth} color="textSecondary" variant="caption">
          Amenities
        </Typography>
      </li>
      <ListItem>
        <ListItemText className="description-rental-text" primary="Professional Acoustic Treatment" secondary="Air conditioning, Heating, Outdoor Pool and Outdoor Patio" />
      </ListItem>
    </List>
  );
}

SubheaderDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubheaderDividers);