import React, { Component } from "react";
import MediaCard from "../components/MediaCard/MediaCard";
import Grid from "@material-ui/core/Grid";
import API from "../utils/API";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "./ProjectsPage.css";


class ProjectsPage extends Component {
  


  constructor () {
    super()
    this.state = {
      // species
      projectsArray: [],
      click: true,
      description: "Get description by clicking on Projects",
      projectURL: "",
      spacingForProjects: "",
      last_name: "",
      first_name: "",
      technologies_used: ""
  }
  };

  componentDidMount() {

    this.showProjects();
  }

  // this code delivers all projects in an array of objects
  showProjects = () => {

    API.getAllProjects()
      .then(res => {
    
        this.setState({ projectsArray: res.data});
      })
      .catch(err => console.log(err));
  };
  //getProjectinfo
  getProjectInfo = (description, projectURL, spacingForProjects, last_name, first_name, technologies_used) => {
    this.setState({description: description});
    this.setState({projectURL: projectURL});
    this.setState({spacingForProjects: spacingForProjects});
    this.setState({last_name: last_name});
    this.setState({first_name: first_name});
    this.setState({technologies_used: technologies_used});
  };


  render() {
 

    return (
      //Projectpage
      <div className="Projectpage">
        <div className="heroProjects">
        
            <Grid container spacing={16} style={{width: '100%', marginTop:"15%", backgroundColor:"FEF2E4"}}>

              <Grid className="foreground-parallax" id="foreground-parallax-mobile" container spacing={24} style={{width: '97%', marginTop: 420}}>
                
                <Grid container spacing={16}>
                  
                {/* viewbox for mobile */}
                {/* 50 0 20 90 */} 

                  <Grid item xs={12}>
                    <div className="projects-title-page">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="583.667px" height="66.167px" viewBox="0 5 30 40" enableBackground="new 0 0 183.667 46.167">
                        <g id="Layer_4">
                          <g>
                            <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M8.034,35H5.489V9.658h5.509c4.483,0,6.991,2.394,6.991,6.725	c0,4.711-2.66,7.333-6.155,7.333H8.034V35z M8.034,21.437l3.571-0.038c2.356-0.038,3.724-1.824,3.724-5.015	c0-3.116-1.634-4.445-4.369-4.445H8.034V21.437z"/>
                            <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M27.794,15.206h6.725c3.306,0,5.927,1.558,5.927,5.395	c0,2.432-1.634,4.825-4.027,5.547l4.863,8.017l-2.204,1.33l-5.053-8.967H30.34V35h-2.546V15.206z M33.684,24.248	c2.47,0,4.104-1.406,4.104-3.647c0-1.786-1.064-3.116-3.344-3.116H30.34v6.763H33.684z"/>
                            <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M63.36,25.122c0,1.596-0.114,10.22-7.029,10.22	c-3.192,0-7.029-2.279-7.029-10.22c0-7.903,3.762-10.259,7.029-10.259C59.484,14.863,63.36,17.143,63.36,25.122z M51.961,25.122	c0,2.888,0.532,7.827,4.37,7.827S60.7,28.01,60.7,25.122c0-2.926-0.532-7.865-4.369-7.865S51.961,22.196,51.961,25.122z"/>
                            <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M74.419,27.629c-0.152,3.875,0.95,5.319,3.571,5.319	c2.584,0,3.837-1.558,3.837-3.951V15.206h2.546v14.286c0,2.812-1.976,5.851-6.383,5.851c-4.255,0-6.117-2.432-6.117-7.713H74.419z	"/>
                            <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M96.498,15.206h12.348v2.279h-9.803v5.927h8.093v2.28h-8.093	v7.029h9.803V35H96.498V15.206z"/>
                            <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M131.835,31.201c-1.596,2.507-3.496,4.141-6.573,4.141	c-5.775,0-7.599-5.319-7.599-10.22c0-7.903,4.179-10.259,7.371-10.259c3.078,0,4.863,1.596,6.269,4.218l-2.317,1.178	c-0.836-1.596-1.976-3.001-3.914-3.001c-3.951,0-4.749,4.787-4.749,7.827c0,3.078,0.722,7.865,4.749,7.865	c2.318,0,3.496-1.406,4.673-3.191L131.835,31.201z"/>
                            <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M146.314,17.485h-5.471v-2.279h13.374v2.279h-5.357V35h-2.545	V17.485z"/>
                            <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M166.188,28.731c0.494,2.432,1.672,4.217,4.332,4.217	c2.089,0,3.723-1.14,3.723-3.343c0-2.432-2.051-3.04-3.989-3.837c-2.888-1.216-5.623-1.976-5.623-5.699	c0-3.344,2.698-5.206,5.813-5.206c3.306,0,5.243,1.9,6.041,4.978l-2.432,0.722c-0.456-1.938-1.481-3.305-3.647-3.305	c-1.634,0-3.229,0.835-3.229,2.622c0,1.861,1.14,2.394,2.66,3.077l4.217,1.862c1.786,0.988,2.736,2.583,2.736,4.635	c0,3.762-2.622,5.889-6.269,5.889c-3.686,0-6.003-2.355-6.611-5.889L166.188,28.731z"/>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </Grid> 
                </Grid>
                  
                <Grid item xs={1} style={{marginTop: 100}}></Grid>
                    
                <Grid item xs={10} style={{width:"100%"}}>
                    
                  <Grid container spacing={8} style={{width:"100%"}} direcion="row" justify="center" alignItems="center">
                        
                        <Grid item xs={6} id="projects-imgcard-mobile">
                        
                          {this.state.projectsArray.map(item => (

                          <Grid item xs={12} key={item._id}>
                            
                            <MediaCard className="projects-card"
                              
                              last_name={item.last_name} 
                              first_name={item.first_name}
                              picsrc = {item.imageUrl}
                              description = {item.description}
                              technologies_used = {item.technologies_used}
                              spacingForProject = {item.spacingForProject}
                              projectURL = {item.projectURL}
                              //getProjectinfo
                              getProjectInfo={this.getProjectInfo}
                            />
                          </Grid>
                          ))}
                        </Grid>
                        
                        <Grid item xs={6} >
                          
                            <Paper style={{marginTop: this.state.spacingForProjects}} className="projects-description-card" id="projects-dcard-mobile" >
                               
                              <div className="description-project-generated">
                                  {this.state.description}
                              </div>
                                <br/>
                              <div className="technologies-generated">
                                  {this.state.technologies_used}
                              </div>
                              <div className="button-projects-deploy">
                                <Button>
                                  
                                  <a href={this.state.projectURL}>
                                    Deploy site
                                  </a>

                                </Button>
                              </div>

                              <br/>
                            </Paper>
                          </Grid>
                      </Grid>
                </Grid>

              </Grid>

          </Grid>
        
        </div>
      </div>
      );
    }
  };

  export default ProjectsPage;


