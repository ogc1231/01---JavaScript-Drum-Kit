// const A = document.getElementById("a");

// const audioA = new Audio("./sounds/clap.wav");

window.addEventListener("click", function (e) {
  console.log(e);
  // audioA.play();
});

window.addEventListener("keydown", function (e) {
  console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.play();
});
