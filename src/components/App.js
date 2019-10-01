import React from "react";
import Header from "./Header";
import {} from "react-router-dom";
import { Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Signup from "./auth/Signup";
import Feature from "./Feature";
import Signout from "./Signout";
import Signin from "./Signin";
const App = props => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Dashboard} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={Feature} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
      </BrowserRouter>
    </div>
  );
};

export default App;
