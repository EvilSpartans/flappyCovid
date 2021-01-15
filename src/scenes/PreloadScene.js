
import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {

    constructor () {
        super('PreloadScene');
    }

    preload () {
        this.load.image('sky', 'assets/sky2.png');
        this.load.image('bird', 'assets/covid.png');
        // this.load.spritesheet('bird', 'assets/covid.png', {
        //     frameWidth: 25, frameHeight: 24
        // });
        this.load.image('pipe', 'assets/vaccin.png');
        this.load.image('pipe2', 'assets/vaccin2.png');
        this.load.image('pause', 'assets/pause.png');
        this.load.image('back', 'assets/back.png');
    }

    create () {
        this.scene.start('MenuScene');
    }
}

export default PreloadScene;
