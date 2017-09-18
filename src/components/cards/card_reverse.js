import React from 'react';

export default class CardReverse extends React.Component{
   render(){
      const colour = this.props.card.colour ? this.props.card.colour : 'gray';
      return(
         <svg className="card-reverse-component" onClick={this.props.onClick}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.7 243.8">
            <g id="Layer_3">
               <path id="XMLID_5_" className="rev0" d="M146.7 243.8H12c-6.6 0-12-5.4-12-12V12C0 5.4 5.4 0 12 0h134.7c6.6 0 12 5.4 12 12v219.8c0 6.6-5.4 12-12 12z"/></g><g id="Layer_1">
               <path id="XMLID_19_" className={colour} d="M147.5 79.1c0-37.6-30.4-68-68-68h-68v153.2c0 37.6 30.4 68 68 68h68V79.1z"/>
            </g>
            <g id="Layer_8">
               <g id="XMLID_43_">
                  <g id="XMLID_38_">
                     <text id="XMLID_42_" transform="translate(13.747 35.452)" className="rev2 rev3 rev4">R</text>
                  </g>
                  <g id="XMLID_32_">
                     <text id="XMLID_36_" transform="translate(15.165 34.035)" className="rev5 rev3 rev4">R</text>
                  </g>
               </g>
            </g>
            <g id="Layer_9">
               <g id="XMLID_45_">
                  <g id="XMLID_33_">
                     <text id="XMLID_35_" transform="rotate(180 72.547 104.114)" className="rev2 rev3 rev4">R</text>
                  </g>
                  <g id="XMLID_29_">
                     <text id="XMLID_31_" transform="rotate(180 71.84 104.823)" className="rev5 rev3 rev4">R</text>
                  </g>
               </g>
            </g>
            <g id="Layer_10">
               <g id="XMLID_46_">
                  <g id="XMLID_101_">
                     <path id="XMLID_105_" d="M63.9 162.2l-40.1-40.1 33.8-.4h69.8v12.6H57.6l18 18-11.7 9.9zM75.3 86l18 18H23.6v12.6h69.8l33.8-.4-40.2-40L75.3 86z"/>
                     <path id="XMLID_102_" className="rev6" d="M63.9 162.2l-40.1-40.1 33.8-.4h69.8v12.6H57.6l18 18-11.7 9.9zM75.3 86l18 18H23.6v12.6h69.8l33.8-.4-40.2-40L75.3 86z"/>
                  </g>
                  <g id="XMLID_94_">
                     <path id="XMLID_98_" className="rev0" d="M65.3 160.8l-40.1-40.1 33.8-.4h69.8V133H59l18 18-11.7 9.8zm11.4-76.2l18 18H25v12.6h69.8l33.8-.4-40.2-40-11.7 9.8z"/>
                     <path id="XMLID_95_" className="rev6" d="M65.3 160.8l-40.1-40.1 33.8-.4h69.8V133H59l18 18-11.7 9.8zm11.4-76.2l18 18H25v12.6h69.8l33.8-.4-40.2-40-11.7 9.8z"/>
                  </g>
               </g>
            </g>
         </svg>
      );
   }
}
