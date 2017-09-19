import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import LogoIcon from './logo_icon';

class Home extends React.Component{
   constructor(props){
      super(props);

      this.state = { username: '' };
   }

   handleSubmit(e){
      // if(!localStorage.getItem('username')){
      //    this.props.addPlayer(this.state.username);
      // }
      localStorage.setItem('username', this.state.username);
      this.props.history.push('/play');
      // debugger;
   }

   render(){
      return(
         <div className="home-component">
            <div>
               <LogoIcon />
            </div>
            <div>
               <div className="input">
                  <input type="text" value={this.state.username} onChange={(e) =>{
                     e.preventDefault();
                     this.setState({username: e.target.value});
                  }} placeholder="enter a user name"/>
                  <div className="button" onClick={this.handleSubmit.bind(this)}>play!</div>
               </div>
            </div>
         </div>
      );
   }
}

export default connect(null, actions)(Home);
