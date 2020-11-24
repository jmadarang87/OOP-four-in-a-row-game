class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /**
     * Creates two player objects
     * @return {Array} An array of two Player objects.
     */

    createPlayers() {
        const players = [];
        const player1 = new Player( 'Dakota', #e15258, 1, true );
        const player2 = new Player( 'Jahnel', #e59a13, 2 );
        players.push(player1);
        players.push(player2);
        return players;

    }
    /**
     * Gets game ready to play
     */
    startGame();
}
