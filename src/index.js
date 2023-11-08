import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Schedule from "./Schedule";
import LeaderBoard from "./LeaderBoard";
import NoFound from "./NoFound";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { appTheme } from "./theme";

const theme = extendTheme(appTheme);

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Router>
      <React.StrictMode>
        <App />
        <Switch>
          <Route exact path="/">
            <Schedule />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/leaderboard">
            <LeaderBoard />
          </Route>
          <Route path="*">
            <NoFound />
          </Route>
        </Switch>
      </React.StrictMode>
    </Router>
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
