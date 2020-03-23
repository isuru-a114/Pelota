
class Title extends Phaser.Scene {
  constructor () {
    super({key: 'Title', active: false});
  }

  preload(){
    // this.load.audio('bgMusic', ['assets/Game_Menu.mp3']);
    //this.load.audio('bgMusic', ['assets/TownTheme.mp3']);
  }

  create () {


    // const model = new Model();
    // this.modle = { model, bgMusic: null };
    // Game
    this.gameButton = new Button(this, game.config.width/2, game.config.height/2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');

    // Options
    this.optionsButton = new Button(this, game.config.width/2, game.config.height/2, 'blueButton1', 'blueButton2', 'Options', 'Options');

    // Credits
    this.creditsButton = new Button(this, game.config.width/2, game.config.height/2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    // this.model =   this.game.globals.model;
    // if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
    //   this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
    //   this.bgMusic.play();
    //   this.model.bgMusicPlaying = true;
    //   this.game.globals.bgMusic = this.bgMusic;
    // }
  }

  centerButton (gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width/2, config.height/2 - offset * 100, config.width, config.height)
    );
  }

  centerButtonText (gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton
    );
  }
};
