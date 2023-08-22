class SupplyTrack extends Track {
    constructor(ctx, x, y) {
        let totalCells = 7;
        let cellWidth = 135;
        let firstCellOffsets = {
            'stark': [45, 160],
            'baratheon': [75, 160],
        }
        let trackImg = new Image();
        trackImg.src = "img/tracks/supply.jpg";
        let trackWidth = 1000;
        let trackHeight = 550;
        let markerWidth = 74;
        let markerHeight = 92;

        let markers = {
            "stark": Track.createMarker("img/barrels/stark.png", markerWidth, markerHeight, firstCellOffsets['stark'], cellWidth, totalCells),
            "baratheon": Track.createMarker("img/barrels/baratheon.png", markerWidth, markerHeight, firstCellOffsets['baratheon'], cellWidth, totalCells)
        }
        super(ctx, x, y, trackImg, trackWidth, trackHeight, markers);

        this.starkPosition = 1;
        this.baratheonPosition = 1;
        this.totalCells = totalCells;
    }
}
