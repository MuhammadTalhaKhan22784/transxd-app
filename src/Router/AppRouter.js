import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Forget from "../Pages/Forms/forget";
import Login from "../Pages/Forms/Login";
import GetCard from "../Pages/GetCard/GetCard";
import Home from "../Pages/Home/Home";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import ReceivePayment from "../Pages/ReceivePayment/ReceivePayment";
import Register from "../Pages/Register/Register";
import SimplePricing from "../Pages/SimplePricing/SimplePricing";
import TermAndCond from "../Pages/TermAndCond/TermAndCond";
const AppRouter = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/get-card" component={GetCard}></Route>
          <Route
            exact
            path="/receive-payment"
            component={ReceivePayment}
          ></Route>
          <Route exact path="/pricing" component={SimplePricing}></Route>
          <Route exact path="/terms-condition" component={TermAndCond}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/forget" component={Forget}></Route>
          <Route exact path="/register" component={Register}></Route>
        </Switch>
        <Footer/>
      </Router>
    </React.Fragment>
  );
};

export default AppRouter;
