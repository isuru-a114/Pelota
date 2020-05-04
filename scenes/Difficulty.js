class Difficulty extends Phaser.Scene {

    constructor() {
        super({ key: "Difficulty", active: false });
    }

    preload() {
        this.load.image("bgDifficulty", "assets/img/Difficulity.png");

        this.load.image("btn_easy", "assets/img/btn_easy_new.png");
        this.load.image("btn_medium", "assets/img/btn_medium_new.png");
        this.load.image("btn_hard", "assets/img/btn_hard_new.png");

        this.load.image("btn_easy_hover", "assets/img/btn_easy_hover_new.png");
        this.load.image("btn_medium_hover", "assets/img/btn_medium_hover_new.png");
        this.load.image("btn_hard_hover", "assets/img/btn_hard_hover_new.png");

    }

    create() {
        this.cameras.main.fadeFrom(2000, Phaser.Math.Between(50, 255), Phaser.Math.Between(50, 255), Phaser.Math.Between(50, 255));
        this.selected_button = 'Easy';

        this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'bgDifficulty');
        this.image.displayHeight = game.config.height;
        this.image.displayWidth = game.config.width;



        this.btn_easy = this.add.sprite(game.config.width / 2, game.config.height / 3, 'btn_easy_hover', 0).setInteractive();
        this.btn_easy.displayHeight = game.config.height / 12;
        this.btn_easy.displayWidth = game.config.width / 3.8;

        this.btn_medium = this.add.sprite(game.config.width / 2, game.config.height / 2, 'btn_medium', 0).setInteractive();
        this.btn_medium.displayHeight = game.config.height / 12;
        this.btn_medium.displayWidth = game.config.width / 3.8;

        this.btn_hard = this.add.sprite(game.config.width / 2, game.config.height / 1.5, 'btn_hard', 0).setInteractive();
        this.btn_hard.displayHeight = game.config.height / 12;
        this.btn_hard.displayWidth = game.config.width / 3.8;
        // this.easy = this.add.text(game.config.width/2, game.config.height/3, "Easy").setFontSize(35).setFontFamily("Arial").setOrigin(0.5);
        // this.easy.setOrigin(0.5);
        //
        // this.easy = this.add.text(game.config.width/2, game.config.height/2, "Medium").setFontSize(35).setFontFamily("Arial").setOrigin(0.5);
        // this.easy.setOrigin(0.5);
        //
        // this.easy = this.add.text(game.config.width/2, game.config.height/1.5, "Hard").setFontSize(35).setFontFamily("Arial").setOrigin(0.5);
        // this.easy.setOrigin(0.5);
        //
        // this.graphics = this.add.graphics({ fillStyle: { color: 0x0000ff } });
        // this.graphics.fillRoundedRect(game.config.width/4, game.config.height/3.4,game.config.width/2,game.config.width/8,32);
        // this.graphics.setAlpha(0.3);
        this.about = this.add.text(game.config.width - game.config.width * 10 / 100, game.config.height - game.config.height * 5 / 100, "Back").setFontSize(30).setFontFamily("Arial").setOrigin(0.5);

        this.input.keyboard.on('keyup', function (e) {
            if (e.key == "SoftRight") {
                //console.log("soft right key");
                //this.goToContactScene();
                this.goBackScene()

            }
        }, this);

        this.input.keyboard.on('keyup', function (e) {
            if (e.key == "Enter") {
                // console.log("enter key");
                this.callButton();
                //this.callMenuButton();
            }
        }, this);

        this.upArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.downArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        //this.key_enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.back_space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.upArrow)) {
            // console.log("UP CLICK");
            this.moveUp()
        }

        if (Phaser.Input.Keyboard.JustDown(this.downArrow)) {
            //console.log("DOWN CLICK");
            this.moveDown()
        }

        // if (Phaser.Input.Keyboard.JustDown(this.key_enter)) {
        //     console.log("ENTER CLICK");
        //     this.callButton();
        // }
        if (Phaser.Input.Keyboard.JustDown(this.back_space)) {
            //console.log("back CLICK");
            this.goBackScene()

        }
    }
    goBackScene() {
        //console.log("clicked")
        this.scene.transition({
            target: "Menu",
            moveAbove: true,
            duration: 100,
        })
        // this.scene.switch("Menu");
    }

    moveUp() {
        switch (this.selected_button) {
            case "Easy":
                this.btn_hard.destroy();
                this.btn_hard = this.add.sprite(game.config.width / 2, game.config.height / 1.5, 'btn_hard_hover', 0).setInteractive();
                this.btn_hard.displayHeight = game.config.height / 12;
                this.btn_hard.displayWidth = game.config.width / 3.8;

                this.btn_easy.destroy();
                this.btn_easy = this.add.sprite(game.config.width / 2, game.config.height / 3, 'btn_easy', 0).setInteractive();
                this.btn_easy.displayHeight = game.config.height / 12;
                this.btn_easy.displayWidth = game.config.width / 3.8;
                this.selected_button = "Hard"
                break;
            case "Medium":

                this.btn_medium.destroy();
                this.btn_medium = this.add.sprite(game.config.width / 2, game.config.height / 2, 'btn_medium', 0).setInteractive();
                this.btn_medium.displayHeight = game.config.height / 12;
                this.btn_medium.displayWidth = game.config.width / 3.8;

                this.btn_easy.destroy();
                this.btn_easy = this.add.sprite(game.config.width / 2, game.config.height / 3, 'btn_easy_hover', 0).setInteractive();
                this.btn_easy.displayHeight = game.config.height / 12;
                this.btn_easy.displayWidth = game.config.width / 3.8;
                this.selected_button = "Easy"
                break;
            case "Hard":
                this.btn_hard.destroy();
                this.btn_hard = this.add.sprite(game.config.width / 2, game.config.height / 1.5, 'btn_hard', 0).setInteractive();
                this.btn_hard.displayHeight = game.config.height / 12;
                this.btn_hard.displayWidth = game.config.width / 3.8;

                this.btn_medium.destroy();
                this.btn_medium = this.add.sprite(game.config.width / 2, game.config.height / 2, 'btn_medium_hover', 0).setInteractive();
                this.btn_medium.displayHeight = game.config.height / 12;
                this.btn_medium.displayWidth = game.config.width / 3.8;

                this.selected_button = "Medium"
                break;
        }
    }

    moveDown() {
        switch (this.selected_button) {
            case "Easy":

                this.btn_easy.destroy();
                this.btn_easy = this.add.sprite(game.config.width / 2, game.config.height / 3, 'btn_easy', 0).setInteractive();
                this.btn_easy.displayHeight = game.config.height / 12;
                this.btn_easy.displayWidth = game.config.width / 3.8;

                this.btn_medium.destroy();
                this.btn_medium = this.add.sprite(game.config.width / 2, game.config.height / 2, 'btn_medium_hover', 0).setInteractive();
                this.btn_medium.displayHeight = game.config.height / 12;
                this.btn_medium.displayWidth = game.config.width / 3.8;
                this.selected_button = "Medium"
                break;
            case "Medium":
                this.btn_medium.destroy();
                this.btn_medium = this.add.sprite(game.config.width / 2, game.config.height / 2, 'btn_medium', 0).setInteractive();
                this.btn_medium.displayHeight = game.config.height / 12;
                this.btn_medium.displayWidth = game.config.width / 3.8;

                this.btn_hard.destroy();
                this.btn_hard = this.add.sprite(game.config.width / 2, game.config.height / 1.5, 'btn_hard_hover', 0).setInteractive();
                this.btn_hard.displayHeight = game.config.height / 12;
                this.btn_hard.displayWidth = game.config.width / 3.8;
                this.selected_button = "Hard"
                break;
            case "Hard":
                this.btn_hard.destroy();
                this.btn_hard = this.add.sprite(game.config.width / 2, game.config.height / 1.5, 'btn_hard', 0).setInteractive();
                this.btn_hard.displayHeight = game.config.height / 12;
                this.btn_hard.displayWidth = game.config.width / 3.8;

                this.btn_easy.destroy();
                this.btn_easy = this.add.sprite(game.config.width / 2, game.config.height / 3, 'btn_easy_hover', 0).setInteractive();
                this.btn_easy.displayHeight = game.config.height / 12;
                this.btn_easy.displayWidth = game.config.width / 3.8;
                this.selected_button = "Easy"
                break;
        }
    }

    callButton() {
        switch (this.selected_button) {
            case "Easy":
                //console.log("Play SELECT");
                game.globals.gameDiffculty = "EasyPlayGame";
                this.scene.transition({
                    target: "CountDown",
                    moveAbove: true,
                    duration: 200,
                });
                // this.scene.switch("CountDown");
                break;
            case "Medium":
                //console.log("ScoreScene SELECT");
                game.globals.gameDiffculty = "PlayGame";
                this.scene.transition({
                    target: "CountDown",
                    moveAbove: true,
                    duration: 200,
                });
                // this.scene.switch("CountDown");
                break;
            case "Hard":
                //console.log("Option SELECT");
                game.globals.gameDiffculty = "HardPlayGame";
                this.scene.transition({
                    target: "CountDown",
                    moveAbove: true,
                    duration: 200,
                });
                // this.scene.switch("CountDown");
                break;
            default:
        }
    }
}