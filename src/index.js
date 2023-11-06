import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Schedule from './Schedule';
import LeaderBoard from './LeaderBoard';
import NoFound from './NoFound';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
      <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/schedule">
            <Schedule />
          </Route>
          <Route exact path="/leaderboard">
            <LeaderBoard/>
          </Route>
          <Route path="*">
            <NoFound/>
          </Route>
        </Switch>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
