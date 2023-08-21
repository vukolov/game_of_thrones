class CastlesTrack extends Track {
    constructor(ctx, x, y) {
        let totalCells = 7;
        let cellWidth = 135;
        let firstCellOffset = 54;
        let victoryTrackImg = new Image();
        victoryTrackImg.src = "img/victory_track.jpg";
        let trackWidth = 1000;
        let trackHeight = 240;
        let markerWidth = 74;
        let markerHeight = 62;

        let createMarker = function (imgPath, markerWidth, markerHeight, firstCellOffset, cellWidth, totalCells) {
            let starkImg = new Image();
            starkImg.src = imgPath
            let markerPositionCoords = [];
            for (let i = 0; i < totalCells; i++) {
                markerPositionCoords.push([firstCellOffset + cellWidth * i, 100]);
            }
            return new Marker(markerWidth, markerHeight, starkImg, markerPositionCoords)
        }
        let markers = {
            "stark": createMarker("img/castles/stark.png", markerWidth, markerHeight, firstCellOffset, cellWidth, totalCells),
            "baratheon": createMarker("img/castles/baratheon.png", markerWidth, markerHeight, firstCellOffset, cellWidth, totalCells)
        }
        super(ctx, x, y, victoryTrackImg, trackWidth, trackHeight, markers);

        this.starkPosition = 1;
        this.baratheonPosition = 1;
        this.totalCells = totalCells;
    }
}
