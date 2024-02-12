// const A = document.getElementById("a");

// const audioA = new Audio("./sounds/clap.wav");

window.addEventListener("click", function (e) {
  audio.play();
});

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (audio === null) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});
