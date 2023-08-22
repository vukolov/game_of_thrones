const boardWidth = 1360;
const boardHeight = 2600;
const tableBorder = 10;
const influenceTrackHeight = 420;

window.onload = function() {
  const canvas = document.getElementById("table");
  const ctx = canvas.getContext("2d");
  let tableImg = new Image();
  let boardImg = new Image();
  let influenceTrackImg = new Image();
  let supplyTrackImg = new Image();

  tableImg.src = "img/table.jpg";
  boardImg.src = "img/board.jpg";
  influenceTrackImg.src = "img/tracks/influence.jpg";
  supplyTrackImg.src = "img/tracks/supply.jpg";

  let wildingsTrack = new WildingsTrack(ctx,
        tableBorder,
          tableBorder);
  let ironThroneTrack = new IronThroneTrack(ctx,
      tableBorder * 2 + boardWidth,
      tableBorder);
  let fiefdomsTrack = new FiefdomsTrack(ctx,
      tableBorder * 2 + boardWidth,
      tableBorder + 140);
  let kingsCourtTrack = new KingsCourtTrack(ctx,
      tableBorder * 2 + boardWidth,
      tableBorder + 260);
  let roundsTrack = new RoundsTrack(ctx,
      tableBorder * 2 + boardWidth,
      tableBorder + influenceTrackHeight);
  let castlesTrack = new CastlesTrack(ctx,
      tableBorder * 2 + boardWidth,
      tableBorder + influenceTrackHeight + 230);
  let supplyTrack = new SupplyTrack(ctx,
      tableBorder * 2 + boardWidth,
      tableBorder + influenceTrackHeight + 480);

  ctx.drawImage(tableImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(boardImg, tableBorder, tableBorder + 185, boardWidth, boardHeight);
  //ctx.drawImage(influenceTrackImg, tableBorder * 2 + boardWidth, tableBorder, influenceTrackWidth, influenceTrackHeight);
  wildingsTrack.draw();
  ironThroneTrack.draw();
  roundsTrack.draw();
  castlesTrack.draw();
  supplyTrack.draw();

  document.getElementById("next_round").addEventListener("click", () => {
    roundsTrack.nextRound();
    roundsTrack.moveMarker('round_marker',roundsTrack.roundNum - 1);
  });

  document.getElementById("move_stark_castle").addEventListener("click", () => {
    if (castlesTrack.starkPosition < castlesTrack.totalCells) {
        castlesTrack.starkPosition++;
    }
    castlesTrack.moveMarker('stark', castlesTrack.starkPosition - 1);
  });

  document.getElementById("move_baratheon_castle").addEventListener("click", () => {
    if (castlesTrack.baratheonPosition < castlesTrack.totalCells) {
        castlesTrack.baratheonPosition++;
    }
    castlesTrack.moveMarker('baratheon', castlesTrack.baratheonPosition - 1);
  });
};