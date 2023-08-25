class Deck {
    cards = {};

    constructor(ctx, x, y, topImg, width, height) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.topImg = topImg;
        this.width = width;
        this.height = height;
    }

    addCard(card) {
        this.cards[card.id] = card;
    }

    draw() {
        this.ctx.drawImage(this.topImg, this.x, this.y, this.width, this.height);
    }

    openCard(id) {
        let cardImg = new Image();
        cardImg.src = this.cards[id].imgPath;
        cardImg.onload = () => {
            this.ctx.drawImage(cardImg, this.x, this.y, this.width, this.height);
        }
    }
}
