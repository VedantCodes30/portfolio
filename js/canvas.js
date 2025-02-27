class Canvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.squareSize = 90;
    this.resizeCanvas();
    this.drawSquare();
  }

  resizeCanvas() {
    const pixelRatio = window.devicePixelRatio || 1;

    // Get parent dimensions
    const parentWidth = this.canvas.parentElement.offsetWidth;
    const parentHeight = this.canvas.parentElement.offsetHeight;

    // Set actual canvas size considering pixel ratio
    this.canvas.width = parentWidth * pixelRatio;
    this.canvas.height = parentHeight * pixelRatio;

    // Prevent stacking scale transformations
    this.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    // Maintain CSS size
    this.canvas.style.width = parentWidth + "px";
    this.canvas.style.height = parentHeight + "px";

    // Redraw the grid
    this.drawSquare();
  }

  drawSquare() {
    const rows = Math.ceil(this.canvas.height / this.squareSize);
    const columns = Math.ceil(this.canvas.width / this.squareSize);

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        const isGrey = Math.random() < 0.1;
        this.ctx.fillStyle = isGrey ? "rgb(220,220,200" : "transparent";
        this.ctx.fillRect(
          x * this.squareSize,
          y * this.squareSize,
          this.squareSize,
          this.squareSize
        );
        this.ctx.strokeStyle = `rgba(181,181,181,1)`;
        this.ctx.strokeRect(
          x * this.squareSize,
          y * this.squareSize,
          this.squareSize,
          this.squareSize
        );
      }
    }
  }
}

export { Canvas };
