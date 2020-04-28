import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from 'Pages/Login';
import Header from 'Pages/Header';
import Home from 'Pages/Home';

const RootRouter = function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = "/login" component = {Login} />
        <Route path = "/" component = {Header} />
      </Switch>
      <Route path = "/" component = {Home} />
    </BrowserRouter>
  );
}

export default RootRouter;
