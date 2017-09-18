import React from 'react';

export default class CardDrawTwo extends React.Component{
   render(){
      const colour = this.props.card.colour ? this.props.card.colour : 'gray';
      return(
         <svg className="card-draw-two-component" onClick={this.props.onClick}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.7 243.8">
            <g id="Layer_3">
               <path id="XMLID_5_" className="dt0" d="M146.7 243.8H12c-6.6 0-12-5.4-12-12V12C0 5.4 5.4 0 12 0h134.7c6.6 0 12 5.4 12 12v219.8c0 6.6-5.4 12-12 12z"/>
            </g>
            <g id="Layer_1">
               <path id="XMLID_19_" className="dt1" d="M147.5 79.1c0-37.6-30.4-68-68-68h-68v153.2c0 37.6 30.4 68 68 68h68V79.1z"/>
            </g>
            <g id="Layer_8">
               <g id="XMLID_43_">
                  <g id="XMLID_38_">
                     <text id="XMLID_42_" transform="translate(13.747 35.452)" className="dt2 dt3 dt4">+2</text>
                  </g>
                  <g id="XMLID_32_">
                     <text id="XMLID_36_" transform="translate(15.165 34.035)" className="dt5 dt3 dt4">+2</text>
                  </g>
               </g>
            </g>
            <g id="Layer_9">
               <g id="XMLID_45_">
                  <g id="XMLID_33_">
                     <text id="XMLID_35_" transform="rotate(180 72.547 104.114)" className="dt2 dt3 dt4">+2</text>
                  </g>
                  <g id="XMLID_29_">
                     <text id="XMLID_31_" transform="rotate(180 71.84 104.823)" className="dt5 dt3 dt4">+2</text>
                  </g>
               </g>
            </g>
            <g id="Layer_11">
               <g id="XMLID_51_">
                  <g id="XMLID_119_">
                     <path id="XMLID_120_" className="dt6" d="M78.2 145.4l-19.1 8.2c-6.3 2.7-13.8-.2-16.5-6.5l-18-41.6c-2.7-6.3.2-13.8 6.5-16.5l19.1-8.2c6.3-2.7 13.8.2 16.5 6.5l11.3 26m36 33.9l17.1-43.2c2.4-6.1-.6-13.1-6.7-15.6l-20.4-8c-6.1-2.4-13.1.6-15.6 6.7l-17.1 43.2c-2.4 6.1.6 13.1 6.7 15.6l20.4 8.1c6.1 2.4 13.1-.6 15.6-6.8z"/>
                  </g>
                  <g id="XMLID_112_">
                     <path id="XMLID_113_" className="dt7" d="M80.3 142.5l-19.1 8.2c-6.3 2.7-13.8-.2-16.5-6.5l-18-41.6c-2.7-6.3.2-13.8 6.5-16.5l19.1-8.2c6.3-2.7 13.8.2 16.5 6.5l11.3 26.1m36 33.9l17.1-43.2c2.4-6.1-.6-13.1-6.7-15.6l-20.4-8.1c-6.1-2.4-13.1.6-15.6 6.7l-17.1 43.2c-2.4 6.1.6 13.1 6.7 15.6l20.4 8.1c6.2 2.5 13.2-.6 15.6-6.7z"/>
                  </g>
               </g>
            </g>
         </svg>
      );
   }
}
