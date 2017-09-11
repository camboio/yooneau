import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Deck from './deck';
import PlayedCards from './played_cards';

class App extends Component {
   constructor(props){
      super(props);
   }

   componentDidMount(){
      if(this.props.deck.playedCards.length == 0){
         this.props.playFromDeck();
      }
   }

   componentWillReceiveProps(nextProps){
      if(nextProps.deck.unplayedCards.length == 0){
         this.props.rebuildDeck();
      }
   }

   render() {
      return (
         <div>
            <Deck cards={this.props.deck.unplayedCards}/>
            <PlayedCards cards={this.props.deck.playedCards}/>
            <div className="btn btn-primary" onClick={(e) => {
               this.props.playFromDeck();
            }}>play from deck</div>
         </div>
      );
   }
}

function mapStateToProps(state){
   return {
      deck: state.deck
   };
}

export default connect(mapStateToProps, actions)(App);
