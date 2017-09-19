import React from 'react';
import { DragSource } from 'react-dnd';

import Card from './card';

const cardSource = {
   beginDrag(props){
      return {card: props.card};
   }
}

function collect(connect, monitor){
   return {
      connectDragSource: connect.dragSource()
   }
}

class DraggableCard extends React.Component{
   render(){
      const { connectDragSource } = this.props;
      return connectDragSource(
         <div>
            <Card {...this.props} />
         </div>
      );
   }
}

export default DragSource('draggable card', cardSource, collect)(DraggableCard);
