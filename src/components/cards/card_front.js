import React from 'react';

export default class CardBack extends React.Component{
   cardValue(value){
      switch(value){
         case 10:
            return 'R';
         case 11:
            return 'S';
         case 12:
            return '+';
         case 13:
            return '+';
         case 14:
            return 'W';
         default:
            return value;
      }
   }

   render(){
      const value = this.props.card.value ? this.cardValue(this.props.card.value) : 0;
      const colour = this.props.card.colour ? this.props.card.colour : 'gray';
      return(
         <svg className="card-front-component"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.7 243.8"
            onClick={this.props.onClick}>
            <g id="Layer_3">
               <path id="XMLID_2_" className="front0" d="M146.7 243.8H12c-6.6 0-12-5.4-12-12V12C0 5.4 5.4 0 12 0h134.7c6.6 0 12 5.4 12 12v219.8c0 6.6-5.4 12-12 12z"/>
            </g>
            <g id="Layer_1">
               <path id="XMLID_19_" className={colour} d="M11.5 79.1c0-37.6 30.4-68 68-68h68v153.2c0 37.6-30.4 68-68 68h-68V79.1z"/>
            </g>
            <g id="Layer_2">
               <text id="XMLID_1_" transform="translate(11.276 29.866)" className="front2 front3 front4">
                  {value}
               </text>
               <text id="XMLID_3_" transform="rotate(180 73.356 106.43)" className="front2 front3 front4">
                  {value}
               </text>
               <text id="XMLID_7_" transform="translate(47.16 163.337)" className="front5 front3 front6">
                  {value}
               </text>
            </g>
            <g id="Layer_4">
               <text id="XMLID_5_" transform="translate(11.01 29.6)" className={`${colour} front3 front4`}>
                  {value}
               </text>
               <text id="XMLID_6_" transform="rotate(180 73.563 106.5)" className={`${colour} front3 front4`}>
                  {value}
               </text>
               <text id="XMLID_8_" transform="translate(46.16 162.31)" className="front0 front3 front6">
                  {value}
               </text>
            </g>
         </svg>
      );
   }
}
