class Westeros1 extends Westeros {
    constructor(ctx, x, y) {
        super(ctx, x, y, "img/cards/westeros/deck1/top.png");

        this.addCard(new Card(1, "img/cards/westeros/deck1/throne.png"));
        this.addCard(new Card(2, "img/cards/westeros/deck1/recruit.png"));
        this.addCard(new Card(3, "img/cards/westeros/deck1/winter.png"));
        this.addCard(new Card(4, "img/cards/westeros/deck1/summer.png"));
        this.addCard(new Card(5, "img/cards/westeros/deck1/supply.png"));
    }
}
