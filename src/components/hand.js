import React from 'react';
import { DropTarget } from 'react-dnd';

import Card from './card';

const handTarget = {
   drop(props){
      props.draw();
      // console.log('drop');
   }
}

function collect(connect, monitor){
   return {
      connectDropTarget: connect.dropTarget()
   };
}

class Hand extends React.Component{
   render(){
      const { connectDropTarget } = this.props;
      const cards = this.props.cards.map((card, index) => {
         const playable = this.props.playable ? this.props.playable(card) : false;
         return(
            <Card card={card} key={index}
               back={this.props.backs} onClick={this.props.play}
               playable={playable}/>
         );
      });
      return connectDropTarget(
         <div className="hand-component">
            {cards}
         </div>
      );
   }
}

export default DropTarget('draggable card', handTarget, collect)(Hand);
