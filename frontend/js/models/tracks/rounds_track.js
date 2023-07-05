class RoundsTrack extends Track {
    cellWidth = 88;
    firstCellOffset = 48;
    roundNum = 1;
    totalRounds = 10;
    constructor(ctx, x, y) {
        let roundsTrackImg = new Image();
        let roundMarkerImg = new Image();
        roundsTrackImg.src = "img/rounds_track.jpg";
        roundMarkerImg.src = "img/round_marker.png";
        let trackWidth = 1000;
        let trackHeight = 230;
        let markerWidth = 100;
        let markerHeight = 150;
        super(ctx, x, y, roundsTrackImg, roundMarkerImg, trackWidth, trackHeight, markerWidth, markerHeight);
        for (let i = 0; i < this.totalRounds; i++) {
            this.markerPositionCoords.push([this.firstCellOffset + this.cellWidth * i, 100]);
        }
        this.marketTmpPositionCoords = this.markerPositionCoords[this.roundNum - 1];
    }
}
