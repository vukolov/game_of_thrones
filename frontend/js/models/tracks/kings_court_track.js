class KingsCourtTrack extends Track {
    constructor(ctx, x, y) {
        let totalCells = 6;
        let cellWidth = 129;
        let firstCellOffsets = {
            'stark': [205, 20],
            'lannister': [205, 20],
        }
        let victoryTrackImg = new Image();
        victoryTrackImg.src = "img/tracks/kings_court.jpg";
        let trackWidth = 1000;
        let trackHeight = 135;
        let markerWidth = 100;
        let markerHeight = 100;

        let markers = {
            "stark": Track.createMarker("img/tokens/stark.png", markerWidth, markerHeight, firstCellOffsets['stark'], cellWidth, totalCells),
            "lannister": Track.createMarker("img/tokens/lannister.png", markerWidth, markerHeight, firstCellOffsets['lannister'], cellWidth, totalCells)
        }
        super(ctx, x, y, victoryTrackImg, trackWidth, trackHeight, markers);

        this.starkPosition = 1;
        this.lannisterPosition = 5;
        this.totalCells = totalCells;

        this.moveMarker('lannister', this.lannisterPosition - 1);
    }
}
