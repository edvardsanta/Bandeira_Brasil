const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const state = {
  circle: ctx,
  rectGreen: ctx,
  rectWhite: ctx,
  text: ctx,
  rhombus: ctx,
};

function createRectGreen() {
  state.rectGreen.fillStyle = "#009c3b";
  state.rectGreen.fillRect(0, 0, 2000, 2000);
}

function createCircle() {
  state.circle.beginPath();
  state.circle.arc(500, 250, 150, 0, 2 * Math.PI);
  state.circle.fillStyle = "#002776";
  state.circle.fill();
}

function createRectWhite() {
  state.rectWhite.fillStyle = "#FFFFFF";
  state.rectWhite.fillRect(350, 220, 300, 50);
}

function Write() {
  state.text.font = "35px Arial";
  state.text.strokeStyle = "#009c3b";
  state.text.textAlign = "center";
  state.text.strokeText("Ordem e progresso", 500, 255);
}

function createRhombus() {
  let rhombus1 = state.rhombus;
  rhombus1.strokeStyle = "#ffdf00";
  rhombus1.moveTo(450, 105);
  rhombus1.lineTo(200, 250);
  rhombus1.lineTo(450, 400);
  rhombus1.stroke();

  let rhombus2 = state.rhombus;
  rhombus2.strokeStyle = "#ffdf00";
  rhombus2.moveTo(550, 400);
  rhombus2.lineTo(800, 250);
  rhombus2.lineTo(555, 105);
  rhombus2.stroke();
}

function Audio() {
  const audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}

createRectGreen();
createCircle();
createRectWhite();
Write();
createRhombus();
