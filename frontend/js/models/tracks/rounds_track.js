class RoundsTrack extends Track {
    constructor(ctx, x, y) {
        let totalRounds = 10;
        let firstCellOffset = [48, 80];
        let cellWidth = 88;
        let roundsTrackImg = new Image();
        roundsTrackImg.src = "img/tracks/rounds.jpg";
        let trackWidth = 1000;
        let trackHeight = 230;
        let markerWidth = 100;
        let markerHeight = 150;

        let markers = {
            "round_marker": Track.createMarker("img/round_marker.png", markerWidth, markerHeight, firstCellOffset, cellWidth, totalRounds),
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
