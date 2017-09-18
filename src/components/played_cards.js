import React from 'react';

import Card from './card';

export default class PlayedCards extends React.Component{
   displayPlayedCards(){
      let pc = [...this.props.cards];
      pc.reverse();
      return pc.map((card, index) => <div key={index} style={{minWidth: '75px'}}>{`${card.colour} ${card.value}`}</div>);
   }

   render(){
      const card = [...this.props.cards].pop();
      return (
         <div className="played-cards-component">
            <div style={{display: 'flex'}}>
               {/* {card && <div style={{minWidth: '75px'}}>{`${card.colour} ${card.value}`}</div>} */}
               {card && <Card card={card} />}
            </div>
         </div>
      );
   }
}
