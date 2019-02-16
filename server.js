require ('dotenv').config();
const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const mongoose = require('mongoose');
const morgan = require('morgan'); // used to see requests
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3001;


// Setting CORS so that any website can
// Access our API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

//log all requests to the console
app.use(morgan('dev'));

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://' + process.env.REACT_APP_MONGO_USER_NAME + ':' + process.env.REACT_APP_MONGO_PASSWORD + '@ds137255.mlab.com:37255/ownwaves', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

// Init the express-jwt middleware
const isAuthenticated = exjwt({
  secret: 'all sorts of code up in here'
});


// LOGIN ROUTE
app.post('/api/login', (req, res) => {
  db.User.findOne({
    email: req.body.email
  }).then(user => {
    user.verifyPassword(req.body.password, (err, isMatch) => {
      if(isMatch && !err) {
        let token = jwt.sign({ id: user._id, email: user.email }, 'all sorts of code up in here', { expiresIn: 129600 }); // Sigining the token
        res.json({success: true, message: "Token Issued!", token: token, user: user});
      } else {
        res.status(401).json({success: false, message: "Authentication failed. Wrong password."});
      }
    });
  }).catch(err => res.status(404).json({success: false, message: "User not found", error: err}));
});

// SIGNUP ROUTE
app.post('/api/signup', (req, res) => {
  db.User.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// Any route with isAuthenticated is protected and you need a valid token
// to access
app.get('/api/user/:id', isAuthenticated, (req, res) => {
  db.User.findById(req.params.id).then(data => {
    if(data) {
      res.json(data);
    } else {
      res.status(404).send({success: false, message: 'No user found'});
    }
  }).catch(err => res.status(400).send(err));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.get('/', isAuthenticated /* Using the express jwt MW here */, (req, res) => {
  res.send('You are authenticated'); //Sending some response when authenticated
});

// Error handling
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
    res.status(401).send(err);
  }
  else {
    next(err);
  }
});

// mushrooms image
// https://lh3.google.com/u/0/d/1p_WhPbxdRHFT6W9mA0N1MTGuMu2b6Y1w=w1094-h819-iv1

// the jam image
// https://lh3.google.com/u/0/d/1s5eswGAFf2TNd8Wy4w2SvNmF1zo7IPVG=w1433-h855-iv1

// Code to seed projects collection
const projectsSeed = [
  {
      first_name: "Michael",
      last_name: "Johnson",
      description: 'Hi I am renting out my garage weekends from 6AM to 8PM, you can be as loud as you want as long as the garage is closed, there is no ventilation and as far as refreshments come at extra costs, no drugs allowed and there are two open parking spots in front of the garage.',
      technologies_used: "No acoustic treatment.",
      imageUrl: "./assets/images/garage-with-motorbike.jpg",
      projectURL: "https://project3-full-stack-react.herokuapp.com/",
      spacingForProject: "150px"
  },
  {
      first_name: "Tom",
      last_name: "Cruise",
      description: "Hey guys I'm feeling generous, I have a Japanese Juno keyboard specially designed for me and I will let anyone rent it out since I'm working a lot on this new movie and I'm not using it.",
      technologies_used: "Comes with power cable, stand and sustain pedal.",
      imageUrl: "./assets/images/keyboard.jpg",
      // description: "I have an electro-acoustic Martin & Co. Guitar"
      projectURL: "https://isao92.github.io/project-one/",
      spacingForProject: "580px"
  },
  {
      first_name: "Book Log",
      last_name: "React",
      description: "This application allows you to enter a book and store it in the database.",
      technologies_used: "The Application uses React, Express, Bootstrap and Mongoose.",
      imageUrl: "./assets/images/electric-guitar.jpg",
      // description: "I have a little sound prof garage available"
      projectURL: "https://react-cbc.herokuapp.com/",
      spacingForProject: "995px"
  },
  {
      first_name: "Online",
      last_name: "Rock Paper Scissors",
      description: "This application allows users to play Rock Paper Scissors Online with their friends with the use of a single chat.",
      technologies_used: "This app was developed using Firebase, Javascript, HTML5, CSS, and Bootstrap.",
      imageUrl: "./assets/images/drums-rumandshark.jpg",
      projectURL: "https://isao92.github.io/RPS-Multiplayer/",
      spacingForProject: "1395px"
  }
];

db.Projects
.deleteMany({})
.then(() => db.Projects.collection.insertMany(projectsSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
})
.catch(err => {
  console.error(err);
});
// END seed code

// back-end api routes for projects collection
// get json of all documents in projects collection
app.get("/api/projects", (req, res) => {
  db.Projects
    .find({})
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});

// get one projects by id
app.get("/api/projects/:id", (req, res) =>{
  db.Projects
  .findById({_id: req.params.id})
  .then(datafoo=>datafoo.remove())
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),

// create new projects document
app.post("/api/projects", (req, res) => {
  db.Projects
    .create(req.body)
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});

// get one document in projects collection using its id
app.get("/api/projects/:id", (req, res) =>{
  db.Projects
  .findById({_id: req.params.id})
  .then(datafoo=>datafoo.remove())
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),

// update a document in projects collection using its id
app.put("/api/projects/:id", (req, res) =>{
  db.Projects
  .findOneAndUpdate({_id: req.params.id}, req.body)
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),

// delete a record in projects collection using its id
app.delete("/api/projects/:id", (req, res) =>{
  db.Projects
  .findById({_id: req.params.id})
  .then(datafoo=>datafoo.remove())
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),


// get json of all documents in Batch collection
app.get("/api/batch", (req, res) => {
  db.Batch
    .find({})
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});

// create new BATCH document
app.post("/api/batch", (req, res) => {
  db.Batch
    .create(req.body)
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});

// update a document in BATCH collection using its id
app.put("/api/batch/:id", (req, res) =>{
  db.Batch
  .findOneAndUpdate({_id: req.params.id}, req.body)
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),

// delete a record in BATCH collection using its id
app.delete("/api/batch/:id", (req, res) =>{
  db.Batch
  .findById({_id: req.params.id})
  .then(datafoo=>datafoo.remove())
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
