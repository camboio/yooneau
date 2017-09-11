import React from 'react';

import Card from './card';

export default class Deck extends React.Component{
   displayDeck(){
      return this.props.cards.map((card, index) => <div key={index} style={{minWidth: '75px'}}>{`${card.colour} ${card.value}`}</div>);
   }

   render(){
      return (
         <div>
            deck:
            <div style={{display: 'flex'}}>
               {this.displayDeck()}
            </div>
         </div>
      );
   }
}
