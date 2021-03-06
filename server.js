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

mongoose.connect(process.env.MONGODB_URI || 'mongodb://' + process.env.REACT_APP_MONGO_USER_NAME + ':' + process.env.REACT_APP_MONGO_PASSWORD + '@ds159662.mlab.com:59662/heroku_1gzq8hm0', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

// Init the express-jwt middleware
const isAuthenticated = exjwt({
  secret: 'no secret'
});


// LOGIN ROUTE
app.post('/api/login', (req, res) => {
  db.User.findOne({
    email: req.body.email
  }).then(user => {
    user.verifyPassword(req.body.password, (err, isMatch) => {
      if(isMatch && !err) {
        let token = jwt.sign({ id: user._id, email: user.email }, 'no secret', { expiresIn: 129600 }); // Sigining the token
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

// --------------------------------------------------------------------------------------

// request part
const requestSeed = [
  {
    requestNumDays: 11,
    userEmail: 'Michael@michael.com',
    UserNameOfRequest: "Michael Spencer",
    PhoneOfRequest: 6195495495,
    DateOfRequest: '2019-02-27',
  }
]

// clear and reinsert request to database
db.Request.deleteMany({}).then(() => db.Request.collection.insertMany(requestSeed)).then(data => {
  console.log(data.result.n + " records inserted!");
}).catch(err => {
  console.error(err);
});

// get json of all documents in Request collection
app.get("/api/request", (req, res) => {
  db.Request
    .find({})
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});

// Search Request
app.get("/api/request/:requestNumDaysber", (req, res) => {
  const { requestNumDaysber } = req.params;

  db.request.find({ where: { requestNumDays: requestNumDaysber }})
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(400).json(err));
});

// Request ROUTE
app.post('/api/request', (req, res) => {
  // console.log(req.body);
  db.Request
  .create(req.body)
  .then(dbRequest => res.json(dbRequest))
  .catch(err => res.status(400).json(err));
});

// update a document in Request collection using its id
app.put("/api/request/:id", (req, res) =>{
  db.Request
  .findOneAndUpdate({_id: req.params.id}, req.body)
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),

// delete a record in Request collection using its id
app.delete("/api/request/:id", (req, res) =>{
  db.Request
  .findById({_id: req.params.id})
  .then(datafoo=>datafoo.remove())
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
})

// ---------------------------------------------------------------


// rent part
const rentSeed = [
  {
    rentTitle: 'Yahama Studio Speakers rental',
    rentItemName: 'M260 Yamaha Speakers',
    addressOfRental: 'John Spencer',
    emailRenter: 'john@spencer.com',
    dateAvailable: '2019-02-24T08:47:49.871Z',
    rentItemPrice: '120',
    uniqueID: 'john@spencer.com Yamaha Studio Speakers rental'
  }
]

// clear and reinsert rent to database
db.Rent.deleteMany({}).then(() => db.Rent.collection.insertMany(rentSeed)).then(data => {
  console.log(data.result.n + " records inserted!");
}).catch(err => {
  console.error(err);
});

// get json of all documents in rent collection
app.get("/api/rent", (req, res) => {
  db.Rent
    .find({})
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});



// rent ROUTE
app.post('/api/rent', (req, res) => {
  // console.log(req.body);
  db.Rent
  .create(req.body)
  .then(dbrent => res.json(dbrent))
  .catch(err => res.status(400).json(err));
});

// SIGNUP update value
app.put('/api/signup/:id', (req, res) => {
  db.User.findOneAndUpdate({_id: req.params.id}, req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// delete a record in rent collection using its id
app.delete("/api/rent/:id", (req, res) =>{
  db.Rent
  .findById({_id: req.params.id})
  .then(datafoo=>datafoo.remove())
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
})


// ------------------------------------------------------



const placesSeed = [
  {
    first_name: "Home Garage",
      last_name: "Soundproofed",
      description: 'We are a family friendly environment, and this garage is available only on the weekends from Friday to Sunday.',
      technologies_used: "Located at Normal Heights by the 805.",
      imageUrl: "./assets/images/bluehouse.jpg",
      buildURL: "/HomeStudio",
      spacingForBuild: "0"
  },
  {
    first_name: "Three Room Studio",
      last_name: "Professionally soundproofed",
      description: 'We have this entire three room studio available, you have the option to book individual rooms or the entire house. Required to book by week',
      technologies_used: "Located at La Jolla.",
      imageUrl: "./assets/images/modern-house1.jpg",
      buildURL: "/ThreeRoomStudio",
      spacingForBuild: "1"
  },
  {
    first_name: "Small Apartment Studio",
      last_name: "No soundproof",
      description: 'Hi we are in the bottom floor perfect for acoustic calm recording sessions during the day, I play drums here and neighbors are totally cool with it so feel free to book single day sessions here on the weekends.',
      technologies_used: "Located in Chula Vista",
      imageUrl: "./assets/images/apartment-studio1.jpg",
      buildURL: "/SmallApartmentStudio",
      spacingForBuild: "2"
  },
  {
    first_name: "Multi Room House",
      last_name: "Heavily soundproofed.",
      description: "We are allowing musicians to individually book each room as either practice, teaching or recording sessions. We are pretty flexible we do one day to full month bookings.",
      technologies_used: "Located in El Cajon.",
      imageUrl: "./assets/images/modern-onefloor.jpg",
      buildURL: "/MultiRoomHouse",
      spacingForBuild: "3"
  },
]

db.Places
.deleteMany({})
.then(() => db.Places.collection.insertMany(placesSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
})
.catch(err => {
  console.error(err);
});
// END seed code

// back-end api routes for places collection
// get json of all documents in places collection
app.get("/api/places", (req, res) => {
  db.Places
    .find({})
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});

// get one builds by id
app.get("/api/places/:id", (req, res) =>{
  db.Places
  .findById({_id: req.params.id})
  .then(datafoo=>datafoo.remove())
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),


// create new places document
app.post("/api/places", (req, res) => {
  db.Places
    .create(req.body)
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});

// update a document in builds collection using its id
app.put("/api/places/:id", (req, res) =>{
  db.Places
  .findOneAndUpdate({_id: req.params.id}, req.body)
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
});

// delete a record in builds collection using its id
app.delete("/api/places/:id", (req, res) =>{
  db.Places
  .findById({_id: req.params.id})
  .then(datafoo=>datafoo.remove())
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
});

// -----------------------------------------------------------------------------------------


const micsSeed = [
  {
    first_name: "Condenser",
      last_name: "Mics",
      description: 'Check out Condenser Microphones from people like you.',
      technologies_used: "Sensitive microphones with high responsiveness.",
      imageUrl: "./assets/images/vocals-mic.jpg",
      buildURL: "/CondenserMic",
      spacingForBuild: "0"
  },
  {
    first_name: "Dynamic",
      last_name: "Microphones",
      description: 'Check out Dynamic Microphones and ',
      technologies_used: "Multipurpose microphones.",
      imageUrl: "./assets/images/dynamic-mic-a.jpg",
      buildURL: "/DynamicMic",
      spacingForBuild: "1"
  },
  {
    first_name: "Quality",
      last_name: "Microphones A",
      description: 'These are higher quality studio Microphones for optimal performance',
      technologies_used: "High frequency response microhpones",
      imageUrl: "./assets/images/neuman-mic.jpg",
      buildURL: "/QualityMics",
      spacingForBuild: "2"
  },
  {
    first_name: "Drum Mics",
      last_name: "Various",
      description: "Snare, kick and cymbal mics,.",
      technologies_used: "Dynamic and resistant microphones.",
      imageUrl: "./assets/images/drum-mics.jpg",
      buildURL: "/DrumMics",
      spacingForBuild: "3"
  },
]

db.Mics
.deleteMany({})
.then(() => db.Mics.collection.insertMany(micsSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
})
.catch(err => {
  console.error(err);
});
// END seed code

// back-end api routes for mics collection
// get json of all documents in mics collection
app.get("/api/mics", (req, res) => {
  db.Mics
    .find({})
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});

// get one builds by id
app.get("/api/mics/:id", (req, res) =>{
  db.Mics
  .findById({_id: req.params.id})
  .then(datafoo=>datafoo.remove())
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),


// create new mics document
app.post("/api/mics", (req, res) => {
  db.Mics
    .create(req.body)
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});

// update a document in builds collection using its id
app.put("/api/mics/:id", (req, res) =>{
  db.Mics
  .findOneAndUpdate({_id: req.params.id}, req.body)
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
});

// delete a record in builds collection using its id
app.delete("/api/mics/:id", (req, res) =>{
  db.Mics
  .findById({_id: req.params.id})
  .then(datafoo=>datafoo.remove())
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
});



// -----------------------------------------------------------------------------------------

// Code to seed builds collection
const buildsSeed = [
  {
      first_name: "Rental",
      last_name: "Space",
      description: 'Choose your vibe, your zone, your environment, studio, garage, backyard. Feel free to browse at all the current places available and consider that each place will give you a different acoustic tone.',
      technologies_used: "Every place comes with electricity and a toilet. Click below to learn more.",
      imageUrl: "./assets/images/apartment-studio1.jpg",
      buildURL: "/findPlace",
      spacingForBuild: "1"
  },
  {
    first_name: "Vocal",
    last_name: "Equipment",
    description: "Second most important in a studio, wether you're a pop, hiphop, grunge artist, capturing that unique voice with the appropiate microphone changes the game.",
    technologies_used: "These mics come with a stand, case, pop filter (must use), and cables.",
    imageUrl: "./assets/images/vocals-mic.jpg",
    buildURL: "/findMic",
    spacingForBuild: "2"
  },
  {
      first_name: "Keyboards",
      last_name: " & MIDI",
      description: "Browse through the collection of keyboards and MIDI keyboards available for rental and start making your own waves of sound.",
      technologies_used: "All keyboards come with a case, stand, sustain pedal and cables.",
      imageUrl: "./assets/images/keyboard.jpg",
      buildURL: "/KeyboardEquipment",
      spacingForBuild: "3"
  },
  {
      first_name: "Guitars",
      last_name: "& Bass",
      description: "Usually every guitar player has his own guitar but some might be interested in recording a specific one either modern or rare.",
      technologies_used: "Guitar are provided with strap, pick ups and cables.",
      imageUrl: "./assets/images/electric-guitar.jpg",
      buildURL: "/Guitars",
      spacingForBuild: "4"
  },
  {
      first_name: "Drums",
      last_name: "& pads",
      description: "Pick your ground shaking, boom generator, sound splashing machine with caution!",
      technologies_used: "These drums come with everything including the seat and mat :)",
      imageUrl: "./assets/images/drums-rumandshark.jpg",
      buildURL: "/Drums",
      spacingForBuild: "5"
  }
];

db.Builds
.deleteMany({})
.then(() => db.Builds.collection.insertMany(buildsSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
})
.catch(err => {
  console.error(err);
});
// END seed code

// back-end api routes for builds collection
// get json of all documents in builds collection
app.get("/api/builds", (req, res) => {
  db.Builds
    .find({})
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});

// get one builds by id
app.get("/api/builds/:id", (req, res) =>{
  db.Builds
  .findById({_id: req.params.id})
  .then(datafoo=>datafoo.remove())
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),

// create new builds document
app.post("/api/builds", (req, res) => {
  db.Builds
    .create(req.body)
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});

// get one document in builds collection using its id
app.get("/api/builds/:id", (req, res) =>{
  db.Builds
  .findById({_id: req.params.id})
  .then(datafoo=>datafoo.remove())
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),

// update a document in builds collection using its id
app.put("/api/builds/:id", (req, res) =>{
  db.Builds
  .findOneAndUpdate({_id: req.params.id}, req.body)
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),

// delete a record in builds collection using its id
app.delete("/api/builds/:id", (req, res) =>{
  db.Builds
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
