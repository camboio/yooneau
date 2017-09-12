import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Hand from './hand';

class AiPlayer extends React.Component{
   componentWillReceiveProps(nextProps){
      if(nextProps.player.active){
         console.log(`I'm ${nextProps.player.name} and I'm active now!`);
      }
   }

   playCard(card){
      if(!this.props.player.active || !this.playableCard(card)){
         return null;
      }
      const player = this.props.player;
      this.props.playCard(player, card);
      this.props.gameNextPlayer();
   }

   playableCard(card){
      const faceUp = [...this.props.deck.playedCards].pop();
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
            {this.props.player.active ? ' active' : null}
            <Hand cards={this.props.player.cards}
            play={this.playCard.bind(this)}
            playable={this.playableCard.bind(this)} />
            <div className={`btn btn-${this.props.player.active ? 'primary' : 'default'}`}
            onClick={(e) => {
               if(!this.props.player.active){
                  return null;
               }
               const card = this.props.deck.unplayedCards[0];
               this.props.drawCard(this.props.player, card);
               if(this.playableCard(card)){
                  this.props.playCard(this.props.player, card);
               }
               this.props.gameNextPlayer();
            }}>
               draw card
            </div>
         </div>
      );
   }
}

function mapStateToProps(state){
   return {
      deck: state.deck,
      players: state.players
   }
}

export default connect(mapStateToProps, actions)(AiPlayer);
