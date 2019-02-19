// didn't have
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// match
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Navbar from './components/Navbar';
import BuildsPage from './pages/BuildsPage';
import Request from './pages/Request';
// import HomeStudio from './pages/HomeStudio';
import ThreeRoomStudio from './pages/ThreeRoomStudio';
import HomeStudio from './pages/HomeStudio';
import CondenserMic from './pages/CondenserMic';
import Login from './components/Login';
import Signup from './components/Signup';
import FindPlace from './pages/FindPlace';
import FindMic from './pages/FindMic';

// when logged in
import RentPage from './pages/RentPage';
import Profile from './components/Profile';


// Here is if we have an id_token in localStorage
if(localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            {/* Home */}
            <Route exact path="/" component={App} />
            <Route exact path="/rentpage" component={RentPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/findPlace" component={FindPlace} />
            <Route exact path="/findMic" component={FindMic} />
            <Route exact path="/buildsPage" component={BuildsPage} />
            <Route exact path="/Request" component={Request} />
            {/* <Route exact path="/HomeStudio" component={HomeStudio} /> */}
            <Route exact path="/ThreeRoomStudio" component={ThreeRoomStudio} />
            <Route exact path="/HomeStudio" component={HomeStudio}/>
            <Route exact path="/CondenserMic" component={CondenserMic}/>
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
