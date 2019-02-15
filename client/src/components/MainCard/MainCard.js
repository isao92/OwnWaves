import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import mushMarket from "../../images/mush-market.jpg"



const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2
  },

  card: {
    margin: 30,
    maxWidth: 600
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    margin: "auto"
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class MainCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    // const { showMushData } = this.props;
    console.log("this is props ", this.props)

    return (
      <Grid item xs={8} justify="center" alignItems="center">
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Mushroom"
          />
          <CardMedia
            className={classes.media}
            image= { mushMarket }
            title="Mushroom"
          />
          <CardContent>
            <Typography component="p">
              Want this whole section display
              To Change from Landing Text
              {this.props.stateTextTest}
              and Display different info depending on which mushroom card above is clicked
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

MainCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainCard);
