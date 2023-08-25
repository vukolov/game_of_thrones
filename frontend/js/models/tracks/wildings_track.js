class WildingsTrack extends Track {
    constructor(ctx, x, y) {
        let totalLevels = 7;
        let firstCellOffset = [350, 70];
        let cellWidth = 93;
        let roundsTrackImg = new Image();
        roundsTrackImg.src = "img/tracks/wildings.jpg";
        let trackWidth = 1360;
        let trackHeight = 180;
        let markerWidth = 80;
        let markerHeight = 80;

        let markers = {
            "wildings_marker": Track.createMarker("img/wildings_marker.png", markerWidth, markerHeight, firstCellOffset, cellWidth, totalLevels),
        }
        super(ctx, x, y, roundsTrackImg, trackWidth, trackHeight, markers);

        this.level = 0;
        this.totalLevels = totalLevels;
        //this.moveMarker('wildings_marker', 6);
    }

    nextLevel() {
        if (this.level < this.totalLevels) {
            this.level += 1;
        }
    }
}
