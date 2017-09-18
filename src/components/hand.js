import React from 'react';

import Card from './card';


export default class Hand extends React.Component{
   render(){
      const cards = this.props.cards.map((card, index) => {
         return(
            <Card key={index} card={card}
               back={this.props.backs} onClick={this.props.play} />
         );
      });
      return(
         <div className="hand-component">
            {cards}
         </div>
      );
   }
}
