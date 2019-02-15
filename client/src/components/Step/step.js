import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
  btnCont: {
    marginTop: 20,
    width: 600,
    margin: "auto"
  }
});

class SimplePopper extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !state.open,
    }));
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, open } = this.state;
    const id = open ? 'simple-popper' : null;

    return (

      <div className={classes.root}>
        <Grid container spacing={12} className={classes.btnCont}>
          <Grid item xs={2}>
            <Button aria-describedby={id} variant="contained" onClick={this.handleClick}>
              Incubation
</Button>
            <Popper id={id} open={open} anchorEl={anchorEl} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <Typography className={classes.typography}>The content of the Popper.</Typography>
                  </Paper>
                </Fade>
              )}
            </Popper>          </Grid>
          <Grid item xs={1}>
            ->
          </Grid>
          <Grid item xs={2}>
            <Button aria-describedby={id} variant="contained" onClick={this.handleClick}>
              Holding
</Button>
            <Popper id={id} open={open} anchorEl={anchorEl} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <Typography className={classes.typography}>The content of the Popper.</Typography>
                  </Paper>
                </Fade>
              )}
            </Popper>          </Grid>
          <Grid item xs={1}>
            ->
          </Grid>
          <Grid item xs={2}>
            <Button aria-describedby={id} variant="contained" onClick={this.handleClick}>
              Growing
</Button>
            <Popper id={id} open={open} anchorEl={anchorEl} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <Typography className={classes.typography}>The content of the Popper.</Typography>
                  </Paper>
                </Fade>
              )}
            </Popper>          </Grid>
          <Grid item xs={1}>
            ->
          </Grid>
          <Grid item xs={2}>
            <Button aria-describedby={id} variant="contained" onClick={this.handleClick}>
              Harvest
</Button>
            <Popper id={id} open={open} anchorEl={anchorEl} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <Typography className={classes.typography}>The content of the Popper.</Typography>
                  </Paper>
                </Fade>
              )}
            </Popper>          </Grid>
        </Grid>

      </div>

    );
  }
}

SimplePopper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePopper);