import React, { Component } from 'react';
import * as PIXI from 'pixi.js'

export default class Canvas extends Component {
        constructor( props ) {
            super(props);

            //bind our animate function
            this.animate = this.animate.bind(this);
        }

        /**
        * In this case, componentDidMount is used to grab the canvas container ref, and
        * and hook up the PixiJS renderer
        **/
        componentDidMount() {
           //Setup PIXI Canvas in componentDidMount
           this.renderer = PIXI.autoDetectRenderer(768,432);
           this.refs.gameCanvas.appendChild(this.renderer.view);

           // create the root of the scene graph
           this.stage = new PIXI.Container();
           this.stage.width = 1920;
           this.stage.height = 1080;

           PIXI.loader.add('inc/back.png')
           .load(() => {
             let sprite = new PIXI.Sprite(
                PIXI.loader.resources['inc/back.png'].texture
             );
             sprite.width = 661;
             sprite.height = 1016;
             this.stage.addChild(sprite);
          })

           //start the game
           this.animate();
        }
        /**
        * Animation loop for updating Pixi Canvas
        **/
        animate() {
            // render the stage container
            this.renderer.render(this.stage);
            this.frame = requestAnimationFrame(this.animate);
        }

        /**
        * Render our container that will store our PixiJS game canvas. Store the ref
        **/
        render() {
            return (
                    <div className="game-canvas-container" ref="gameCanvas">
                    </div>
            );
        }
}
