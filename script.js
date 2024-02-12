// for mouse click
const drums = document.querySelectorAll(".key");

drums.forEach((drum) => {
  drum.addEventListener("mousedown", function () {
    playSoundClick(drum);
  });
  drum.addEventListener("mouseup", function () {
    drum.classList.remove("playing");
  });
});

function playSoundClick(drum) {
  const clickAudio = document.getElementById(drum.dataset.key);
  clickAudio.currentTime = 0;
  clickAudio.play();
  drum.classList.add("playing");
}

// for keyboard button press

// keydown
window.addEventListener("keydown", function (e) {
  const audioKeyDown = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (audioKeyDown === null) return;
  audioKeyDown.currentTime = 0;
  audioKeyDown.play();
  key.classList.add("playing");
});

// keyup
window.addEventListener("keyup", function (e) {
  const audioKeyDown = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (audioKeyDown === null) return;
  key.classList.remove("playing");
});
