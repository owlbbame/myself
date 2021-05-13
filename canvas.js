let painting = false;
let filling = false;

var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
const image=document.getElementById('source');

image.addEventListener('load',e => {
  // ctx.drawImage(image,10,800,500,500);
  ctx.drawImage(image, 100, 100, 500, 500, 1, 1,500, 500);
});

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
