import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';
import * as types from '../actions/types';

import Hand from './hand';
import CardBack from './cards/card_back';

class AiPlayer extends React.Component{
   constructor(props){
      super(props);

      this.state = { drawing: null, selecting: null, compelled: 0 }
      this.aiMovement = this.aiMovement.bind(this);
   }

   componentWillReceiveProps(nextProps){
      // console.log(nextProps);
      if(nextProps.active && this.props.active !== nextProps.active){
         // console.log(`I'm ${nextProps.player.name} and I'm active now!`);
         setTimeout(this.aiMovement, 1000);
      }
      if(nextProps.active && this.props.active == nextProps.active){
         // console.log(`I'm ${nextProps.player.name} and I'm still active!`);
         if(this.state.drawing > 0){
            this.setState({drawing: this.state.drawing-1});
            this.drawCard();
         }
         if(this.state.drawing == 0){
            this.props.gameEvaluateMove(types.PLAY_CARD);
            this.setState({drawing: null});
         }
      }
   }

   aiMovement(){
      if(!this.props.active){
         // console.log(`i'm player ${this.props.player.name} and i'm not active yet`);
         // debugger;
         setTimeout(this.aiMovement, 1000);
      }else{
         //this is where we should process initial player actions
         //if played card is +2 or +4, check played cards to see if
         //total < +8.
         if(this.props.lastMove == types.PLAY_CARD){
            let i = 0, draw = 0, played = [...this.props.played].reverse();
            while(played[i] && (played[i].value == 12 || played[i].value == 13)){
               draw = draw + (played[i].value % 11) * 2;
               i++;
            }
            // console.log(draw);
            if(draw == 0){
               this.makePlay();
            }else if(draw == 2 || draw == 4){
               //check if hand has +2 or +4
               //otherwise draw card
               let x = false;
               this.props.player.cards.map((card) => {
                  if(card.value == 12 || card.value == 13){
                     x = true;
                  }
               });
               if(!x){
                  this.setState({drawing: draw-1});
                  this.drawCard();
               }else{
                  this.makePlay();
               }
            }else if(draw == 6){
               //check if hand has +2
               //otherwise draw card
               let x = false;
               this.props.player.cards.map((card) => {
                  if(card.value == 12){
                     x = true;
                  }
               });
               if(!x){
                  this.setState({drawing: draw-1});
                  this.drawCard();
               }else{
                  this.makePlay();
               }
            }else if(draw == 8){
               this.setState({drawing: draw-1});
               this.drawCard();
            }else{
               console.log(draw);
            }
         }else{
            this.makePlay();
         }
      }
   }

   makePlay(){
      const playableCards = _.compact(this.props.player.cards.map((card) => {
         return this.playableCard(card) ? card : null;
      }));
      if(playableCards.length > 0){
         if(playableCards[0].colour == "black"){
            const colours = ['red','blue','green','yellow'];
            const select = Date.now() % (colours.length-1);
            // console.log('select', select);
            this.confirmColour(colours[select], playableCards[0]);
         }else{
            this.playCard(playableCards[0]);
         }
      }else{
         this.drawCard(true);
         this.props.gameEvaluateMove(types.DRAW_CARD);
      }
   }

   drawCard(play=false){
      const card = this.props.unplayed[0];
         this.props.drawCard(this.props.player, card);

      if(play && this.playableCard(card) && card.colour !== "black"){
         this.props.playCard(this.props.player, card);
      }
   }

   playCard(card){
      if(!this.props.active || !this.playableCard(card)){
         console.log('null card play');
         return null;
      }
      if(card.colour == "black"){
         this.setState({ selecting: card });
      }else{
         this.setState({compelled: 0});
         this.props.playCard(this.props.player, card);
         this.props.gameEvaluateMove(types.PLAY_CARD);
      }
   }

   playableCard(card){
      const faceUp = this.props.played[this.props.played.length-1];
      if(this.props.lastMove == types.PLAY_CARD && faceUp && (faceUp.value == 12 || faceUp.value == 13)){
         if(this.state.compelled > 4 && card.value == 12){
            return true;
         }
         if(this.state.compelled >= 2 && this.state.compelled <= 4  && (card.value == 12 || card.value == 13)){
            return true;
         }
      }else if(faceUp && (faceUp.colour == card.colour || faceUp.value == card.value || card.colour == "black")){
         return true;
      }
      return false;
   }

   confirmColour(colour, card){
      card.colour = colour;
      this.props.playCard(this.props.player, card);
      this.props.gameEvaluateMove(types.PLAY_CARD);
      this.setState({ selecting: null, compelled: 0 });
   }

   render(){
      return(
         <div className={`ai-player-component${this.props.className ? ' '+this.props.className : ''}`}>
            <Hand cards={this.props.player.cards} backs={true} />
         </div>
      );
   }
}

function mapStateToProps(state){
   return {
      played: state.deck.playedCards,
      unplayed: state.deck.unplayedCards,
      lastMove: state.game.lastMove
   }
}

export default connect(mapStateToProps, actions)(AiPlayer);
