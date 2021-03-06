import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';
import * as types from '../actions/types';

import Hand from './hand';
import Deck from './deck';

class Player extends React.Component{
   constructor(props){
      super(props);

      this.draw = this.draw.bind(this);
      this.state = { drawing: null, selecting: null, compelled: 0 }
   }

   componentWillReceiveProps(nextProps){
      // console.log(nextProps);
      if(nextProps.active && this.props.active !== nextProps.active){
         // console.log(`I'm ${nextProps.player.name} and I'm active now!`);
         //this is where we should process initial player actions
         //if played card is +2 or +4, check played cards to see if
         //total < +8.
         if(nextProps.lastMove == types.PLAY_CARD){
            let i = 0, draw = 0, played = [...nextProps.played].reverse();
            while(played[i] && (played[i].value == 12 || played[i].value == 13)){
               draw = draw + (played[i].value % 11) * 2;
               i++;
            }
            // console.log(draw);
            if(draw == 2 || draw == 4){
               //check if hand has +2 or +4
               //otherwise draw card
               let x = false;
               nextProps.player.cards.map((card) => {
                  if(card.value == 12 || card.value == 13){
                     x = true;
                     this.setState({compelled: draw});
                  }
               });
               if(!x){
                  this.drawCard();
                  this.setState({drawing: draw-1});
               }
            }
            if(draw == 6){
               //check if hand has +2
               //otherwise draw card
               let x = false;
               nextProps.player.cards.map((card) => {
                  if(card.value == 12){
                     x = true;
                     this.setState({compelled: draw});
                  }
               });
               if(!x){
                  this.drawCard();
                  this.setState({drawing: draw-1});
               }
            }
            if(draw == 8){
               this.drawCard();
               this.setState({drawing: draw-1});
            }
         }
      }
      if(nextProps.active && this.props.active == nextProps.active){
         // console.log(`I'm ${nextProps.player.name} and I'm still active!`);
         if(this.state.drawing > 0){
            this.drawCard();
            this.setState({drawing: this.state.drawing-1});
         }
         if(this.state.drawing == 0){
            this.props.gameEvaluateMove(types.PLAY_CARD);
            this.setState({drawing: null});
         }
      }
   }

   draw(){
      //check if compelled, cannot draw while compelled
      if(!this.props.active){
         console.log('null draw');
         return null;
      }
      if(this.state.compelled > 0){
         return null;
      }
      this.drawCard(true);
      this.props.gameEvaluateMove(types.DRAW_CARD);
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

   selectColour(card){
      const colours = ['red','green','blue','yellow'];
      return colours.map((c) => {
         return <div key={c} onClick={(e) => {
            this.confirmColour(c, card);
         }}>{c}</div>
      });
   }

   confirmColour(colour, card){
      card.colour = colour;
      this.props.playCard(this.props.player, card);
      this.props.gameEvaluateMove(types.PLAY_CARD);
      this.setState({ selecting: null, compelled: 0 });
   }

   render(){
      const drawButton = <div className={`btn btn-${this.props.active ? 'primary' : 'default'}`}
      onClick={this.draw}>
         <i className="fa fa-hand-paper-o"></i>
      </div>;

      return(
         <div>
            <Deck onClick={this.draw} active={this.props.active} />
            <div className="player-component">
               <Hand cards={this.props.player.cards}
                  play={this.playCard.bind(this)} playable={this.playableCard.bind(this)}
                  draw={this.draw}/>
               <div className="drawButton">
                  {this.props.player.name}
                  {this.state.selecting && this.selectColour(this.state.selecting)}
                  {/* {!this.state.selecting && drawButton} */}
               </div>
            </div>
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

export default connect(mapStateToProps, actions)(Player);
