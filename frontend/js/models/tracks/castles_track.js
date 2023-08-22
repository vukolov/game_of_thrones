class CastlesTrack extends Track {
    constructor(ctx, x, y) {
        let totalCells = 7;
        let cellWidth = 135;
        let firstCellOffsets = {
            'stark': [45, 80],
            'baratheon': [65, 120],
        }
        let victoryTrackImg = new Image();
        victoryTrackImg.src = "img/tracks/victory.jpg";
        let trackWidth = 1000;
        let trackHeight = 240;
        let markerWidth = 74;
        let markerHeight = 62;

        let markers = {
            "stark": Track.createMarker("img/castles/stark.png", markerWidth, markerHeight, firstCellOffsets['stark'], cellWidth, totalCells),
            "baratheon": Track.createMarker("img/castles/baratheon.png", markerWidth, markerHeight, firstCellOffsets['baratheon'], cellWidth, totalCells)
        }
        super(ctx, x, y, victoryTrackImg, trackWidth, trackHeight, markers);

        this.starkPosition = 1;
        this.baratheonPosition = 1;
        this.totalCells = totalCells;
    }
}
