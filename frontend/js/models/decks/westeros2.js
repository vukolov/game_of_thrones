class Westeros2 extends Westeros {
    constructor(ctx, x, y) {
        super(ctx, x, y, "img/cards/westeros/deck2/top.png");

        this.addCard(new Card(1, "img/cards/westeros/deck2/black_wings.png"));
        this.addCard(new Card(2, "img/cards/westeros/deck2/summer.png"));
        this.addCard(new Card(3, "img/cards/westeros/deck2/winter.png"));
        this.addCard(new Card(4, "img/cards/westeros/deck2/kings_fight.png"));
        this.addCard(new Card(5, "img/cards/westeros/deck2/game_of_thrones.png"));
    }
}
