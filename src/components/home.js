import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

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
            hello friend, would you like to play some yooneau?
            <input type="text" value={this.state.username} onChange={(e) =>{
               e.preventDefault();
               this.setState({username: e.target.value});
            }} placeholder="enter a user name"/>
            <div className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>play!</div>
         </div>
      );
   }
}

export default connect(null, actions)(Home);
