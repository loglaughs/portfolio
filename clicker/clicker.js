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
function home() {
  window.location.href = "/portfolio/index.html";
  return false;
}
function clicker() {
  window.location.href = "portfolio/clicker/clicker.html";
  return false;
}
function detector() {
  window.location.href = "portfolio/detector/detector.html";
  return false;
}
function calculator() {
  window.location.href = "portfolio/calculator/calculator.html";
  return false;
}
function about() {
  window.location.href = "portfolio/about/about.html";
  return false;
}
