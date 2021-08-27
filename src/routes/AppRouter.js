import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../components/Home/Home";
import ContactForm from "../components/ContactForm/ContactForm";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact">
          <ContactForm />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
