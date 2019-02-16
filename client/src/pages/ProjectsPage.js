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
        
            <Grid container spacing={16} style={{width: '100%', margin: '0'}}>

            
              
              <Grid container spacing={16} style={{width: '100%', margin: '0'}}>
                
              {/* viewbox for mobile */}
              {/* 50 0 20 90 */} 

                <Grid item xs={12} style={{width: '100%', padding: '0'}}>
                  <div className="projects-background-svg">
                  <svg className="svg-projects-page" version="1.1" x="0px" y="0px" width="1366px" height="768px" viewBox="0 0 1366 768" enableBackground="new 0 0 1366 768">
                  
                  <g id="Layer_7">
                    <polyline fill="none" stroke="#000000" strokeWidth="1.9756" strokeMiterlimit="10" points="1363.623,764.568 454.013,513 633.198,138.635 1087.795,156.683 1033.944,286.372 884.011,270.987 921.571,201.772 983.142,215.252 	"/>
                  </g>
                  <g id="Layer_8">
                    <polyline fill="none" stroke="#000000" strokeWidth="1.9756" strokeMiterlimit="10" points="1366,0 1190.834,513 1113.104,142.185 783.864,171.622 856.646,286.372 1018.33,266.055 1006.566,201.772 983.142,215.252 	"/>
                  </g>
                  <g id="Layer_10">
                    <polyline fill="none" stroke="#000000" strokeWidth="1.9756" strokeMiterlimit="10" points="0,764 454.013,98.483 633.198,412 1080.63,356 783.864,326.923 884.011,193.548 983.142,215.252 	"/>
                  </g>
                  <g id="Layer_13">
                    <polyline fill="none" stroke="#000000" strokeWidth="1.9756" strokeMiterlimit="10" points="0,764 1190.834,515.105 633.198,412 718.577,156.683 732.802,356 783.864,171.622 1021.746,193.548 999.219,236.531 983.142,215.252 	"/>
                  </g>
                  </svg>
                  </div>

                  <div className="projects-background-svg2">
                  <svg className="svg2-projects-page" version="1.1" x="0px" y="0px" width="1366px" height="768px" viewBox="0 0 1366 768" enableBackground="new 0 0 1366 768">
                  
                  <g id="Layer_6">
                    <polyline fill="none" stroke="#000000" strokeWidth="1.9756" strokeMiterlimit="10" points="0,768 1190.834,515.105 633.198,412 715.632,156.683 1021.746,193.548 999.219,236.531 983.142,215.252 	"/>
                  </g>
                  <g id="Layer_9">
                    <polyline fill="none" stroke="#000000" strokeWidth="1.9756" strokeMiterlimit="10" points="0,0 1190.834,98.483 1113.104,403.643 732.802,356 783.864,171.622 1021.746,193.548 921.571,201.772 983.142,215.252 	"/>
                  </g>
                  <g id="Layer_11">
                    <polyline fill="none" stroke="#000000" strokeWidth="1.9756" strokeMiterlimit="10" points="1363.229,764 1190.834,103 1113.104,402.884 732.802,356 1033.944,286.372 1021.746,193.548 983.142,215.252 	"/>
                  </g>
                  <g id="Layer_12">
                    <polyline fill="none" stroke="#000000" strokeWidth="1.9756" strokeMiterlimit="10" points="1363.229,1.558 454.013,98.483 1113.104,142.185 1080.63,356 1087.317,156.683 1033.944,286.372 884.011,270.987 921.571,201.772 983.142,215.252 	"/>
                  </g>
                  </svg>
                  </div>




                </Grid> 
              </Grid>
                
              <Grid item xs={12}>
                <div className="projects-title-svg">
                <svg className="projects-title-svgid" version="1.1" id="Layer_1"  x="0px" y="0px" width="1366px" height="150px" viewBox="0 0 1366 150" enableBackground="new 0 0 1366 150">
                  <g>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M160.664,127.433v-19.507h9.943	c6.629,0,9.944,3.314,9.944,9.943v6.811c6.587-0.931,13.172-1.867 19.757-2.789c-0.182-4.859-1.805-9.172-4.912-12.92	c-3.299-3.98-8.248-5.971-14.845-5.971c6.598-0.773,11.546-2.818,14.845-6.133c3.299-3.314,4.948-7.868,4.948-13.661v-5.018	c0-5.39-1.944-10.037-5.83-13.939c-3.888-3.903-8.543-5.854-13.963-5.854H140.87v71.566	C147.472,129.167,154.07,128.319,160.664,127.433z M160.664,68.337h9.943c2.695,0,5.025,0.969,6.993,2.904	c1.967,1.937,2.951,4.252,2.951,6.947v9.943c0,2.695-0.984,5.026-2.951,6.993c-1.968,1.967-4.298,2.95-6.993,2.95h-9.943V68.337z"
                      />
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M179.065,135.8c-1.146,0.156-2.293,0.32-3.44,0.48	c-1.503,0.914-3.173,1.383-5.019,1.383h-4.717c-8.326,1.2-16.666,2.393-25.021,3.374v6.568h39.682	c5.358,0,9.997-1.958,13.916-5.877c2.597-2.597,4.313-5.518,5.189-8.747C192.793,133.924,185.93,134.865,179.065,135.8z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M239.932,116.469V78.188h-19.794v40.97	C226.735,118.256,233.333,117.358,239.932,116.469z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M279.612,111.241V78.188h-19.793v35.625	C266.415,112.943,273.013,112.086,279.612,111.241z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M259.819,124.789v3.023c0,2.664-0.969,4.973-2.904,6.924	c-1.937,1.951-4.283,2.927-7.04,2.927c-2.757,0-5.104-0.976-7.039-2.927c-1.936-1.951-2.904-4.26-2.904-6.924v-0.35	c-6.552,0.891-13.104,1.787-19.655,2.687c0.488,4.432,2.376,8.311,5.692,11.626c3.888,3.888,8.542,5.83,13.963,5.83h9.943	c5.855,0,9.169-3.312,9.944-9.942v9.942h19.793v-25.416C273.013,123.043,266.415,123.91,259.819,124.789z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M319.2,106.379V78.188h-19.794v30.57  C306.001,107.945,312.599,107.154,319.2,106.379z"/>
                    <rect x="299.405" y="58.394" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" width="19.794" height="9.943"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M299.552,119.656c-0.049,0.006-0.098,0.013-0.146,0.019v27.931	H319.2V117.27C312.646,118.051,306.096,118.844,299.552,119.656z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M349.42,102.974c3.152-0.337,6.305-0.67,9.459-1.002V58.394	h-19.794v45.718C342.531,103.731,345.974,103.342,349.42,102.974z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M339.086,114.965v32.641h19.794v-34.787	C352.278,113.501,345.681,114.225,339.086,114.965z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M398.561,98.169v-0.095c0-2.725,0.976-5.064,2.927-7.016	c1.951-1.951,4.29-2.927,7.015-2.927h9.944v8.585c6.595-0.412,13.193-0.754,19.794-0.993v-37.33h-19.794v19.794h-19.887	c-5.39,0-10.037,1.944-13.939,5.831c-3.903,3.888-5.855,8.573-5.855,14.055v1.878C385.36,99.313,391.958,98.715,398.561,98.169z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M418.448,107.758v20.055c0,2.664-0.969,4.973-2.904,6.924	c-1.937,1.951-4.283,2.927-7.041,2.927c-2.757,0-5.104-0.976-7.038-2.927c-1.937-1.951-2.904-4.26-2.904-6.924v-18.62	c-6.601,0.521-13.199,1.087-19.795,1.695v16.925c0,5.421,1.944,10.076,5.832,13.963c3.887,3.888,8.542,5.83,13.963,5.83h9.942	c5.855,0,9.169-3.312,9.944-9.942v9.942h19.794v-40.77C431.654,107.037,425.057,107.34,418.448,107.758z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M514.427,109.206v38.399h19.887v-36.262	C527.681,110.532,521.053,109.814,514.427,109.206z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M548.743,102.211c3.565-3.325,5.365-8.01,5.365-14.08V58.394  h-19.793v29.737c0,2.695-0.984,5.026-2.951,6.993c-1.968,1.967-4.298,2.95-6.994,2.95c-2.725,0-5.064-0.982-7.015-2.95 c-1.952-1.967-2.927-4.298-2.927-6.993V58.394h-19.795v29.737c0,3.202,0.514,6.007,1.506,8.445	C513.73,97.796,531.262,99.807,548.743,102.211z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M613.58,122.687v5.126c0,2.664-0.968,4.973-2.904,6.924	c-1.936,1.951-4.282,2.927-7.037,2.927c-2.759,0-5.105-0.976-7.041-2.927c-1.936-1.951-2.904-4.26-2.904-6.924v-8.17	c-6.595-0.998-13.192-1.981-19.792-2.94v11.11c0,5.421,1.942,10.076,5.83,13.963c3.888,3.888,8.542,5.83,13.962,5.83h19.886	c5.421,0,10.077-1.958,13.965-5.877c3.885-3.918,5.831-8.557,5.831-13.916v-2.062C626.777,124.729,620.179,123.706,613.58,122.687z	"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M584.993,107.628c2.9,0.457,5.8,0.903,8.701,1.354V98.074	c0-2.725,0.978-5.064,2.927-7.016c1.952-1.951,4.291-2.927,7.018-2.927c2.694,0,5.024,0.976,6.993,2.927	c1.968,1.951,2.949,4.291,2.949,7.016v13.947c6.597,0.99,13.196,1.962,19.796,2.921V98.074c0-5.42-1.945-10.09-5.831-14.009	c-3.888-3.918-8.544-5.877-13.965-5.877h-19.886c-5.389,0-10.035,1.944-13.939,5.831c-3.901,3.888-5.853,8.573-5.853,14.055v7.827	C577.601,106.471,581.298,107.046,584.993,107.628z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M672.963,120.527V78.188h-19.795v39.586	C659.765,118.704,666.362,119.624,672.963,120.527z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M704.57,124.766c2.688,0.353,5.379,0.705,8.072,1.055V78.188	H692.85v45.024C696.756,123.732,700.662,124.253,704.57,124.766z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M690.422,134.212c-0.154,0.177-0.307,0.354-0.477,0.524	c-1.936,1.951-4.281,2.927-7.04,2.927c-2.757,0-5.103-0.976-7.039-2.927c-0.877-0.885-1.545-1.847-2.025-2.878	c-6.879-1-13.755-2.025-20.628-3.067c0.223,5.001,2.138,9.336,5.788,12.984c3.887,3.888,8.542,5.83,13.962,5.83h9.942	c5.856,0,9.168-3.312,9.944-9.942v9.942h19.793V137.14C705.23,136.214,697.824,135.233,690.422,134.212z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M752.23,130.502v-22.576c0-2.695,0.977-5.01,2.928-6.947	c1.951-1.936,4.289-2.904,7.016-2.904h19.795V78.188h-9.852c-5.854,0-10.438,1.657-13.752,4.972	c-3.316,3.314-5.361,8.286-6.135,14.915V78.188h-19.795v50.12C739.025,129.098,745.625,129.837,752.23,130.502z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M732.436,139.468v8.138h19.795v-6.126	C745.625,140.868,739.027,140.193,732.436,139.468z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M855.32,120.703c1.949,2.137,2.928,4.461,2.928,6.971	c0,0.863-0.059,1.669-0.168,2.424c6.67-0.854,13.322-1.84,19.961-2.924v-4.379c0-4.988-1.936-9.649-5.809-13.986L851.23,85.204	c-1.951-2.168-2.928-4.491-2.928-6.97c0-3.314,0.883-5.808,2.65-7.481c1.764-1.673,4.381-2.509,7.852-2.509	c5.391,0,8.518,3.315,9.385,9.944h9.852c-0.807-13.196-7.404-19.794-19.793-19.794h-9.945c-5.453,0-10.113,1.951-13.986,5.854	c-3.871,3.903-5.807,8.549-5.807,13.939v5.018c0,5.018,1.936,9.681,5.807,13.986L855.32,120.703z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M834.123,143.202c3.299,2.923,8.014,4.403,14.18,4.403h9.945	c5.449,0,10.113-1.958,13.984-5.877c0.924-0.935,1.73-1.914,2.434-2.931C861.156,140.807,847.654,142.289,834.123,143.202z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M838.789,132.167c-0.285-0.82-0.43-1.729-0.43-2.729	c0-0.401,0.031-0.944,0.092-1.626h-9.941c0,1.82,0.141,3.503,0.395,5.073C832.205,132.687,835.5,132.447,838.789,132.167z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M907.871,121.726c6.605-1.313,13.201-2.676,19.793-4.062V88.131	h9.943v-9.943h-9.943V58.394h-19.793v19.794h-9.945v9.943h9.945V121.726z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M930.824,135.13c-1.832-1.468-2.867-3.507-3.105-6.112	c-6.396,1.315-12.801,2.597-19.211,3.838c0.85,3.319,2.559,6.299,5.172,8.92c3.871,3.888,8.533,5.83,13.984,5.83h9.943v-9.942	h-0.93C934.883,137.663,932.93,136.818,930.824,135.13z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M1016.877,99.723V78.188h-19.795v25.189	C1003.672,102.112,1010.271,100.901,1016.877,99.723z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M977.197,107.311V78.188h-19.795v33.198	C963.994,110.007,970.594,108.646,977.197,107.311z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M1003.99,113.272c-2.305,0.439-4.605,0.904-6.908,1.355v13.185	c0,2.664-0.967,4.973-2.904,6.924c-1.936,1.951-4.281,2.927-7.037,2.927c-2.758,0-5.104-0.976-7.041-2.927	c-1.936-1.951-2.902-4.26-2.902-6.924v-9.173c-6.602,1.369-13.199,2.758-19.795,4.155v5.018c0,5.421,1.945,10.076,5.832,13.963	c3.887,3.888,8.541,5.83,13.963,5.83h9.943c5.854,0,9.168-3.312,9.941-9.942v9.942h19.795v-36.723	C1012.578,111.661,1008.281,112.454,1003.99,113.272z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M1054.383,93.634c1.127-0.162,2.256-0.315,3.383-0.473	c0.436-0.743,0.971-1.447,1.625-2.103c1.953-1.951,4.291-2.927,7.018-2.927h9.943v2.603c6.588-0.791,13.188-1.501,19.793-2.129	V58.394h-19.793v19.794h-19.887c-5.391,0-10.037,1.944-13.939,5.831c-3.484,3.471-5.402,7.581-5.775,12.321	C1042.621,95.394,1048.496,94.478,1054.383,93.634z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M1076.352,101.781v26.032c0,2.664-0.969,4.973-2.906,6.924	c-1.934,1.951-4.281,2.927-7.037,2.927c-2.758,0-5.104-0.976-7.041-2.927c-1.936-1.951-2.902-4.26-2.902-6.924v-23.405	c-6.607,0.95-13.205,1.977-19.795,3.056v20.35c0,5.421,1.945,10.076,5.832,13.963c3.887,3.888,8.541,5.83,13.963,5.83h9.943	c5.854,0,9.168-3.312,9.943-9.942v9.942h19.793V99.644C1089.539,100.272,1082.939,100.985,1076.352,101.781z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M1135.732,85.994v-7.806h-19.795v8.815	C1122.531,86.564,1129.129,86.222,1135.732,85.994z"/>
                    <rect x="1115.938" y="58.394" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" width="19.795" height="9.943"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M1115.938,98.038v49.568h19.795V97.014	C1129.125,97.248,1122.527,97.599,1115.938,98.038z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M1170.662,85.892c14.107,0.438,28.117,1.457,42.082,2.784	c-0.902-1.636-2.059-3.175-3.482-4.61c-3.889-3.918-8.541-5.877-13.963-5.877h-19.887c-5.389,0-10.037,1.944-13.939,5.831	c-0.541,0.54-1.035,1.098-1.502,1.668C1163.533,85.722,1167.098,85.781,1170.662,85.892z"/>
                    <path stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M1195.299,98.308v29.504c0,2.664-0.969,4.973-2.902,6.924	c-1.938,1.951-4.283,2.927-7.041,2.927c-2.756,0-5.104-0.976-7.039-2.927s-2.904-4.26-2.904-6.924V98.074	c0-0.311,0.018-0.616,0.043-0.917c-6.576-0.276-13.166-0.441-19.773-0.467c-0.029,0.458-0.062,0.914-0.062,1.384v29.738 c0,5.421,1.943,10.076,5.832,13.963c3.887,3.888,8.541,5.83,13.961,5.83h19.887c5.422,0,10.074-1.958,13.963-5.877	c3.887-3.918,5.832-8.557,5.832-13.916V99.993C1208.502,99.356,1201.904,98.791,1195.299,98.308z"/>
                  </g>

                  </svg>
                </div>
              </Grid>

              <Grid item xs={1}></Grid>
                  
              <Grid item xs={10}>
                  
              <Grid container spacing={8} className="images-description-container">
                      
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
        
        </div>
      </div>
      );
    }
  };

  export default ProjectsPage;


