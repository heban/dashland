import Phaser from 'phaser';

// Assets
import sky from '../assets/sky.png';
import ship from '../assets/ship.png';
import ball from '../assets/ball.png';
import bounceSound from '../assets/crossbow_dryshot.ogg';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  preload() {
    this.load.image('sky', sky);
    this.load.image('ship', ship);
    this.load.image('ball', ball);
    this.load.audio('bounceSound', bounceSound);
  }

  create() {
    // add Sky background sprit
    this.add.image(400, 300, 'sky');

    // Create Player
    this.player = this.physics.add.sprite(100, 250, 'ship');
    this.player.setCollideWorldBounds(true);
    this.player.setImmovable(true);

    // Create ball
    this.ball = this.physics.add.sprite(100, 240, 'ball');
    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(1);
    this.ball.setCircle(25);

    this.ball.setVelocityX(250);
    this.ball.setVelocityY(250);

    this.bounceSound = this.sound.add('bounceSound');

    this.physics.add.collider(this.ball, this.player, () => {
      this.bounceSound.play();
    });

    // Create player animation
    // this.anims.create({
    //   key: 'left',
    //   frames: this.anims.generateFrameNumbers('ship', { start: 0, end: 3 }),
    //   frameRate: 10,
    //   repeat: -1,
    // });

    // this.anims.create({
    //   key: 'turn',
    //   frames: [{ key: 'ship', frame: 4 }],
    //   frameRate: 20,
    // });

    // this.anims.create({
    //   key: 'right',
    //   frames: this.anims.generateFrameNumbers('ship', { start: 5, end: 8 }),
    //   frameRate: 10,
    //   repeat: -1,
    // });

    // set collides between Player and grounds
    // this.physics.add.collider(this.player, this.platforms);
  }

  update() {
    // Create movement controller
    this.cursors = this.input.keyboard.createCursorKeys();
    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-320);
      // this.player.anims.play('left', true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(320);
      // this.player.anims.play('right', true);
    } else {
      this.player.setVelocityY(0);
      // this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-450);
    }
  }
}

export default Game;
