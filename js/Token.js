class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }

    drawHTMLToken() {
        const div = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(div);
        div.setAttribute("id", this.id);
        div.setAttribute("class", "token");
        div.style.backgroundColor = this.owner.color;
    }
    get htmlToken() {
        return document.getElementById(this.id);
    }
    /**
     * Gets left offset of HTML element.
     * @return {number} Left of offset of token object's htmlToken
     */

    get offsetLeft() {
        return this.htmlToken.offsetLeft;
    }

    moveLeft() {
        if ( this.columnLocation > 0 ) {
            this.htmlToken.style.left = this.offsetLeft - 76;
            this.columnLocation -= 1;
        }
    }

    moveRight(columns) {
        if ( this.columnLocation < columns -1 ) {
            this.htmlToken.style.left = this.offsetLeft + 76;
            this.columnLocation += 1;
        }
        
    }

}