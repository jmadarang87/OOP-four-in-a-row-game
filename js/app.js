const game = new Game();

const beginGame = document.getElementById('begin-game');

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */

beginGame.addEventListener('click', function() {
    game.startGame();

    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';

});

document.addEventListener('keydown', function(event) {
    game.handleKeydown(event);
})