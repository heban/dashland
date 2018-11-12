import Phaser from 'phaser';

// Plugins
import 'phaser-plugin-game-scale';

// import constants from './constants';

const config = {
  type: Phaser.AUTO,
  width: (window.innerWidth * window.devicePixelRatio) / 4,
  height: (window.innerHeight * window.devicePixelRatio) / 4,
  antialias: true,
  autoResize: false,
  resolution: 4,
  canvas: document.querySelector('#dashland-canvas'),
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 10,
      },
      debug: false,
    },
  },
  plugins: {
    global: [{
      key: 'GameScalePlugin',
      plugin: Phaser.Plugins.GameScalePlugin,
      mapping: 'gameScale',
      data: {
        mode: 'fit',
        resizeCameras: true,
      },
    }],
  },
};

export default config;
