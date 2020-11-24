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
        const player1 = new Player ( 'Dakota', 1, '#e15258', true );
        const player2 = new Player ( 'Jahnel', 2, '#e59a13');
        players.push(player1);
        players.push(player2);
        return players;

    }
    /**
     * Initializes game.
     */
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    };

    get activePlayer() {
        return this.players.find(player => player.active);

    }

    handleKeydown(e) {
        if (this.ready = true) {
            if (e.key === "ArrowLeft") {
                this.activePlayer.activeToken.moveLeft();
            } else if (e.key === "ArrowRight") {
                this.activePlayer.activeToken.moveRight(this.board.columns);
            } else if (e.key === "ArrowDown") {
                this.playToken();
            }
        }
    }

    playToken() {
        let spaces = this.board.spaces;
        let activeToken = this.activePlayer.activeToken;
        let targetColumn = spaces[activeToken.columnLocation];
        let targetSpace = null;

        for (let space of targetColumn) {
            if (space.token === null) {
                targetSpace = space;
            }
        }
        if (targetSpace !== null) {
            game.ready = false;
            activeToken.drop(targetSpace);
        }
    }

}

