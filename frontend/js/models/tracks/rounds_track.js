class RoundsTrack extends Track {
    constructor(ctx, x, y) {
        let totalRounds = 10;
        let firstCellOffset = 48;
        let cellWidth = 88;
        let roundsTrackImg = new Image();
        let roundMarkerImg = new Image();
        roundsTrackImg.src = "img/rounds_track.jpg";
        roundMarkerImg.src = "img/round_marker.png";
        let trackWidth = 1000;
        let trackHeight = 230;
        let markerWidth = 100;
        let markerHeight = 150;
        let markerPositionCoords = [];
        for (let i = 0; i < totalRounds; i++) {
            markerPositionCoords.push([firstCellOffset + cellWidth * i, 100]);
        }
        let markers = {
            "round_marker": new Marker(markerWidth, markerHeight, roundMarkerImg, markerPositionCoords)
        }
        super(ctx, x, y, roundsTrackImg, trackWidth, trackHeight, markers);

        this.roundNum = 1;
        this.totalRounds = totalRounds;
    }

    nextRound() {
        if (this.roundNum < this.totalRounds) {
            this.roundNum += 1;
        }
    }
}
