import React from 'react';

export default class PlayedCards extends React.Component{
   displayPlayedCards(){
      let pc = [...this.props.cards];
      pc.reverse();
      return pc.map((card, index) => <div key={index} style={{minWidth: '75px'}}>{`${card.colour} ${card.value}`}</div>);
   }

   render(){
      return (
         <div>
            played cards:
            <div style={{display: 'flex'}}>
               {this.displayPlayedCards()}
            </div>
         </div>
      );
   }
}
