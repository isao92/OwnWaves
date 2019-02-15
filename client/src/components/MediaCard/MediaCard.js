import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  card: {
    maxWidth: 50
  },
  media: {
    height: 400,
  },
  cardProjectTitle:{
    textAlign: "center"
  }
};


function MediaCard(props) {
  const { classes } = props;
  return (
    //getprojectinfo order or props matters*
    
      
      <Card className={classes.card} id="project-image-card" onClick={() => props.getProjectInfo(props.description, props.projectURL, props.spacingForProject, props.last_name, props.first_name, props.technologies_used)}>
        <CardActionArea >
        
          <CardContent className={classes.cardProjectTitle} id="project-image-title" style={{position: "absolute"}}>
            <p>{props.last_name} {' '} {props.first_name}</p>
          </CardContent>

          <CardMedia id="projects-screenshots-mobile"
            className={classes.media}
            image= {props.picsrc}
            title= {props.pictitle}
          />
          
          
        </CardActionArea>
        
      </Card>
    
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
