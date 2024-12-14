document.addEventListener("DOMContentLoaded", () => {
  logoCanvas(); // Initialize the logo canvas after the DOM content is loaded
});

function logoCanvas() {
  const logo = document.getElementById('logo'); // Get the canvas element by its ID

  if (!logo || !logo.getContext) {
    console.error("Canvas not found"); // Log an error if canvas is not found or does not support 2d context
    return;
  }

  const cx = logo.getContext('2d'); // Get the 2D drawing context of the canvas
  logo.height = 60; // Set the canvas height
  logo.width = 85; // Set the canvas width
  cx.strokeStyle = "rgba(0, 0, 0, 1)"; // Set the stroke color for drawing paths
  cx.lineWidth = 1; // Set the stroke width
  cx.lineJoin = 'bevel'; // Set the line join type for paths
  cx.miterLimit = 0; // Set the miter limit for sharp joins

  animateAllLetters(cx); // Animate the drawing of all letters
  addText(cx); // Add text after the animation completes
}

function animateAllLetters(cx) {
  const letters = [
    { func: letterM, startX: 2, startY: 3, endX: 23, endY: 32 },
    { func: letterO, startX: 27, startY: 0, endX: 42, endY: 37 },
    { func: letterZ, startX: 45, startY: 3, endX: 59, endY: 35 },
    { func: letterG, startX: 62, startY: 3, endX: 77, endY: 35 },
    { func: letterI, startX: 80, startY: 3, endX: 83, endY: 35 },
  ];

  let fillHeight = 0; // Variable to control the fill height for animation
  const animationDuration = 1000; // Set animation duration (in milliseconds)
  const startTime = performance.now(); // Record the start time of the animation

  function animate(currentTime) {
    const progress = (currentTime - startTime) / animationDuration; // Calculate animation progress
    fillHeight = Math.min(1, progress); // Ensure fill height doesn't exceed 1 (100%)

    cx.clearRect(0, 0, cx.canvas.width, cx.canvas.height); // Clear the canvas before drawing each frame

    // Loop through each letter and animate it
    letters.forEach((letter) => {
      const paths = letter.func(cx); // Get the drawing paths for each letter
      paths.forEach((path) => {
        cx.stroke(path); // Draw the stroke of the letter

        cx.save(); // Save the current drawing state
        cx.beginPath(); // Begin a new path for clipping
        cx.rect(
          letter.startX,
          letter.startY + letter.endY - letter.endY * fillHeight,
          letter.endX - letter.startX,
          letter.endY * fillHeight
        ); // Define a clipping rectangle based on the animation progress
        cx.clip(); // Apply the clipping path

        cx.fillStyle = "black"; // Set fill color
        cx.fill(path); // Fill the letter's path with the fill color
        cx.restore(); // Restore the drawing state
      });
    });

    if (fillHeight < 1) {
      requestAnimationFrame(animate); // Continue the animation if not complete
    } else {
      addText(cx); // Add text after animation completion
    }
  }

  requestAnimationFrame(animate); // Start the animation
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
  path.closePath(); // Close the path for letter "M"
  return [path]; // Return the path for the letter "M"
}

function letterO() {
  const outerStartX = 27;
  const outerStartY = 1;
  const outerEndY = 38;
  const outerEndX = 42;

  const outerPath = new Path2D();
  outerPath.moveTo(outerStartX, outerStartY + 3);
  outerPath.lineTo(outerStartX, outerEndY - 3);
  outerPath.lineTo(outerEndX, outerEndY);
  outerPath.lineTo(outerEndX, outerStartY);
  outerPath.lineTo(outerStartX, outerStartY + 3);
  outerPath.closePath(); // Close the outer path for letter "O"

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
  innerPath.closePath(); // Close the inner path for letter "O"

  return [outerPath, innerPath]; // Return both outer and inner paths for letter "O"
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
  path.closePath(); // Close the path for letter "Z"
  return [path]; // Return the path for letter "Z"
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
  path.closePath(); // Close the path for letter "G"
  return [path]; // Return the path for letter "G"
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
  path.closePath(); // Close the path for letter "I"
  return [path]; // Return the path for letter "I"
}

function addText(cx) {
  cx.font = "14px Arial"; // Set font style for text
  cx.fillStyle = "rgba(0, 0, 0, 1)"; // Set fill color for text
  cx.textAlign = "center"; // Set text alignment to center
  cx.fillText("E V E N T", 42.5, 58); // Draw the text on the canvas
}
