class CastleStarkTrack extends Track {
    cellWidth = 88;
    firstCellOffset = 48;
    castlesNum = 1;
    totalCells = 7;
    constructor(ctx, x, y) {
        let roundMarkerImg = new Image();
        let victoryTrackImg = new Image();
        roundMarkerImg.src = "img/castles/stark.png";
        victoryTrackImg.src = "img/victory_track.jpg";
        let trackWidth = 1000;
        let trackHeight = 240;
        let markerWidth = 74;
        let markerHeight = 62;
        super(ctx, x, y, victoryTrackImg, roundMarkerImg, trackWidth, trackHeight, markerWidth, markerHeight);
        for (let i = 0; i < this.totalCells; i++) {
            this.markerPositionCoords.push([this.firstCellOffset + this.cellWidth * i, 100]);
        }
        this.marketTmpPositionCoords = this.markerPositionCoords[this.castlesNum - 1];
    }
}
