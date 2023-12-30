var firstColor = document.getElementById("firstColor");
var secondColor = document.getElementById("secondColor");
var body = document.getElementById("body");

firstColor.addEventListener("input", changeBackgroundColor);
secondColor.addEventListener("input", changeBackgroundColor);

function changeBackgroundColor() {
  body.style.background = `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;
}
