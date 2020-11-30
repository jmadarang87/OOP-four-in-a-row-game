class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    /** Creates token objects for player
     * @param {integer} num - Number of objects to be created
     */

    createTokens(num) {
        const tokens = [];
        for ( let i = 0; i < num; i++) {
            let token = new Token(i, this);
            tokens.push(token)
        }
        return tokens;
    }

    get unusedTokens() {
        const unused = [];
        for ( let i = 0; i < this.tokens.length; i++ ) {
            if ( this.tokens[i].dropped === false ) {
                unused.push(this.tokens[i]);
            }
        }
        return unused;
    }

    get activeToken() {
        return this.unusedTokens[0];

    }

    checkTokens() {
        return this.unusedTokens.length === 0 ? false : true;
    }
}