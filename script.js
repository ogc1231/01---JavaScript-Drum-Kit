const A = document.getElementById("a");

const audioA = new Audio("./sounds/clap.wav");

A.addEventListener("click", clickA);

function clickA() {
  console.log(A);
  audioA.play();
}
