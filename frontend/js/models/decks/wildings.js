class Wildings extends Deck {
    constructor(ctx, x, y) {
        let topImg = new Image();
        let width = 200;
        let height = 300;
        topImg.src = "img/cards/wildings/top.png";
        super(ctx, x, y, topImg, width, height);

        this.addCard(new Card(1, "img/cards/wildings/a.png"));
        this.addCard(new Card(2, "img/cards/wildings/b.png"));
        this.addCard(new Card(3, "img/cards/wildings/c.png"));
        this.addCard(new Card(4, "img/cards/wildings/d.png"));
        this.addCard(new Card(5, "img/cards/wildings/e.png"));
        this.addCard(new Card(6, "img/cards/wildings/f.png"));
        this.addCard(new Card(7, "img/cards/wildings/g.png"));
        this.addCard(new Card(8, "img/cards/wildings/h.png"));
    }
}
