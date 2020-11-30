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
            const game = this;
            game.ready = false;
            activeToken.drop(targetSpace, function () {
                //callback function code
                game.updateGameState(activeToken, targetSpace);
            });
        }
    }
    /** 
     * Switches active player. 
     */

     switchPlayers() {
        for (let player of this.players) {
            player.active = player.active === true ? false : true;
        }
     }

     /** 
     * Displays game over message.
     * @param {string} message - Game over message.      
     */
     gameOver(message) {
         document.getElementById('game-over').style.display = 'block';
         document.getElementById('game-over').textContent = message;
     }

      /** 
     * Updates game state after token is dropped. 
     * @param   {Object}  token  -  The token that's being dropped.
     * @param   {Object}  target -  Targeted space for dropped token.
     */
     updateGameState(token, target) {
         target.mark(token);
         
         if (!this.checkForWin(target)) {
            this.switchPlayers();
            if (this.activePlayer.checkTokens()) {
                this.activePlayer.activeToken.drawHTMLToken();
                this.ready = true;
            } else {
                this.gameOver('No More Tokens!');
            }} else {
                this.gameOver(`${target.owner.name} Wins!`);  
        }
    }


    /** 
     * Checks if there a winner on the board after each token drop.
     * @param   {Object}    Targeted space for dropped token.
     * @return  {boolean}   Boolean value indicating whether the game has been won (true) or not (false)
     */

    checkForWin(target) {
        const owner = target.token.owner;
        let win = false;

        // checks for vertical win
        for (let x = 0; x < this.board.columns; x++ ) {
            for (let y = 0; y < this.board.rows - 3; y++ ) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x][y+1].owner === owner &&
                    this.board.spaces[x][y+2].owner === owner && 
                    this.board.spaces[x][y+3].owner === owner ) {
                        win = true;
                    }
            }
        }
        // checks for horizonal win
        for (let x = 0; x < this.board.columns - 3; x++ ) {
            for (let y = 0; y < this.board.rows; y++ ) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x+1][y].owner === owner &&
                    this.board.spaces[x+2][y].owner === owner &&
                    this.board.spaces[x+3][y].owner === owner) {
                        win = true;
                    }
            }
        }

        // diagonal
    	for (let x = 3; x < this.board.columns; x++ ){
            for (let y = 0; y < this.board.rows - 3; y++){
                if (this.board.spaces[x][y].owner === owner && 
    				this.board.spaces[x-1][y+1].owner === owner && 
    				this.board.spaces[x-2][y+2].owner === owner && 
    				this.board.spaces[x-3][y+3].owner === owner) {
                    	win = true;
                }           
            }
        }
	
    	// diagonal
    	for (let x = 3; x < this.board.columns; x++ ){
            for (let y = 3; y < this.board.rows; y++){
                if (this.board.spaces[x][y].owner === owner && 
    				this.board.spaces[x-1][y-1].owner === owner && 
    				this.board.spaces[x-2][y-2].owner === owner && 
    				this.board.spaces[x-3][y-3].owner === owner) {
                    	win = true;
                    }
            }
        }
        return win;
    }
}

