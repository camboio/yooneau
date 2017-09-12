import React from 'react';

export default class Hand extends React.Component{
   displayCards(){
      return this.props.cards.map((card, index) => {
         const style = this.props.playable(card) ? {minWidth: '75px', textDecoration: 'underline'} : {minWidth: '75px'};
         return <div key={index} style={style}
         onClick={(e) => {
            this.props.play(card);
         }}>
            {`${card.colour} ${card.value}`}
         </div>
      });
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
