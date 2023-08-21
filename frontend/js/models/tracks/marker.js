class Marker {
    tmpPositionCoords = [0, 0];
    positionCoords = [];
    cellNum = 0;
    width = 0;
    height = 0;
    img = null;

    constructor(width, height, img, positionCoords) {
        this.width = width;
        this.height = height;
        this.img = img;
        this.positionCoords = positionCoords;
        this.tmpPositionCoords = positionCoords[0];
    }
}