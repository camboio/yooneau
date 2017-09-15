import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import * as types from '../actions/types';

import Hand from './hand';

class AiPlayer extends React.Component{
   constructor(props){
      super(props);

      this.state = { selecting: null }
   }

   componentWillReceiveProps(nextProps){
      if(nextProps.active){
         console.log(`I'm ${nextProps.player.name} and I'm active now!`);
      }
   }

   drawCard(){
      if(!this.props.active){
         return null;
      }
      const card = this.props.unplayed;
      this.props.drawCard(this.props.player, card);
      if(this.playableCard(card) && card.colour !== "black"){
         this.props.playCard(this.props.player, card);
      }
      this.props.gameEvaluateMove(types.DRAW_CARD);
   }

   playCard(card){
      if(!this.props.active || !this.playableCard(card)){
         return null;
      }
      if(card.colour == "black"){
         this.setState({ selecting: card });
      }else{
         this.props.playCard(this.props.player, card);
         this.props.gameEvaluateMove(types.PLAY_CARD);
      }
   }

   playableCard(card){
      const faceUp = this.props.played;
      if(faceUp && (faceUp.colour == card.colour ||
      faceUp.value == card.value || card.colour == "black")){
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
      this.setState({ selecting: null });
   }

   render(){
      return(
         <div>
            {this.props.player.name}
            {this.props.active ? ' active' : null}
            {this.state.selecting ? this.selectColour(this.state.selecting) : null}
            <Hand cards={this.props.player.cards}
            play={this.playCard.bind(this)}
            playable={this.playableCard.bind(this)} />
            <div className={`btn btn-${this.props.active ? 'primary' : 'default'}`}
            onClick={this.drawCard.bind(this)}>
               draw card
            </div>
         </div>
      );
   }
}

export default connect(null, actions)(AiPlayer);
