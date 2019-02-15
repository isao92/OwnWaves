import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import './HomeStyle.css';

const styles = theme => ({
  paper: {
    // card interior

  },
  root: {
    // root div
    margin: "none"
  },
  headline: {
    // card headline
    fontFamily: "Trebuchet MS",
    fontSize: "1.5rem"
  },
  headline2: {
    // card 2 headline
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className="hero">
        <div id="hero-overlay">
        
        <Grid container spacing={16} style={{ width: '100%', margin: '0px' }}>
        <Grid container spacing={8} style={{ width: '100%', marginTop: "45px" }}>

          <Grid container spacing={8} className="home-main">
            <Grid item xs={12} style={{textAlign: "center"}}>
            
            <div className="agustin-chavez-title">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="345px" height="50px" viewBox="0 0 345 50" enableBackground="new 0 0 345 50">
              <g>
                <path stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" d="M21.941,31.173l-1.976,8.321l-2.508-0.684l6.421-25.152h3.04 l6.421,25.152l-2.508,0.684l-1.976-8.321H21.941z M25.437,17.039H25.36l-2.812,11.854h5.699L25.437,17.039z"/>
                <path stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" d="M54.885,37.176c-1.634,1.292-4.065,2.166-6.079,2.166 c-5.813,0-7.485-5.395-7.485-10.258c0-4.787,1.748-10.221,7.409-10.221c2.66,0,4.978,1.558,6.345,3.8l-2.166,1.406 c-0.95-1.596-2.394-2.812-4.331-2.812c-3.914,0-4.597,4.901-4.597,7.903c0,3.077,0.684,7.789,4.673,7.789 c1.292,0,2.583-0.342,3.685-1.026v-5.205H47.59v-2.28h7.295V37.176z"/>
                <path stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" d="M67.35,19.205v13.488c0,2.888,0.836,4.255,3.458,4.255 c3.191,0,3.875-1.406,3.875-4.255V19.205h2.545v14.704c0,2.622-1.862,5.433-6.231,5.433c-4.293,0-6.193-2.697-6.193-5.585V19.205 H67.35z"/>
                <path stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" d="M89.656,32.731c0.494,2.432,1.672,4.217,4.332,4.217 c2.09,0,3.723-1.14,3.723-3.343c0-2.432-2.051-3.04-3.989-3.837c-2.888-1.216-5.623-1.976-5.623-5.699	c0-3.344,2.698-5.206,5.813-5.206c3.306,0,5.243,1.9,6.041,4.978l-2.432,0.722c-0.456-1.938-1.481-3.305-3.647-3.305	c-1.634,0-3.229,0.835-3.229,2.622c0,1.861,1.14,2.394,2.66,3.077l4.217,1.862c1.786,0.988,2.736,2.584,2.736,4.635	c0,3.762-2.622,5.889-6.269,5.889c-3.686,0-6.003-2.355-6.611-5.889L89.656,32.731z"/>
                <path stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" d="M115.381,21.484h-5.471v-2.279h13.374v2.279h-5.357V39h-2.545	V21.484z"/>
                <path stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" d="M135.331,36.72h2.773V21.484h-2.773v-2.279h8.131v2.279	h-2.812V36.72h2.812V39h-8.131V36.72z"/>
                <path stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" d="M155.585,19.205h3.154l7.675,16.679l0.076-0.076l-0.228-5.129	V19.205h2.545V39h-3.153l-7.675-16.68l-0.076,0.076l0.228,5.167V39h-2.546V19.205z"/>
                <path stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" d="M214.901,35.201c-1.482,2.394-3.686,4.141-6.573,4.141	c-6.611,0-7.599-7.979-7.599-12.994c0-5.053,0.988-13.032,7.599-13.032c2.888,0,4.863,1.671,6.193,4.103l-2.166,1.292	c-0.798-1.596-2.089-3.001-4.027-3.001c-4.635,0-4.939,7.295-4.939,10.638c0,3.306,0.304,10.601,4.939,10.601	c1.976,0,3.534-1.634,4.483-3.191L214.901,35.201z"/>
                <path stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" d="M224.136,19.205h2.545v8.207h7.827v-8.207h2.546V39h-2.546	v-9.309h-7.827V39h-2.545V19.205z"/>
                <path stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" d="M249.899,33.605l-1.862,5.889l-2.507-0.912l6.231-19.377	h3.268l6.231,19.377l-2.508,0.912l-1.824-5.889H249.899z M253.395,22.168l-2.812,9.157h5.623L253.395,22.168z"/>
                <path stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" d="M281.59,18.711l2.432,0.912l-7.599,19.871h-0.456	l-7.599-19.871l2.432-0.912l5.396,14.514L281.59,18.711z"/>
                <path stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" d="M293.561,19.205h12.348v2.279h-9.803v5.927h8.093v2.28h-8.093	v7.029h9.803V39h-12.348V19.205z"/>
                <path stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" d="M324.719,21.484h-9.271v-2.279h13.488L318.64,36.72h10.601V39	h-14.894L324.719,21.484z"/>
              </g>
            </svg>
            </div>
            </Grid>
            {/* spacing */}
            <Grid item xs={12} style={{marginTop: "5%"}}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              
            {/* skills list */}
            <Grid item xs={12} id="grid-skills">
                <Paper className="paper-section" id="paper-section" style={{backgroundColor: "none"}}>
                  <div className="paper-title-skills">
                  Technical Skills:
                  </div>
                      <hr></hr>
                  <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Node.js</li>
                    <li>Material-UI</li>
                    <li>Bootstrap</li>
                    <li>HTML5 and CSS3</li>
                    <li>Adobe Illustrator</li>
                  </ul>
                </Paper>
              </Grid>
            </Grid>
            {/* academic history */}
            <Grid item xs={7} id="grid-academic-history">
              
              <Paper className="paper-section" id="paper-section" style={{backgroundColor: "none"}}>
                
                <Grid container spacing={24} style={{fontSize: "1.1rem", bottom: "0"}}>
                  <Grid item xs={3}>
                    <a href="https://github.com/isao92"> 
                    <b className="wrap-github-logo">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="20px" width="50px" height="50px" viewBox="0 0 150 150" enableBackground="new 0 0 150 150">
                      <g id="Layer_3">
                          <circle fill="none" stroke="#000000" strokeWidth="25.5131" strokeMiterlimit="10" cx="75.053" cy="72.81" r="59.792"/>
                          
                        </g>
                        <g id="Guide_hrzntl">
                          <g>
                            <g>
                              <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.4125" strokeMiterlimit="10" d="M17.947,78.052c1.841-0.014,3.676-0.154,5.486-0.403 c3.007-0.414,6.115-2.12,9.155-1.897"/>
                              <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.4125" strokeMiterlimit="10" d="M32.588,72.613c-2.864,0.177-5.667-0.362-8.552,0.046 c-1.9,0.27-3.767,0.822-5.682,0.791"/>
                              <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.4124" strokeMiterlimit="10" d="M131.751,78.052c-1.839-0.014-3.674-0.154-5.483-0.403 c-3.005-0.414-6.112-2.12-9.15-1.897"/>
                              <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.4124" strokeMiterlimit="10" d="M117.322,72.613c2.863,0.177,5.664-0.362,8.547,0.046 c1.899,0.27,3.766,0.822,5.68,0.791"/>
                              <line display="none" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeMiterlimit="10" x1="150" y1="75" x2="0" y2="75"/>
                            </g>
                          </g>
                          <g>
                            <g>
                              <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.4125" strokeMiterlimit="10" d="M132.053,78.052c-1.841-0.014-3.676-0.154-5.486-0.403 c-3.007-0.414-6.115-2.12-9.155-1.897"/>
                              <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.4125" strokeMiterlimit="10" d="M117.412,72.613c2.864,0.177,5.667-0.362,8.552,0.046 c1.9,0.27,3.767,0.822,5.682,0.791"/>
                              <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.4124" strokeMiterlimit="10" d="M18.249,78.052c1.839-0.014,3.674-0.154,5.483-0.403	c3.005-0.414,6.112-2.12,9.15-1.897"/>
                              <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.4124" strokeMiterlimit="10" d="M32.678,72.613c-2.863,0.177-5.664-0.362-8.547,0.046	c-1.899,0.27-3.766,0.822-5.68,0.791"/>
                              <line display="none" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeMiterlimit="10" x1="0" y1="75" x2="150" y2="75"/>
                            </g>
                          </g>
                        </g>
                        <g id="Layer_4">
                          <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.3933" strokeMiterlimit="10" d="M57.208,116.292c-1.792-4.222-9.161-3.777-12.825-6	c-2.339-1.419-3.743-3.483-5.184-5.838c-0.995-1.626-1.374-3.663-2.336-5.1c0.759,2.656,3.624,5.558,6.228,6.9	c1.443,0.744,2.896,0.87,4.438,1.242c1.646,0.397,3.262,0.608,4.912,0.914c1.705,0.316,4.517,1.593,6.1,1.216l16.472,4.2	c1.525,0,3.288,1.394,3.965,3.138c0.678,1.744,1.626,12.657,1.626,12.657h3.457c0,0-0.192-12.586-0.203-13.284	s0.678-2.023,2.565-2.016c1.887,0.006,2.382,0.831,2.518,1.806c0.136,0.977,0.407,13.494,0.407,13.494s4.067,0,4.271,0	c0.203,0-0.204-9.519-0.611-14.959c-0.406-5.438-5.287-10.25-5.287-10.25s13.828,0.209,24.605-12.343	c10.777-12.552,1.017-40.794-0.204-43.096c-1.22-2.301,2.847-9.205,0-13.179c-4.27-0.837-15.251,6.485-15.251,6.485	S86.3,40.186,75.014,40.396h0.039c-11.279-0.21-21.848,1.882-21.848,1.882s-10.975-7.322-15.242-6.485	c-2.846,3.975,1.219,10.878,0,13.179c-1.22,2.302-10.975,30.544-0.204,43.096c10.771,12.553,24.592,12.343,24.592,12.343	s-4.878,4.812-5.284,10.25c-0.406,5.44-0.813,14.959-0.61,14.959c0.204,0,4.269,0,4.269,0s0.271-12.518,0.407-13.494	c0.136-0.976,0.63-1.8,2.517-1.806c1.886-0.007,2.575,1.318,2.564,2.016c-0.012,0.698-0.204,13.284-0.204,13.284h3.455	c0,0,0.948-10.914,1.626-12.657c0.677-1.744,2.438-3.138,3.963-3.138"/>
                        </g>
                        
                      </svg>
                    </b>



                    </a>
                  </Grid>
                  <Grid item xs={3}>
                    <a href="https://www.linkedin.com/in/agustinchavez1/"> 
                    <svg version="1.1" xmlns="http://www.w3.org/2000 svg" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 46.167 46.167" enableBackground="new 0 0 46.167 46.167">
                      <g id="Guide_hrzntl">
                        <g>
                          <g>
                            
                              <line display="none" fill="none" stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" x1="87.792" y1="41.206" x2="-62.208" y2="41.206"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            
                              <line display="none" fill="none" stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" x1="-62.208" y1="41.206" x2="87.792" y2="41.206"/>
                          </g>
                        </g>
                      </g>
                      <g id="Layer_4">
                        <circle stroke="#000000" strokeMiterlimit="10" cx="22.833" cy="23.167" r="21.543"/>
                      </g>
                      <g id="Layer_3">
                        <g>
                          <path fill="#FFFFFF" stroke="#FFFFFF" strokeMiterlimit="10" d="M12.172,12.09c0-0.659,0.24-1.203,0.722-1.631	c0.481-0.428,1.165-0.643,2.052-0.643c0.887,0,1.596,0.209,2.128,0.626c0.532,0.417,0.798,0.967,0.798,1.647	c0,0.681-0.266,1.219-0.798,1.614c-0.532,0.396-1.241,0.593-2.128,0.593c-0.887,0-1.571-0.203-2.052-0.609	C12.413,13.282,12.172,12.749,12.172,12.09z M12.667,16.736h4.522V33.21h-4.522V16.736z"/>
                          <path fill="#FFFFFF" stroke="#FFFFFF" strokeMiterlimit="10" d="M30.26,33.21V23.194c0-1.208-0.165-2.054-0.494-2.537	c-0.33-0.483-0.887-0.725-1.672-0.725c-0.659,0-1.229,0.176-1.71,0.527c-0.481,0.352-0.824,0.791-1.026,1.318V33.21h-4.522V16.736	h3.61l0.532,1.911h0.114c0.456-0.637,1.076-1.181,1.862-1.631c0.785-0.45,1.811-0.676,3.078-0.676c0.76,0,1.438,0.099,2.033,0.297	s1.096,0.522,1.501,0.972c0.405,0.451,0.709,1.055,0.912,1.812c0.203,0.758,0.304,1.697,0.304,2.817V33.21H30.26z"/>
                        </g>
                      </g>
                      </svg>
                    </a>
                  </Grid>
                  
                  <Grid item xs={6} style={{marginTop: "2%"}}>
                    Resume: <a href="https://docs.google.com/document/d/1OYhRJdEUEy2VpcanFQfH1MgzhDpwhPb-ajSmFEiqTqg/edit?usp=sharing"> Google Docs Link </a> 
                  </Grid>
                </Grid>

                <hr></hr>
                Academic History:<br />
                <br />
                UCSD Extension Bootcamp <br />
                (Current)<br />
                <br />
                Intensive coding program focused on Full Stack Web Applications using React.js, Javascript, Node.js, jQuery, MongoDB, Express.js, Database Theory, MySQL, CSS3, Bootstrap, HTML5, Command Line and Git. 
                <br /><br />
                Coleman University<br />
                December 2017 - August 2018 <br />
                <br />
                Introduction to Computing, Computer Programming, Web Interface Development, Network Security and Client-Side Web Programming. 
              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
            
          </Grid>
        </Grid>
      </Grid>
          </div>
      </div>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);