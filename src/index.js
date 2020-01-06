import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import actionCable from 'actioncable';

const CableApp = {}

CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')
// This readys a consumer (think of this as a browser window) that will connect against /cable on your backend server by default (the client (your front-end) is connecting to the cable - through a route you have defined on the back-end)

ReactDOM.render(
    <Router>
        <App cableApp={CableApp} />
    </Router>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
