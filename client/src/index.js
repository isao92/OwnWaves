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
import ProjectsPage from './pages/ProjectsPage';

// dont need
import AdminPage from './pages/AdminPage';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';


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
            <Route exact path="/adminpage" component={AdminPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/ProjectsPage" component={ProjectsPage} />
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
