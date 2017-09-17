import React from 'react';

import Card from './card';
import CardBack from './cards/card_back';
import CardFront from './cards/card_front';

export default class Hand extends React.Component{
   displayCards(){
      if(this.props.backs){
         return this.props.cards.map((card, index) => <CardBack key={index}/>);
      }else{
         return this.props.cards.map((card, index) => {
            return <CardFront key={index} card={card}
            onClick={(e) => {
               this.props.play(card);
            }} />
         });
      }
   }

   render(){
      return(
         <div className="hand-component">
            <div style={{display: 'flex'}}>
               {this.displayCards()}
            </div>
         </div>
      );
   }
}
