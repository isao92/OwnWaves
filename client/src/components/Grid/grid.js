// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import ControlledExpansionPanels from "../Sidebar/sidebar";
// import SwipeableTextMobileStepper from "../Carousel/carousel";
// import MediaCard from "../Cards/cards";
// // import MenuAppBar from "../nav/nav";
// // import BottomAppBar from "../footer/footer";

// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: "center",
//     backgroundColor: "none",
//     color: theme.palette.text.secondary
//   },
//   root: {
//     maxWidth: 1400,
//     margin: "auto",
//     marginTop: 30,
//     backgroundColor: "#fcf1e5"
//   }
// });

// function CenteredGrid(props) {
//   const { classes } = props;

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={24}>
//         <Grid item xs={3}>
//           <p className={classes.paper}>
//             <MediaCard />
//           </p>
//         </Grid>
//         <Grid item xs={3}>
//         <p className={classes.paper}>
//             <MediaCard />
//           </p>
//         </Grid>
//         <Grid item xs={3}>
//         <p className={classes.paper}>
//             <MediaCard />
//           </p>
//         </Grid>
//         <Grid item xs={3}>
//         <p className={classes.paper}>
//             <MediaCard />
//           </p>
//         </Grid>
//         <Grid item xs={4}>
//           <p className={classes.paper}>
//             {" "}
//             <ControlledExpansionPanels />
//           </p>
//         </Grid>
//         <Grid item xs={8}>
//           <Paper className={classes.paper}>
//             <SwipeableTextMobileStepper />
//           </Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// CenteredGrid.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(CenteredGrid);
