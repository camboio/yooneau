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
      const dealtCards = nextProps.deck.unplayedCards.length + 1;
      //game ready to initialise
      if(nextProps.game.state == types.GAME_INITIALISE && nextProps.deck.unplayedCards.length == 108){
         console.log('game initialise');
         // deal first card from the deck
         if(nextProps.deck.playedCards.length == 0){
            nextProps.playFromDeck();
         }
         // add 4 AI players
         for(let i = 0; i < 4; i++){
            const active = i == 0 ? false : false;
            nextProps.addAiPlayer(`Player ${i + 1}`, active);
         }

      }
      //game ready to deal, switch focus to first player
      if(nextProps.game.state == types.GAME_INITIALISE && nextProps.deck.unplayedCards.length == 107){
         console.log('game deal');
         this.props.gameDeal();
      }
      //deal state
      if(nextProps.game.state == types.GAME_DEAL &&
      dealtCards > cardsToDeal){
         // determine player id based on amount of cards left to deal
         let p = players.length - (nextProps.deck.unplayedCards.length - cardsToDeal) % players.length;
         this.props.drawCard(nextProps.players[p], nextProps.deck.unplayedCards[0]);
      }
      //dealing is done
      if(nextProps.game.state == types.GAME_DEAL &&
      dealtCards == cardsToDeal){
         console.log('deal done');
         this.props.gameFirstPlayer();
      }
      //first player has been made active, switch to playing state
      if(nextProps.game.state == types.GAME_FIRST_PLAYER){
         console.log('game first player');
         this.props.gamePlayerPlaying();
      }
      if(nextProps.game.state == types.GAME_PLAYER_PLAYING){
         console.log('game player playing');
      }
      if(nextProps.game.state === types.GAME_NEXT_PLAYER){
         console.log('game next player');
         this.props.gamePlayerPlaying();
      }
   }

   renderPlayers(){
      const players = {...this.props.players};
      return Object.keys(players).map((key, index) => {
         return <AiPlayer key={index} player={players[key]}
         active={this.props.active == key ? true : false}
         played={[...this.props.deck.playedCards].pop()}
         unplayed={this.props.deck.unplayedCards[0]} />;
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
      players: state.players.players,
      active: state.players.active,
      game: state.game
   };
}

export default connect(mapStateToProps, actions)(App);
