import Phaser from 'phaser';

// Plugins
import 'phaser-plugin-game-scale';

import constants from './constants';

const config = {
  type: Phaser.AUTO,
  width: constants.WIDTH,
  height: constants.HEIGHT,
  canvas: document.querySelector('#dashland-canvas'),
  antialias: true,
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