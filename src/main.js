// Code Practice: Scrolling States
// Name: Blake Warkenton
// Date: 9 February 2024

'use strict'

const config = {
    parent: 'phaser-game',  // for info text
    // type: Phaser.WEBGL,     // for tinting
    width: 400,
    height: 300,
    pixelArt: true,
    zoom: 2,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Load, Play ]
}

const game = new Phaser.Game(config)