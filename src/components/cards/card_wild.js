import React from 'react';

export default class CardWild extends React.Component{
   render(){
      const colour = this.props.card.colour ? this.props.card.colour : 'gray';
      return(
         <svg className="card-wild-component" onClick={this.props.onClick}
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
                     <text id="XMLID_42_" transform="translate(13.747 35.452)" className="wild1 wild2 wild3">W</text>
                  </g>
                  <g id="XMLID_32_">
                     <text id="XMLID_36_" transform="translate(15.165 34.035)" className="wild4 wild2 wild3">W</text>
                  </g>
               </g>
            </g>
            <g id="Layer_9">
               <g id="XMLID_45_">
                  <g id="XMLID_33_">
                     <text id="XMLID_35_" transform="rotate(180 72.547 104.114)" className="wild1 wild2 wild3">W</text>
                  </g>
                  <g id="XMLID_29_">
                     <text id="XMLID_31_" transform="rotate(180 71.84 104.823)" className="wild4 wild2 wild3">W</text>
                  </g>
               </g>
            </g>
            <g id="Layer_13">
               <g id="XMLID_53_">
                  <g id="XMLID_131_">
                     <path id="XMLID_136_" d="M76.393 67.488l26.94 26.94-26.94 26.94-26.94-26.94z"/>
                  </g>
                  <g id="XMLID_114_">
                     <path id="XMLID_130_" className="wild5" d="M77.857 66.142l26.94 26.94-26.94 26.94-26.94-26.94z"/>
                  </g>
               </g>
               <g id="XMLID_54_">
                  <g id="XMLID_124_">
                     <path id="XMLID_132_" d="M105.8 150.9l-26.9-27L105.8 97z"/>
                  </g>
                  <g id="XMLID_113_">
                     <path id="XMLID_118_" className="wild6" d="M107.2 149.4l-26.9-26.9 26.9-26.9z"/>
                  </g>
               </g>
               <g id="XMLID_60_">
                  <g id="XMLID_116_">
                     <path id="XMLID_134_" d="M47 97l26.9 26.9-26.9 27z"/>
                  </g>
                  <g id="XMLID_111_">
                     <path id="XMLID_115_" className="wild7" d="M48.4 95.6l26.9 26.9-26.9 26.9z"/>
                  </g>
               </g>
               <g id="XMLID_55_">
                  <g id="XMLID_125_">
                     <path id="XMLID_135_" d="M76.358 126.373l26.94 26.94-26.94 26.94-26.94-26.94z"/>
                  </g>
                  <g id="XMLID_108_">
                     <path id="XMLID_123_" className="wild8" d="M77.822 125.027l26.94 26.94-26.94 26.94-26.94-26.94z"/>
                  </g>
               </g>
            </g>
         </svg>
      );
   }
}
