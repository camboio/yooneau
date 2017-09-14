import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Hand from './hand';

class AiPlayer extends React.Component{
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
      if(this.playableCard(card)){
         this.props.playCard(this.props.player, card);
      }
      this.props.gameNextPlayer();
   }

   playCard(card){
      if(!this.props.active || !this.playableCard(card)){
         return null;
      }
      const player = this.props.player;
      this.props.playCard(player, card);
      this.props.gameNextPlayer();
   }

   playableCard(card){
      const faceUp = this.props.played;
      if(faceUp.colour == card.colour ||
      faceUp.value == card.value){
         return true;
      }
      return false;
   }

   render(){
      return(
         <div>
            {this.props.player.name}
            {this.props.active ? ' active' : null}
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
