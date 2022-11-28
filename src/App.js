import "antd/dist/antd.css";
import React, { useLayoutEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Search from "./components/Search";
import Thanks from "./components/Thanks";
import ipConfig from "./ipConfig.json";

export const config = {
  endpoint: `https://qkart-rajeshvj.herokuapp.com/api/v1`,
};

export default function App(props) {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window && window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
        {/* TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - To add route for /register */}
      <Switch>
        <Route path="/register" exact component={Register} />
        {/* TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - To add route for /login */}
        <Route path="/login" exact component={Login} />       
        <Route path="/products" exact component={Search} />
        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/thanks">
          <Thanks />
        </Route>
        <Route path="/" component={Home} />
        </Switch>
    </div>
  );
}
