import React from 'react';

import Card from './card';

export default class Deck extends React.Component{
   render(){
      return (
         <div className={`deck-component${this.props.active ? ' active':''}`}
            onClick={this.props.onClick}>
            <Card back={true} />
            <Card back={true} />
            <Card back={true} />
            <Card back={true} />
            <Card back={true} />
         </div>
      );
   }
}
