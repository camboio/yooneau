import React from 'react';

import Card from './card';

export default class Hand extends React.Component{
   displayCards(){
      return this.props.cards.map((card, index) => {
         const style = this.props.playable(card) ? {minWidth: '75px', textDecoration: 'underline'} : {minWidth: '75px'};
         return <Card key={index} style={style} card={card}
         onClick={(e) => {
            this.props.play(card);
         }} >
         {`${card.colour} ${card.value}`}
      </Card>
      });
   }

   render(){
      return (
         <div className="hand-component">
            Hand:
            <div style={{display: 'flex'}}>
               {this.displayCards()}
            </div>
         </div>
      );
   }
}
