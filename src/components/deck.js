import React from 'react';

import Card from './card';
import CardBack from './cards/card_back';

export default class Deck extends React.Component{
   displayDeck(){
      return this.props.cards.map((card, index) => <div key={index} style={{minWidth: '75px'}}>{`${card.colour} ${card.value}`}</div>);
   }

   render(){
      return (
         <div className="deck-component">
            {/* deck: {this.props.cards.length}
            <div style={{display: 'flex'}}>
               {this.displayDeck()}
            </div> */}
            <CardBack />
         </div>
      );
   }
}
