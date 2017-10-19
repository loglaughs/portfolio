document.getElementById("out").innerHTML = localStorage.clickcount;
function count() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    }
    else {
      localStorage.clickcount = 1;
    }
  }
  document.getElementById("out").innerHTML = localStorage.clickcount;
  document.getElementById("reset").innerHTML = "";
  document.getElementById("out").draggable = false;
}
function reset() {
  localStorage.clickcount = 1;
  document.getElementById("out").innerHTML = localStorage.clickcount;
  document.getElementById("reset").innerHTML = "Count Reset!";
}
