import React from 'react';

import CardBack from './cards/card_back';
import CardFront from './cards/card_front';
import CardReverse from './cards/card_reverse';
import CardSkip from './cards/card_skip';
import CardWild from './cards/card_wild';
import CardDrawFour from './cards/card_draw_four';
import CardDrawTwo from './cards/card_draw_two';

export default class Card extends React.Component{
   constructor(props){
      super(props);

      this.state = { enter: true, exit: false };

      this.onClick = this.onClick.bind(this);
   }

   componentDidMount(){
      setTimeout(() => this.setState({enter: false}), 500);
   }

   cardValue(card){
      switch(card.value){
         case 10:
            return <CardReverse card={card} onClick={this.onClick} />;
         case 11:
            return <CardSkip card={card} onClick={this.onClick} />;
         case 12:
            return <CardDrawTwo card={card} onClick={this.onClick} />;
         case 13:
            return <CardDrawFour card={card} onClick={this.onClick} />;
         case 14:
            return <CardWild card={card} onClick={this.onClick} />
         default:
            return <CardFront card={card} onClick={this.onClick} />;
      }
   }

   onClick(e){
      this.props.onClick ? this.props.onClick(this.props.card) : null;
   }

   className(){
      let name = 'card-component';
      name += this.props.playable ? ' playable' : '';
      name += this.state.enter ? ' enter' : '';
      name += this.state.exit ? ' exit' : '';
      return name;
   }

   render(){
      const back = (this.props.back || this.state.enter);
      return (
         <div className={this.className()}>
            {!back && this.cardValue(this.props.card)}
            {back && <CardBack />}
         </div>
      );
   }
}
