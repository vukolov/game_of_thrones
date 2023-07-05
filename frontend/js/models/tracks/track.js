class Track {
    ctx = null;
    trackImg = null;
    markerImg = null;

    interval = null;
    x = 0;
    y = 0;

    marketTmpPositionCoords = [0, 0];
    markerPositionCoords = [];
    markerCellNum = 0;
    markerWidth = 0;
    markerHeight = 0;

    trackWidth = 0;
    trackHeight = 0;

    constructor(ctx, x, y, trackImg, markerImg, trackWidth, trackHeight, markerWidth, markerHeight) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.trackImg = trackImg;
        this.markerImg = markerImg;
        this.trackWidth = trackWidth;
        this.trackHeight = trackHeight;
        this.markerWidth = markerWidth;
        this.markerHeight = markerHeight;
    }

    updateTmpCoords() {
        if (this.marketTmpPositionCoords[0] < this.markerPositionCoords[this.markerCellNum][0]) {
            this.marketTmpPositionCoords[0] += 2;
        } else {
            clearInterval(this.interval);
        }
    }

    draw() {
        if (this.trackImg !== null) {
            this.ctx.drawImage(this.trackImg, this.x, this.y, this.trackWidth, this.trackHeight);
        }
        this.ctx.drawImage(this.markerImg,
            this.x + this.marketTmpPositionCoords[0],
            this.y + this.marketTmpPositionCoords[1],
            this.markerWidth,
            this.markerHeight);
    }

    moveMarker(toCellNum) {
        this.markerCellNum = toCellNum;
        this.interval = setInterval(() => {
            this.clear();
            this.draw();
            this.updateTmpCoords();
        }, 30);
    }

    clear() {
        this.ctx.clearRect(this.x, this.y, this.trackWidth, this.trackHeight);
    }
}
