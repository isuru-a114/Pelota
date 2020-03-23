// this class for asserts initialization
class Preload extends Phaser.Scene {
    constructor() {
        super({key: 'Preload', active: false});
    }

    init() {
        // Globals
        this.CONFIG = this.sys.game.CONFIG;
    }

    preload() {
        var progressBar = this.add.graphics();

        this.text = this.add.text(this.CONFIG.centerX/4, this.CONFIG.centerY/2, 'Loading Game');
        this.text.setColor('#FFF');
        this.text.setFontSize('80px');

        this.txt_progress = this.add.text(this.CONFIG.centerX/4, this.CONFIG.centerY/2 + 80,'Loading .... ');
        this.txt_progress.setColor('#FFF');
        this.txt_progress.setFontSize('80px');

        // update progress bar
        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });
    }

    create() {

        // Go menu
        this.time.addEvent({
            delay: 1000,
            callback: () => {
                this.scene.start('Menu');
            },
            callbackScope: this
        });
    }

}
