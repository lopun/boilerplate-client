import React from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import Home from "src/Routes/Home";
import Login from "src/Routes/Login";
import SignUp from "src/Routes/SignUp";

interface IProps {
  isLoggedIn: boolean;
}

console.log(process.env.PUBLIC_URL);
const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => {
  localStorage.setItem("isLoggedIn", `${isLoggedIn}`);
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact={true} path={"/"} component={Home} />
          <Route exact={true} path={"/login"} component={Login} />
          <Route exact={true} path={"/signup"} component={SignUp} />
          <Redirect from={"*"} to={"/"} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default AppPresenter;
