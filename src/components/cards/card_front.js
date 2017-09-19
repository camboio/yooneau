import React from 'react';

export default class CardBack extends React.Component{
   render(){
      const value = this.props.card.value;
      const colour = this.props.card.colour ? this.props.card.colour : 'gray';
      return(
         <svg className="card-front-component" onClick={this.props.onClick}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.7 243.8">
            <g id="Layer_3">
               <path id="XMLID_5_" className="c0" d="M146.7 243.8H12c-6.6 0-12-5.4-12-12V12C0 5.4 5.4 0 12 0h134.7c6.6 0 12 5.4 12 12v219.8c0 6.6-5.4 12-12 12z"/>
            </g>
            <g id="Layer_1">
               <path id="XMLID_19_" className={colour} d="M147.5 79.1c0-37.6-30.4-68-68-68h-68v153.2c0 37.6 30.4 68 68 68h68V79.1z"/>
            </g>
            <g id="Layer_7">
               <g id="XMLID_2_">
                  <g id="XMLID_49_">
                     <text id="XMLID_51_" transform="translate(43.676 160.88)" className="front2 front3 front4">{value}</text>
                  </g>
                  <g id="XMLID_39_">
                     <text id="XMLID_47_" transform="translate(46.51 155.212)" className="front5 front3 front4">{value}</text>
                  </g>
               </g>
            </g>
            <g id="Layer_8">
               <g id="XMLID_43_">
                  <g id="XMLID_42_">
                     <text id="XMLID_46_" transform="translate(13.747 35.452)" className="front6 front3 front7">{value}</text>
                  </g>
                  <g id="XMLID_34_">
                     <text id="XMLID_38_" transform="translate(15.165 34.035)" className="front8 front3 front7">{value}</text>
                  </g>
               </g>
            </g>
            <g id="Layer_9">
               <g id="XMLID_45_">
                  <g id="XMLID_35_">
                     <text id="XMLID_37_" transform="rotate(180 72.547 104.114)" className="front6 front3 front7">{value}</text>
                  </g>
                  <g id="XMLID_31_">
                     <text id="XMLID_33_" transform="rotate(180 71.84 104.823)" className="front8 front3 front7">{value}</text>
                  </g>
               </g>
            </g>
         </svg>
      );
   }
}
