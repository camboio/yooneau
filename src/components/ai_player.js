import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Hand from './hand';

class AiPlayer extends React.Component{
   render(){
      return(
         <div>
            {this.props.player.name}
            <Hand cards={this.props.player.cards}/>
            <div className="btn btn-primary"
               onClick={(e) => {
                  const card = this.props.deck.unplayedCards[0];
                  this.props.drawCard(this.props.player, card);
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
