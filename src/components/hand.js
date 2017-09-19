import React from 'react';

import Card from './card';

export default class Hand extends React.Component{
   render(){
      const cards = this.props.cards.map((card, index) => {
         const playable = this.props.playable ? this.props.playable(card) : false;
         const obj = {
            card,
            key: index,
            back: this.props.backs,
            onClick: this.props.play,
            playable
         }
         return <Card {...obj} />;
      });
      return (
         <div className="hand-component">
            {cards}
         </div>
      );
   }
}
