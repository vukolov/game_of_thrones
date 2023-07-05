const boardWidth = 1360;
const boardHeight = 2600;
const tableBorder = 10;
const influenceTrackWidth = 1000;
const influenceTrackHeight = 400;

window.onload = function() {
  const canvas = document.getElementById("table");
  const ctx = canvas.getContext("2d");
  let tableImg = new Image();
  let boardImg = new Image();
  let influenceTrackImg = new Image();

  tableImg.src = "img/table.jpg";
  boardImg.src = "img/board.png";
  influenceTrackImg.src = "img/influence_track.jpg";


  let roundsTrack = new RoundsTrack(ctx,
      tableBorder * 2 + boardWidth,
      tableBorder + influenceTrackHeight);
  let castlesStarkTrack = new CastleStarkTrack(ctx,
      tableBorder * 2 + boardWidth,
      tableBorder + influenceTrackHeight + 230);

  ctx.drawImage(tableImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(boardImg, tableBorder, tableBorder, boardWidth, boardHeight);
  ctx.drawImage(influenceTrackImg, tableBorder * 2 + boardWidth, tableBorder, influenceTrackWidth, influenceTrackHeight);
  roundsTrack.draw();
  castlesStarkTrack.draw();

  document.getElementById("next_round").addEventListener("click", () => {
    if (roundsTrack.roundNum < roundsTrack.totalRounds) {
      roundsTrack.roundNum++;
    }
    roundsTrack.moveMarker(roundsTrack.roundNum - 1);
  });
};