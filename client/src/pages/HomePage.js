import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";
import './HomeStyle.css';

const styles = theme => ({
  paper: {
    // card interior

  },
  root: {
    // root div

  },
  headline: {
    // card headline
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
        
        <Grid container spacing={16} style={{width: '100%'}}>
      
          <Grid item xs={12} id="grid-homepage">

            <div className="homePage-main-logo">
              <svg className="homePage-main-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="8000px" height="1000px" viewBox="0 0 8000 1000" enableBackground="new 0 0 8000 1000">
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="4280.9766" y1="505.6514" x2="4572.6055" y2="505.6514">  <stop  offset="0" stopColor="#262262"/> <stop  offset="1" stopColor="#2484C6" stopOpacity="0"/>
            </linearGradient>
            <circle fill="none" stroke="url(#SVGID_1_)" strokeWidth="9.4074" strokeMiterlimit="10" cx="4426.791" cy="505.649" r="141.111"/>
            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="4186.9023" y1="599.7256" x2="4666.6802" y2="599.7256">
              <stop  offset="0" stopColor="#262262"/>
              <stop  offset="1" stopColor="#2484C6" stopOpacity="0"/>
            </linearGradient>
            <path fill="none" stroke="url(#SVGID_2_)" strokeWidth="9.4074" strokeMiterlimit="10" d="M4661.977,599.724 c0,129.891-105.292,235.189-235.187,235.189c-129.893,0-235.184-105.299-235.184-235.189c0-129.895,105.291-235.186,235.184-235.186 C4556.685,364.538,4661.977,469.829,4661.977,599.724z"/>
            <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="4048.1335" y1="572.3027" x2="4810.1455" y2="572.3027">
              <stop  offset="0" stopColor="#262262"/>
              <stop  offset="1" stopColor="#2484C6" stopOpacity="0"/>
            </linearGradient>
            <path fill="none" stroke="url(#SVGID_3_)" strokeWidth="9.4074" strokeMiterlimit="10" d="M4805.441,572.298	c0,207.816-168.48,376.307-376.309,376.307c-207.826,0-376.296-168.49-376.296-376.307c0-207.825,168.469-376.298,376.296-376.298	C4636.961,196,4805.441,364.473,4805.441,572.298z"/>
            <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="3810.6052" y1="518.6299" x2="3984.0857" y2="518.6299">
              <stop  offset="0" stopColor="#262262"/>
              <stop  offset="1" stopColor="#2484C6" stopOpacity="0"/>
            </linearGradient>
            <path fill="none" stroke="url(#SVGID_4_)" strokeWidth="9.4074" strokeMiterlimit="10" d="M3915.892,896.097	c-63.578-96.445-100.583-211.96-100.583-336.115c0-161.747,62.797-308.829,165.346-418.19"/>
            <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="4873.7988" y1="519.8262" x2="5042.9766" y2="519.8262">
              <stop  offset="0" stopColor="#262262"/>
              <stop  offset="1" stopColor="#2484C6" stopOpacity="0"/>
            </linearGradient>
            <path fill="none" stroke="url(#SVGID_5_)" strokeWidth="9.4074" strokeMiterlimit="10" d="M4877.264,146.459	c99.973,108.864,161.009,254.063,161.009,413.522c0,123.164-36.423,237.834-99.088,333.821"/>
            <linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="3434.3083" y1="471.0332" x2="3599.7273" y2="471.0332">
              <stop  offset="0" stopColor="#262262"/>
              <stop  offset="1" stopColor="#2484C6" stopOpacity="0"/>
            </linearGradient>
            
            <linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="4375.0449" y1="411.5752" x2="4478.5269" y2="411.5752">
              <stop  offset="0" stopColor="#262262"/>
              <stop  offset="1" stopColor="#2484C6" stopOpacity="0"/>
            </linearGradient>
            <path fill="none" stroke="url(#SVGID_7_)" strokeWidth="9.4074" strokeMiterlimit="10" d="M4473.823,411.575	c0,25.971-21.057,47.037-47.037,47.037c-25.979,0-47.037-21.066-47.037-47.037s21.059-47.037,47.037-47.037	C4452.767,364.538,4473.823,385.604,4473.823,411.575z"/>
            <linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="4328.0078" y1="458.6123" x2="4525.5649" y2="458.6123">
              <stop  offset="0" stopColor="#262262"/>
              <stop  offset="1" stopColor="#2484C6" stopOpacity="0"/>
            </linearGradient>
            <path fill="none" stroke="url(#SVGID_8_)" strokeWidth="9.4074" strokeMiterlimit="10" d="M4520.861,458.612	c0,51.952-42.112,94.074-94.075,94.074c-51.952,0-94.074-42.122-94.074-94.074s42.122-94.074,94.074-94.074	C4478.749,364.538,4520.861,406.66,4520.861,458.612z"/>
            <linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="1575.991" y1="498.2041" x2="4431.2373" y2="498.2041">
              <stop  offset="0.1173" stopColor="#262262"/>
              <stop  offset="0.347" stopColor="#2484C6"/>
              <stop  offset="1" stopColor="#2484C6" stopOpacity="0"/>
            </linearGradient>
            <path fill="url(#SVGID_9_)" d="M4149.377,927.537l-47.75-4.165l31.702-780.791l113.016-5.104l-51.95,572.76l3.296,0.273	l226.434-379.522l7.113-186.723L3080.829,47.022L1575.991,735.968l1937.061,146.361c-232.299-37.902-184.734-324.43-170.715-421.878	c18.312-127.262,66.087-394.641,299.606-368.524c246.628,27.596,200.436,321,185.778,422.805	c-13.268,92.348-49.313,367.767-264.365,371.398l837.204,63.256l17.702-464.622l-1.979,1.72L4149.377,927.537z"/>
            <linearGradient id="SVGID_10_" gradientUnits="userSpaceOnUse" x1="7273.0977" y1="498.3613" x2="4426.9521" y2="498.3611">
              <stop  offset="0.1173" stopColor="#262262"/>
              <stop  offset="0.347" stopColor="#2484C6"/>
              <stop  offset="1" stopColor="#2484C6" stopOpacity="0"/>
            </linearGradient>
            <path fill="url(#SVGID_10_)" d="M5750.712,47.337c-1.345,0.102-1319.475,96.929-1319.475,96.929l-6.541,176.736l2.129-3.572	l-0.302,151.129l0.302-150.906l222.681,386.987l3.304-0.231l-36.6-573.332l112.864,6.548l10.788,781.048l-47.84,3.563	l-255.064-444.364l-10.435-9.313l-7.535,6.546l-17.558,474.28l646.64-48.967l-71.076-789.335l115.11-9.047l331.304,644.503	l2.527-2.562l-20.013-176.517l-43.825-486.644l91.813-7.211l71.21,790.682l1722.455-130.435	C7247.576,733.854,5752.053,47.236,5750.712,47.337z"/>
            <linearGradient id="SVGID_11_" gradientUnits="userSpaceOnUse" x1="4537.04" y1="513.2959" x2="5636.5923" y2="605.017">
              <stop  offset="0.1173" stopColor="#262262"/>
              <stop  offset="0.347" stopColor="#2484C6"/>
              <stop  offset="1" stopColor="#2484C6" stopOpacity="0"/>
            </linearGradient>
            <polygon fill="url(#SVGID_11_)" points="5076.128,231.196 5096.382,410.093 5139.903,893.46 5409.428,873.053 5078.669,228.601 "/>
            <radialGradient id="SVGID_12_" cx="4383.9951" cy="88.7539" r="1347.8622" gradientTransform="matrix(1 0 0 0.6582 0 213.1491)" gradientUnits="userSpaceOnUse">
              <stop  offset="0" stopColor="#262262"/>
              <stop  offset="0.5" stopColor="#2484C6"/>
              <stop  offset="1" stopColor="#2484C6" stopOpacity="0"/>
            </radialGradient>
            <path fill="url(#SVGID_12_)" d="M3631.458,166.333c-154.806-17.308-180.986,192.515-197.288,305.9	c-29.964,208.252-19.048,327.044,104.27,340.808c152.181,17.026,178.159-172.857,197.458-307.046	C3756.869,360.227,3786.263,183.65,3631.458,166.333z"/>
            <radialGradient id="SVGID_13_" cx="4444.2461" cy="198.5435" r="1119.8357" gradientTransform="matrix(1 0 0 0.6582 0 213.1491)" gradientUnits="userSpaceOnUse">
              <stop  offset="0" stopColor="#262262"/>
              <stop  offset="0.5" stopColor="#2484C6"/>
              <stop  offset="1" stopColor="#2484C6" stopOpacity="0"/>
            </radialGradient>
            <path fill="url(#SVGID_13_)" d="M4444.703,143.949L3094.292,46.706L1589.457,735.649l1901.651,143.689	c-207.27-51.967-162.331-323.113-148.771-417.365c18.312-127.262,66.087-394.641,299.606-368.524	c246.628,27.596,200.436,321,185.778,422.805c-12.824,89.258-46.925,349.512-243.35,370.131l829.655,62.689l17.784-466.766	l-5.292-4.725l-10.243,8.9l-266.907,441.053l-47.748-4.165l31.7-780.791l113.016-5.104l-51.95,572.76l3.296,0.273l229.139-384.056	L4444.703,143.949"/>
            <radialGradient id="SVGID_14_" cx="4445.2812" cy="190.0317" r="1108.6266" gradientTransform="matrix(1 0 0 0.6582 0 213.1491)" gradientUnits="userSpaceOnUse">
              <stop  offset="0" stopColor="#262262"/>
              <stop  offset="0.5" stopColor="#2484C6"/>
              <stop  offset="1" stopColor="#2484C6" stopOpacity="0"/>
            </radialGradient>
            <path fill="url(#SVGID_14_)" d="M5761.064,47.022c-1.346,0.102-1319.475,96.927-1319.475,96.927l-14.771,182.505l222.682,389.074	l3.296-0.232l-36.592-573.332l112.857,6.549l10.716,775.724l308.331-23.35l-71.11-789.796l115.11-9.046l331.307,644.504l2.52-2.563	l-20.013-176.517l-43.818-486.644l91.807-7.21l71.253,791.146l1732.765-131.219C7257.929,733.542,5762.404,46.921,5761.064,47.022z"	/>
            <radialGradient id="SVGID_15_" cx="4437.2061" cy="199.9043" r="1115.6157" gradientTransform="matrix(1 0 0 0.6582 0 213.1491)" gradientUnits="userSpaceOnUse">
              <stop  offset="0" stopColor="#262262"/>
              <stop  offset="0.5" stopColor="#2484C6"/>
              <stop  offset="1" stopColor="#2484C6" stopOpacity="0"/>
            </radialGradient>
            <path fill="url(#SVGID_15_)" d="M4426.518,477.584l-14.733,471.491l277.333-21.004c0,0-248.816-433.708-252.169-439.311	S4426.518,477.584,4426.518,477.584z"/>
            <line fill="#FFFFFF" x1="0" y1="0" x2="8869.189" y2="0"/>
            <line fill="#FFFFFF" x1="0" y1="1001.8" x2="8869.189" y2="1001.8"/>

            </svg>
            </div>

          </Grid>

          {/* left spacing */}
          <Grid item xs={2}>
          </Grid>
          
          {/* create your own experience */}
          <Grid item xs={8}>
            <Grid item xs={12} id="grid-homepage">

            
                    <Paper className="paper-section" id="paper-section" >
                      
                      <div className="paper-title-homepage">
                      Create your own experience.
                      </div>
                      
                      <hr></hr>

                            <div className="explanation-title-homepage">
                              So how does it work?
                            </div>
                            <div className="explanation-text-homepage">
                              "If you want to go far do it yourself, if you want to go farther work in a team" - Travis. <br/> 
                              Our potential comes thanks to local artists and people like you that provide space or allow others to rent equipment in order to give them the opportunity to create their OWN personalized studio environment. 
                              Click here to learn more!

                            </div>
                      <hr></hr>

                      <Grid container spacing={8}>

                        <Grid item xs={6}>
                          <Paper id="book-homepage">
                            
                            Create your own recording experience.
                            
                            <Button>
                              Book
                            </Button>
                          </Paper>
                        </Grid>

                        <Grid item xs={6}>
                          <Paper id="rent-homepage">
                            Sign up to rent your equipment.
                            <Button>
                              Rent
                            </Button>
                          </Paper>
                        </Grid>

                      </Grid>
                    </Paper>
            </Grid>
          </Grid>

          {/* right spacing */}
          <Grid item xs={2}>
          </Grid>


          <Grid item xs={2}>
              
          
          <Grid item xs={12} id="grid-homepage">
                  
          </Grid>
        </Grid>
          
          <Grid item xs={2}>
            <Grid item xs={12} id="grid-homepage">
                  
          </Grid>
          </Grid>
          
          <Grid item xs={2}>
            <Grid item xs={12} id="grid-homepage">
                  
          </Grid>
          </Grid>

          <Grid item xs={2}>
            <Grid item xs={12} id="grid-homepage">
                  
            </Grid>
          </Grid>
        
        </Grid>
      
      </div>
      <div className="footer">2019</div>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);