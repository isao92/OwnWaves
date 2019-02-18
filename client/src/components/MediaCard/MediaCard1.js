import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import './MediaCard1.css';

const styles = {
  card: {
    maxWidth: 50
  },
  media: {
    height: 400,
  },
  cardBuildTitle:{
    textAlign: "center"

  }
};


function MediaCard1(props) {
  const { classes } = props;
  return (
    //getbuildinfo order or props matters*
    
      
      <Card className={classes.card} id="build-image-card" onClick={() => props.getPlacesInfo(props.description, props.buildURL, props.spacingForBuild, props.last_name, props.first_name, props.technologies_used)}>

      
        <section id={props.spacingForBuild}></section>
        <CardActionArea id="clickable-image-category">
        
          <CardContent className={classes.cardBuildTitle} id="build-image-title" style={{position: "absolute"}}>
            <p>{props.first_name} {' '} {props.last_name}</p>
          </CardContent>
          <CardMedia id="builds-screenshots-mobile"
            className={classes.media}
            image= {props.picsrc}
            title= {props.pictitle}
          />
          
          
        </CardActionArea>
        
      </Card>
    
  );
}

MediaCard1.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard1);
