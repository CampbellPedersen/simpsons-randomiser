import React from "react";
import ReactDOM from "react-dom";
import {
  MemoryRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { browser } from "webextension-polyfill-ts";
import { Routes } from "./routes";
import "./app.scss";

export const App: React.FC = () => {
  return <div className="app">
    <Router>
      <Switch>
        {Object.values(Routes).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
        <Route>
          <Redirect to={Routes.Randomise.path} />
        </Route>
      </Switch>
    </Router>
  </div>
};

browser.tabs.query({ active: true, currentWindow: true }).then(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
