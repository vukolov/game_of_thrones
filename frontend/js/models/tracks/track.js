class Track {
    ctx = null;
    trackImg = null;
    markers = {}

    interval = null;
    x = 0;
    y = 0;

    trackWidth = 0;
    trackHeight = 0;

    constructor(ctx, x, y, trackImg, trackWidth, trackHeight, markers) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.trackImg = trackImg;
        this.markers = markers;
        this.trackWidth = trackWidth;
        this.trackHeight = trackHeight;
    }

    updateTmpCoords(markerName) {
        if (this.markers[markerName].tmpPositionCoords[0] < this.markers[markerName].positionCoords[this.markers[markerName].cellNum][0]) {
            this.markers[markerName].tmpPositionCoords[0] += 2;
        } else {
            clearInterval(this.interval);
        }
    }

    draw() {
        this.ctx.drawImage(this.trackImg, this.x, this.y, this.trackWidth, this.trackHeight);
        for (let markerName in this.markers) {
            this.ctx.drawImage(this.markers[markerName].img,
                this.x + this.markers[markerName].tmpPositionCoords[0],
                this.y + this.markers[markerName].tmpPositionCoords[1],
                this.markers[markerName].width,
                this.markers[markerName].height);
        }
    }

    static createMarker(imgPath, markerWidth, markerHeight, firstCellOffsets, cellWidth, totalCells) {
        let markerImg = new Image();
        markerImg.src = imgPath
        let markerPositionCoords = [];
        for (let i = 0; i < totalCells; i++) {
            markerPositionCoords.push([firstCellOffsets[0] + cellWidth * i, firstCellOffsets[1]]);
        }
        return new Marker(markerWidth, markerHeight, markerImg, markerPositionCoords)
    }

    moveMarker(markerName, toCellNum) {
        this.markers[markerName].cellNum = toCellNum;
        this.interval = setInterval(() => {
            this.clear();
            this.draw();
            this.updateTmpCoords(markerName);
        }, 5);
    }

    clear() {
        this.ctx.clearRect(this.x, this.y, this.trackWidth, this.trackHeight);
    }
}
