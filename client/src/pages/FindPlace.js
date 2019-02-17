import React, { Component } from "react";
import MediaCard1 from "../components/MediaCard/MediaCard1";
import Grid from "@material-ui/core/Grid";
import API from "../utils/API";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "./FindPlace.css";

class FindPlace extends Component {

  constructor () {
    super()
    this.state = {
      // places
      placesArray: [],
      click: true,
      description: "Get description by clicking on places",
      projectURL: "",
      spacingForplaces: "",
      last_name: "",
      first_name: "",
      technologies_used: ""
  }
  };

  componentDidMount() {
    this.showplaces();
  }

  // this code delivers all places in an array of objects
  showplaces = () => {
    API.getAllPlaces()
      .then(res => {
    
        this.setState({ placesArray: res.data});
      })
      .catch(err => console.log(err));
  };

  //getProjectinfo
  getPlacesInfo = (description, projectURL, spacingForplaces, last_name, first_name, technologies_used) => {
    this.setState({description: description});
    this.setState({projectURL: projectURL});
    this.setState({spacingForplaces: spacingForplaces});
    this.setState({last_name: last_name});
    this.setState({first_name: first_name});
    this.setState({technologies_used: technologies_used});
  };


  render() {
    return (
      //Projectpage
      <div className="Projectpage">
        <div className="heroplaces">
            {/* whole page container */}
            <Grid container spacing={16} style={{width: '100%', margin: '0'}}>

              {/* spacing */}
              <Grid item xs={1}></Grid>
              
              {/* category images and description card generator */}
              <Grid item xs={10} className="image-description-container" id="image-container-mobile">
                  
              <Grid container spacing={8} className="images-description-container">
                      
                      <Grid item xs={6} id="places-imgcard-mobile">
                      <div className="scrolling-box">
                        {this.state.placesArray.map(item => (
                        
                        // category image container
                        <Grid item xs={12} key={item._id}>
                          
                          <MediaCard1 className="places-card"
                            last_name={item.last_name} 
                            first_name={item.first_name}
                            picsrc = {item.imageUrl}
                            description = {item.description}
                            technologies_used = {item.technologies_used}
                            spacingForProject = {item.spacingForProject}
                            projectURL = {item.projectURL}
                            //getProjectinfo
                            getPlacesInfo={this.getPlacesInfo}
                          />
                        </Grid>
                        ))}
                      </div>

                          <div className="end-of-imgs"></div>
                      </Grid>
                      
                      
                      <Grid item xs={6}  style={{marginTop: "100px"}}>
                        
                          <Paper style={{marginTop: this.state.spacingForplaces}} className="places-description-card" id="places-dcard-mobile" >
                              
                            <div className="description-project-generated">
                                {this.state.description}
                            </div>
                              <br/>
                            <div className="technologies-generated">
                                {this.state.technologies_used}
                            </div>
                            <div className="button-places-deploy">
                              <Button id="button-category">
                                <a href={this.state.projectURL}>
                                  Book
                                </a>
                              </Button>
                            </div>

                            <br/>
                          </Paper>
                      </Grid>
                  </Grid>
              </Grid>

            

            </Grid>
        
        </div>
      </div>
      );
    }
  };

  export default FindPlace;


