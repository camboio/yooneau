import React from 'react';

import Card from './card';

export default class PlayedCards extends React.Component{
   displayPlayedCards(){
      let pc = [...this.props.cards];
      pc.reverse();
      const cards = pc.map((card, index) => <Card key={index} card={card} />);
      const amount = cards.length > 5 ? 5 : cards.length;
      let stack = [];
      for(let i = 0; i < amount; i++){
         stack.unshift(cards[i]);
      }
      return stack;
   }

   render(){
      const cards = this.displayPlayedCards();
      return (
         <div className="played-cards-component">
            {cards && cards}
         </div>
      );
   }
}
