
document.getElementById("player").style.top = "200px";
document.getElementById("player").style.left = "200px";

var playerID = "player";
var stepSize = 64;
var unitType = "px"

function posInt(pos) {
  return parseInt(pos.substring(0, pos.length - unitType.length));
}
function getPlayerPos(direction) {
  return function() {
    var rawPosString = document.getElementById(playerID).style[direction];
    var posNum = posInt(rawPosString);
    console.log(direction, posNum);
    return posNum;
  }
}
var getX = getPlayerPos("left");
var getY = getPlayerPos("top" );

function setPlayerPos(direction) {
  return function(newPos) {
    // newPos should be an int
    var newPosString = newPos + unitType;
    document.getElementById(playerID).style[direction] = newPosString;
  }
}
var setX = setPlayerPos("left");
var setY = setPlayerPos("top" );

function movePlayer(dX, dY) {
  var newX = getX() + stepSize * dX;
  var newY = getY() + stepSize * dY;
  setX(newX);
  setY(newY);
}

new Audio("music.mp3").play(); // maybe add some code to make music loop

document.getElementById("up"   ).onclick = function() { movePlayer( 0, -1); }
document.getElementById("right").onclick = function() { movePlayer( 1,  0); }
document.getElementById("down" ).onclick = function() { movePlayer( 0,  1); }
document.getElementById("left" ).onclick = function() { movePlayer(-1,  0); }
document.onkeydown = function(e) {
  // 37 left, 38 up, 39 right, 40 down
  if(e.keyCode === 38) { movePlayer( 0, -1); }
  if(e.keyCode === 39) { movePlayer( 1,  0); }
  if(e.keyCode === 40) { movePlayer( 0,  1); }
  if(e.keyCode === 37) { movePlayer(-1,  0); }
}

// GIVE THIS SOME MUSIC ??
