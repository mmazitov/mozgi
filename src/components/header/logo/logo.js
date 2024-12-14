document.addEventListener("DOMContentLoaded", () => {
  logoCanvas();
});

function logoCanvas() {
  const logo = document.getElementById('logo');

  if (!logo || !logo.getContext) {
    console.error("Canvas not found");
    return;
  }
  const cx = logo.getContext('2d');
  logo.height = 60;
  logo.width = 85;
  cx.strokeStyle = "rgba(0, 0, 0, 1)";
  cx.lineWidth = 1;
  cx.lineJoin = 'bevel';
  cx.miterLimit = 0;

  animateAllLetters(cx);
  addText(cx);
}

function animateAllLetters(cx) {
  const letters = [
    { func: letterM, startX: 2, startY: 3, endX: 23, endY: 32 },
    { func: letterO, startX: 27, startY: 0, endX: 42, endY: 37 },
    { func: letterZ, startX: 45, startY: 3, endX: 59, endY: 35 },
    { func: letterG, startX: 62, startY: 3, endX: 77, endY: 35 },
    { func: letterI, startX: 80, startY: 3, endX: 83, endY: 35 },
  ];

  let fillHeight = 0;
  const animationDuration = 1000;
  const startTime = performance.now();

  function animate(currentTime) {
    const progress = (currentTime - startTime) / animationDuration;
    fillHeight = Math.min(1, progress);

    cx.clearRect(0, 0, cx.canvas.width, cx.canvas.height);

    letters.forEach((letter) => {
      const paths = letter.func(cx);
      paths.forEach((path) => {
        cx.stroke(path);

        cx.save();
        cx.beginPath();
        cx.rect(
          letter.startX,
          letter.startY + letter.endY - letter.endY * fillHeight,
          letter.endX - letter.startX,
          letter.endY * fillHeight
        );
        cx.clip();

        cx.fillStyle = "black";
        cx.fill(path);
        cx.restore();
      });
    });

    if (fillHeight < 1) {
      requestAnimationFrame(animate);
    } else {
      addText(cx);
    }
  }

  requestAnimationFrame(animate);
}

function letterM() {
	const startX = 2;
  const startY = 3;
  const endY = 32;
  const endX = 23;
  const middle = 12.5;
  const path = new Path2D();
  path.moveTo(startX, startY);
  path.lineTo(startX, startY + endY);
  path.lineTo(startX + 3, startY + endY);
  path.lineTo(startX + 3, startY + 7);
  path.lineTo(startX + 9, startY + endY);
  path.lineTo(startX + 12, startY + endY);
  path.lineTo(startX + 18, startY + 7);
  path.lineTo(startX + 18, startY + endY);
  path.lineTo(endX, startY + endY);
  path.lineTo(endX, startY);
  path.lineTo(startX + 16, startY);
  path.lineTo(middle, startY + 25);
  path.lineTo(startX + 5, startY);
  path.closePath();
  return [path];
}

function letterO() {
  const outerStartX = 27;
  const outerStartY = 0;
  const outerEndY = 37;
  const outerEndX = 42;

  const outerPath = new Path2D();
  outerPath.moveTo(outerStartX, outerStartY + 3);
  outerPath.lineTo(outerStartX, outerEndY - 3);
  outerPath.lineTo(outerEndX, outerEndY);
  outerPath.lineTo(outerEndX, outerStartY);
  outerPath.lineTo(outerStartX, outerStartY + 3);
  outerPath.closePath();

  const innerStartX = 30;
  const innerStartY = 5;
  const innerEndY = 32;
  const innerEndX = 39;

  const innerPath = new Path2D();
  innerPath.moveTo(innerStartX, innerStartY + 1);
  innerPath.lineTo(innerStartX, innerEndY - 1);
  innerPath.lineTo(innerEndX, innerEndY + 1);
  innerPath.lineTo(innerEndX, innerStartY - 1);
  innerPath.lineTo(innerStartX, innerStartY + 1);
  innerPath.closePath();

  return [outerPath, innerPath];
}


function letterZ() {
	const startX = 45;
  const startY = 3;
  const endY = 35;
  const endX = 59;

  const path = new Path2D();
  path.moveTo(startX, startY);
  path.lineTo(startX, startY + 3);
  path.lineTo(startX + 10.5, startY + 3);
  path.lineTo(startX, endY - 3);
  path.lineTo(startX, endY);
  path.lineTo(endX, endY);
  path.lineTo(endX, endY - 3);
  path.lineTo(startX + 4, endY - 3);
  path.lineTo(endX, startY + 3);
  path.lineTo(endX, startY);
  path.lineTo(startX, startY);
  path.closePath();
  return [path];
}

function letterG() {
	const startX = 62;
  const startY = 3;
  const endY = 35;
  const endX = 77;
  const path = new Path2D();
  path.moveTo(startX, startY);
  path.lineTo(startX, endY);
  path.lineTo(endX, endY);
  path.lineTo(endX, endY - 16);
  path.lineTo(endX - 8, endY - 16);
  path.lineTo(endX - 8, endY - 13);
  path.lineTo(endX - 3, endY - 13);
  path.lineTo(endX - 3, endY - 3);
  path.lineTo(startX + 3, endY - 3);
  path.lineTo(startX + 3, startY + 3);
  path.lineTo(endX - 4, startY + 3);
  path.lineTo(endX - 4, startY + 8);
  path.lineTo(endX - 1, startY + 8);
  path.lineTo(endX - 1, startY);
  path.lineTo(startX, startY);
  path.closePath();
  return [path];
}

function letterI() {
	const startX = 80;
  const startY = 3;
  const endY = 35;
  const endX = 83;
  const path = new Path2D();
  path.moveTo(startX, startY);
  path.lineTo(startX, endY);
  path.lineTo(endX, endY);
  path.lineTo(endX, startY);
  path.lineTo(startX, startY);
  path.closePath();
  return [path];
}

function addText(cx) {
  cx.font = "14px Arial";
  cx.fillStyle = "rgba(0, 0, 0, 1)";
  cx.fillText("E V E N T", 10, 58);
}
