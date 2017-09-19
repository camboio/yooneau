import React from 'react';

export default class CardSkip extends React.Component{
   render(){
      const colour = this.props.card.colour ? this.props.card.colour : 'gray';
      return(
         <svg className="card-skip-component" onClick={this.props.onClick}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.7 243.8">
            <g id="Layer_3">
               <path id="XMLID_5_" className="c0" d="M146.7 243.8H12c-6.6 0-12-5.4-12-12V12C0 5.4 5.4 0 12 0h134.7c6.6 0 12 5.4 12 12v219.8c0 6.6-5.4 12-12 12z"/>
            </g>
            <g id="Layer_1">
               <path id="XMLID_19_" className={colour} d="M147.5 79.1c0-37.6-30.4-68-68-68h-68v153.2c0 37.6 30.4 68 68 68h68V79.1z"/>
            </g>
            <g id="Layer_8">
               <g id="XMLID_43_">
                  <g id="XMLID_38_">
                     <text id="XMLID_42_" transform="translate(13.747 35.452)" className="skip2 skip3 skip4">S</text>
                  </g>
                  <g id="XMLID_32_">
                     <text id="XMLID_36_" transform="translate(15.165 34.035)" className="skip5 skip3 skip4">S</text>
                  </g>
               </g>
            </g>
            <g id="Layer_9">
               <g id="XMLID_45_">
                  <g id="XMLID_33_">
                     <text id="XMLID_35_" transform="rotate(180 72.547 104.114)" className="skip2 skip3 skip4">S</text>
                  </g>
                  <g id="XMLID_29_">
                     <text id="XMLID_31_" transform="rotate(180 71.84 104.823)" className="skip5 skip3 skip4">S</text>
                  </g>
               </g>
            </g>
            <g id="Layer_11">
               <path id="XMLID_50_" className="skip6" d="M116.5 121.7c0 20.6-16.7 37.3-37.3 37.3s-37.3-16.7-37.3-37.3 16.7-37.3 37.3-37.3 37.3 16.7 37.3 37.3zm-76 38.6l38.6-38.6 39.1-42.5"/>
            </g>
            <g id="Layer_11_copy">
               <g id="XMLID_52_">
                  <g id="XMLID_122_">
                     <path id="XMLID_123_" className="skip7" d="M119.3 124.5c0 20.6-16.7 37.3-37.3 37.3s-37.3-16.7-37.3-37.3S61.4 87.2 82 87.2s37.3 16.7 37.3 37.3zm-75.9 38.6L82 124.5 121 82"/>
                  </g>
                  <g id="XMLID_115_">
                     <path id="XMLID_116_" className="skip8" d="M116.5 121.7c0 20.6-16.7 37.3-37.3 37.3s-37.3-16.7-37.3-37.3 16.7-37.3 37.3-37.3 37.3 16.7 37.3 37.3zm-76 38.6l38.6-38.6 39.1-42.5"/>
                  </g>
               </g>
            </g>
         </svg>
      );
   }
}
