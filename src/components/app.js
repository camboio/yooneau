import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Game from './game';
import Home from './home';

export default class App extends React.Component{
   render(){
      return(
         <Router>
            <div className="app-component">
               <Route exact path="/" component={Home} />
               <Route path="/play" component={Game} />
            </div>
         </Router>
      );
   }
}
