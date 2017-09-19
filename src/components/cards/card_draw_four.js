import React from 'react';

export default class CardDrawFour extends React.Component{
   render(){
      const colour = this.props.card.colour ? this.props.card.colour : 'gray';
      return(
         <svg className="card-draw-four-component" onClick={this.props.onClick}
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
                     <text id="XMLID_42_" transform="translate(13.747 35.452)" className="df1 df2 df3">+4</text>
                  </g>
                  <g id="XMLID_32_">
                     <text id="XMLID_36_" transform="translate(15.165 34.035)" className="df4 df2 df3">+4</text>
                  </g>
               </g>
            </g>
            <g id="Layer_9">
               <g id="XMLID_45_">
                  <g id="XMLID_33_">
                     <text id="XMLID_35_" transform="rotate(180 72.547 104.114)" className="df1 df2 df3">+4</text>
                  </g>
                  <g id="XMLID_29_">
                     <text id="XMLID_31_" transform="rotate(180 71.84 104.823)" className="df4 df2 df3">+4</text>
                  </g>
               </g>
            </g>
            <g id="Layer_13">
               <g id="XMLID_53_">
                  <g id="XMLID_131_">
                     <path id="XMLID_136_" d="M76.393 67.488l26.94 26.94-26.94 26.94-26.94-26.94z"/>
                  </g>
                  <g id="XMLID_114_">
                     <path id="XMLID_130_" className="df5" d="M77.857 66.142l26.94 26.94-26.94 26.94-26.94-26.94z"/>
                  </g>
               </g>
               <g id="XMLID_54_">
                  <g id="XMLID_124_">
                     <path id="XMLID_132_" d="M105.8 150.9l-26.9-27L105.8 97z"/>
                  </g>
                  <g id="XMLID_113_">
                     <path id="XMLID_118_" className="df6" d="M107.2 149.4l-26.9-26.9 26.9-26.9z"/>
                  </g>
               </g>
               <g id="XMLID_60_">
                  <g id="XMLID_116_">
                     <path id="XMLID_134_" d="M47 97l26.9 26.9-26.9 27z"/>
                  </g>
                  <g id="XMLID_111_">
                     <path id="XMLID_115_" className="df7" d="M48.4 95.6l26.9 26.9-26.9 26.9z"/>
                  </g>
               </g>
               <g id="XMLID_55_">
                  <g id="XMLID_125_">
                     <path id="XMLID_135_" d="M76.358 126.373l26.94 26.94-26.94 26.94-26.94-26.94z"/>
                  </g>
                  <g id="XMLID_108_">
                     <path id="XMLID_123_" className="df8" d="M77.822 125.027l26.94 26.94-26.94 26.94-26.94-26.94z"/>
                  </g>
               </g>
            </g>
            <g id="Layer_11">
               <g id="XMLID_51_">
                  <path id="XMLID_88_" className="df9" d="M80.3 142.5l-19.1 8.2c-6.3 2.7-13.8-.2-16.5-6.5l-18-41.6c-2.7-6.3.2-13.8 6.5-16.5l19.1-8.2c6.3-2.7 13.8.2 16.5 6.5l11.3 26.1m36 33.9l17.1-43.2c2.4-6.1-.6-13.1-6.7-15.6l-20.4-8.1c-6.1-2.4-13.1.6-15.6 6.7l-17.1 43.2c-2.4 6.1.6 13.1 6.7 15.6l20.4 8.1c6.2 2.5 13.2-.6 15.6-6.7z"/>
               </g>
            </g>
            <g id="Layer_11_copy">
               <g id="XMLID_49_">
                  <g id="XMLID_150_">
                     <path id="XMLID_151_" className="df10" d="M78.2 145.4l-19.1 8.2c-6.3 2.7-13.8-.2-16.5-6.5l-18-41.6c-2.7-6.3.2-13.8 6.5-16.5l19.1-8.2c6.3-2.7 13.8.2 16.5 6.5l11.3 26m36 33.9l17.1-43.2c2.4-6.1-.6-13.1-6.7-15.6l-20.4-8c-6.1-2.4-13.1.6-15.6 6.7l-17.1 43.2c-2.4 6.1.6 13.1 6.7 15.6l20.4 8.1c6.1 2.4 13.1-.6 15.6-6.8z"/>
                  </g>
                  <g id="XMLID_143_">
                     <path id="XMLID_144_" className="df11" d="M80.3 142.5l-19.1 8.2c-6.3 2.7-13.8-.2-16.5-6.5l-18-41.6c-2.7-6.3.2-13.8 6.5-16.5l19.1-8.2c6.3-2.7 13.8.2 16.5 6.5l11.3 26.1m36 33.9l17.1-43.2c2.4-6.1-.6-13.1-6.7-15.6l-20.4-8.1c-6.1-2.4-13.1.6-15.6 6.7l-17.1 43.2c-2.4 6.1.6 13.1 6.7 15.6l20.4 8.1c6.2 2.5 13.2-.6 15.6-6.7z"/>
                  </g>
               </g>
            </g>
         </svg>
      );
   }
}
