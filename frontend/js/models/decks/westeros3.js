class Westeros3 extends Westeros {
    constructor(ctx, x, y) {
        super(ctx, x, y, "img/cards/westeros/deck3/top.png");

        this.addCard(new Card(1, "img/cards/westeros/deck3/crowds.png"));
        this.addCard(new Card(2, "img/cards/westeros/deck3/rains.png"));
        this.addCard(new Card(3, "img/cards/westeros/deck3/web_of_lie.png"));
        this.addCard(new Card(4, "img/cards/westeros/deck3/sea_of_storms.png"));
        this.addCard(new Card(5, "img/cards/westeros/deck3/might.png"));
        this.addCard(new Card(6, "img/cards/westeros/deck3/wildings.png"));
        this.addCard(new Card(7, "img/cards/westeros/deck3/storm_of_knives.png"));
    }
}
