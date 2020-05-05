// the game itself
var game;



// global game options
var gameOptions = {

    // world gravity
    gravity: 4,

    // ball horizontal speed
    ballSpeed: 4,

    // jump force
    jumpForce: 25,

    // amount of bars each wall is divided in
    bars: 2,

    // array with the colors to pick from
    barColors: [0x1abc9c, 0x2980b9, 0x9b59b6, 0xf1c40f, 0xc0392b, 0xecf0f1]
}

// constants used to pass "LEFT" and "RIGHT" as arguments rather than "0" and "1"
const LEFT = 0;
const RIGHT = 1;
var score = 0;
var scoreText;
var isLevelAchieved = false;
var levelText;
var level = 1;

// function to be executed when the windows has loaded
window.onload = function () {

    // getKaiAd({
    //     publisher: 'ca24f2d0-de89-4c1a-80c4-51e14d317000',
    //     app: 'Pelota',
    //     slot: 'Pelota',
    //     onerror: err => console.error('Custom catch:', err),
    //     onready: ad => {
    //         // Ad is ready to be displayed
    //         // calling 'display' will display the ad
    //         ad.call('display')
    //     }
    // })

    // object containing configuration options
    var gameConfig = {

        // render type: let the game decide if CANVAS of WEBGL
        type: Phaser.AUTO,

        // width of the game, in pixels
        width: 480,

        // height of the game, in pixels
        height: 640,

        // background color (black)
        backgroundColor: 0x1c0241,

        // scene to play
        // scene: playGame,

        // physics settings
        physics: {

            // we are using Matter JS
            default: "matter",
            matter: {
                debug: false,
                // gravity settings
                gravity: {
                    x: 0,
                    y: gameOptions.gravity
                }
            }
        },
        url: '',
        pixelArt: true,
        

        scene: [Boot,
            Preloader,
            ScoreScene,
            Title,
            Options,
            PlayGame,
            Menu,
            GameOver,
            HelpScene,
            ContactScene,
            OptionScene,
            SoundsScene,
            Difficulty,
            CountDown,
            EasyPlayGame,
            HardPlayGame,
            IntroductionScene]
    }

    // game creation
    game = new Phaser.Game(gameConfig);

    game.URL = '';

    game.CONFIG = {
        width: gameConfig.width,
        height: gameConfig.height,
        centerX: Math.round(0.5 * gameConfig.width),
        centerY: Math.round(0.5 * gameConfig.height)
    };


    game.globals = {
        model: new Model(),
        bgMusic: null,
        score: null,
        gameDiffculty: null,
        level: 1,
        ballXposition: game.config.width / 4,
        ballYposition: game.config.height / 2
    }

    // giving focus to the frame (if any) where the game is running in
    window.focus();

    // pure javascript to scale the canvas
    resize();
    window.addEventListener("resize", resize, false);
}

