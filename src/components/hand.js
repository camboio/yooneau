import React from 'react';

export default class Hand extends React.Component{
   displayCards(){
      return this.props.cards.map((card, index) => <div key={index} style={{minWidth: '75px'}}>{`${card.colour} ${card.value}`}</div>);
   }

   render(){
      return (
         <div>
            Hand:
            <div style={{display: 'flex'}}>
               {this.displayCards()}
            </div>
         </div>
      );
   }
}
