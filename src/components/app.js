import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import * as types from '../actions/types';

import Game from './game';
import Deck from './deck';
import PlayedCards from './played_cards';
import AiPlayer from './ai_player';

class App extends Component {
   componentDidMount(){
      this.props.gameInitialise();
   }

   componentWillReceiveProps(nextProps){
      // console.log(nextProps);

      const players = Object.keys(nextProps.players);
      //determine how many cards to be dealt
      const cardsToDeal = Game.CARDS_IN_DECK - (Game.CARDS_TO_DEAL * players.length);

      if(nextProps.deck.unplayedCards.length == 0){
         nextProps.rebuildDeck();
      }
      //game ready to initialise
      if(this.props.game.state !== nextProps.game.state
      && nextProps.game.state == types.GAME_INITIALISE){
         // deal first card from the deck
         if(nextProps.deck.playedCards.length == 0){
            nextProps.playFromDeck();
         }
         // add 4 AI players
         for(let i = 0; i < 4; i++){
            nextProps.addAiPlayer(`Player ${i + 1}`);
         }
      }
      //game ready to deal
      if(nextProps.game.state == types.GAME_INITIALISE && nextProps.deck.unplayedCards.length == 107){
         this.props.gameDeal();
      }
      //deal state
      if(nextProps.game.state == types.GAME_DEAL &&
      nextProps.deck.unplayedCards.length >= cardsToDeal){
         // determine player id based on amount of cards left to deal
         let p = players.length - (nextProps.deck.unplayedCards.length - cardsToDeal) % players.length;
         this.props.drawCard(nextProps.players[p], nextProps.deck.unplayedCards[0]);
      }
      //if the dealing is done, switch focus to first player
      if(nextProps.game.state == types.GAME_DEAL &&
      nextProps.deck.unplayedCards.length == cardsToDeal - 1){
         // console.log('dealin\'s done');
         this.props.gameFirstPlayer();
      }
      //first player has been made active, switch to playing state
      if(nextProps.game.state == types.GAME_FIRST_PLAYER){
         this.props.gamePlayerPlaying();
      }
   }

   renderPlayers(){
      return Object.keys(this.props.players).map((key, index) => {
         return <AiPlayer key={index} player={this.props.players[key]} />;
      });
   }

   render() {
      return (
         <div>
            <Deck cards={this.props.deck.unplayedCards}/>
            <PlayedCards cards={this.props.deck.playedCards}/>
            {this.renderPlayers()}
         </div>
      );
   }
}

function mapStateToProps(state){
   return {
      deck: state.deck,
      players: state.players,
      game: state.game
   };
}

export default connect(mapStateToProps, actions)(App);
