import React from 'react';

export default class Card extends React.Component{
   cardValue(value){
      switch(value){
         case 10:
            return 'Reverse';
         case 11:
            return 'Skip';
         case 12:
            return 'Draw 2';
         case 13:
            return 'Draw 4';
         case 14:
            return 'Wild';
         default:
            return value;
      }
   }

   render(){
      return (
         <div className="card-component" style={this.props.style}
            onClick={this.props.onClick}>
            <div>{this.props.card.colour}</div>
            <div>{this.cardValue(this.props.card.value)}</div>
         </div>
      );
   }
}
