import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import * as types from '../actions/types';

import GameRules from './../game_rules';
import Deck from './deck';
import PlayedCards from './played_cards';
import AiPlayer from './ai_player';
import Player from './player';

class Game extends Component {
   constructor(props){
      super(props);

      this.state = {winner: null}
   }

   componentWillMount(){
      let username = localStorage.getItem('username');
      if(username){
         this.props.addPlayer(username);
      }else{
         let x = false;
         Object.keys(this.props.players).map((key) => {
            if(this.props.players[key].human){
               x = true;
            }
         });
         if(!x){
            this.props.history.push('/');
         }
      }
   }

   componentDidMount(){
      this.props.gameInitialise();
   }

   componentWillReceiveProps(nextProps){
      // console.log(nextProps);

      const players = Object.keys(nextProps.players);
      //determine how many cards to be dealt
      const cardsToDeal = GameRules.CARDS_IN_DECK - (GameRules.CARDS_TO_DEAL * players.length);
      const dealtCards = nextProps.deck.unplayedCards.length;

      if(nextProps.deck.unplayedCards.length == 0){
         nextProps.rebuildDeck();
      }
      //game ready to initialise
      if(nextProps.game.state == types.GAME_INITIALISE
      && nextProps.deck.unplayedCards.length == 108){
         // console.log('game initialise');
         // add 3 AI players
         for(let i = 0; i < 3; i++){
            nextProps.addAiPlayer(`Player ${i + 1}`);
         }

         this.props.gameDeal();
      }
      //deal state
      if(nextProps.game.state == types.GAME_DEAL &&
      dealtCards > cardsToDeal){
         // determine player id based on amount of cards left to deal
         let p = (nextProps.deck.unplayedCards.length - cardsToDeal) % players.length;
         this.props.drawCard(nextProps.players[p], nextProps.deck.unplayedCards[0]);
      }
      //dealing is done
      if(nextProps.game.state == types.GAME_DEAL &&
      dealtCards == cardsToDeal){
         // console.log('deal done');
         nextProps.playFromDeck();
         nextProps.gameFirstPlayer();
      }
      //first player has been made active, switch to playing state
      if(nextProps.game.state == types.GAME_FIRST_PLAYER){
         // console.log('game first player');
         this.props.gamePlayerPlaying();
      }
      if(nextProps.game.state == types.GAME_EVALUATE_MOVE){
         // console.log('evaluate move');
         let next = 1;
         const lastPlayer = parseInt(nextProps.active);
         const lastPlayed = nextProps.deck.playedCards[nextProps.deck.playedCards.length-1];

         //check for win condition
         if(nextProps.players[lastPlayer].cards.length == 1){
            // console.log('yooneau!', nextProps.players[lastPlayer].name);
         }
         if(nextProps.players[lastPlayer].cards.length == 0){
            // console.log('winner!', nextProps.players[lastPlayer].name);
            this.props.gameWinner(nextProps.players[lastPlayer]);
         }
         if(nextProps.players[lastPlayer].cards.length > 0){
            //if player should be skipped
            if(nextProps.game.lastMove === types.PLAY_CARD){
               if(lastPlayed.value == 11){
                  // console.log('skip!');
                  next += 1;
               }
            }

            //figure out next player
            let nextPlayer = nextProps.game.clockwise ? lastPlayer+next : lastPlayer-next;
            nextPlayer = (players.length+nextPlayer) % players.length;
            // debugger;

            //finished game logic, let next player play
            this.props.gameNextPlayer(nextPlayer);
         }
      }
      if(nextProps.game.state === types.GAME_NEXT_PLAYER){
         // console.log('game next player');
         this.props.gamePlayerPlaying();
      }
      if(nextProps.game.state === types.GAME_PLAYER_PLAYING){
         localStorage.setItem('current_game', nextProps.state);
      }
      if(nextProps.game.state === types.GAME_WINNER){
         this.setState({winner: nextProps.game.winner});
      }
   }

   renderPlayers(){
      const players = {...this.props.players};
      return Object.keys(players).map((key, index) => {
         if(players[key].human){
            return <Player key={index} player={players[key]}
            active={this.props.active == key ? true : false} />;
         }else{
            return <AiPlayer key={index} player={players[key]}
            active={this.props.active == key ? true : false} />;
         }
      });
   }

   render() {
      return (
         <div className="game-component">
            {/* <Deck cards={this.props.deck.unplayedCards}/> */}
            {this.state.winner && <h1>congrats {this.state.winner.name}! you won!</h1>}
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
      game: state.game,
      state: state
   };
}

export default connect(mapStateToProps, actions)(Game);
