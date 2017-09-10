import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './home';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <div className="app-container">
            <Switch>
               <Route exact path="/" component={Home} />
               <Redirect to="/" />
            </Switch>
         </div>
      </BrowserRouter>
    );
  }
}
