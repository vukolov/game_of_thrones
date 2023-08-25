class Westeros extends Deck {
    constructor(ctx, x, y, topImgPath) {
        let topImg = new Image();
        let width = 450;
        let height = 300;
        topImg.src = topImgPath;
        super(ctx, x, y, topImg, width, height);
    }
}
