// define our function that will allow us to draw to the screen. This will allow us to pass our predictions to this function and pass it through our webcam canvas
// loop through detections using the forEach functions
export const drawRectangle = (detections, ctx) => {
  detections.forEach((prediction) => {
    const [x, y, width, height] = prediction["bbox"];
    const text = prediction["class"];

    //Set styling
    const color = "green";
    ctx.strokeStyle = color;
    ctx.font = "18px Garamond";
    ctx.fillStyle = color;

    // Draw rectangles and text
    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};
