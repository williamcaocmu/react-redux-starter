import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
