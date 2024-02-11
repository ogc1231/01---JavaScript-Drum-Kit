const A = document.getElementById("a");

const audioA = new Audio("./sounds/clap.wav");

A.addEventListener("click", function clickA() {
  audioA.play();
});

window.addEventListener("keydown", function (e) {
  audioA.play();
});
