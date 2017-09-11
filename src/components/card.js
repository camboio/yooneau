import React from 'react';

export default class Card extends React.Component{
   constructor(props){
      super(props);

      this.colour = this.props.card.colour;
      this.value = this.props.card.value;

      this.displayName = this.value;
      switch(this.displayName){
         case 10:
            this.displayName = 'Reverse';
            break;
         case 11:
            this.displayName = 'Skip';
            break;
         case 12:
            this.displayName = 'Draw 2';
            break;
         case 13:
            this.displayName = 'Draw 4';
            break;
         case 14:
            this.displayName = 'Wild';
            break;
      }
   }

   render(){
      return (
         <div className="card-component">
            <div>{this.colour}</div>
            <div>{this.displayName}</div>
         </div>
      );
   }
}
