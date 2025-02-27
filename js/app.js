import { Canvas } from "./canvas.js";
import { Services } from "./services.js";

const canvasElements = [...document.querySelectorAll("canvas")];
const aboutTiles = document.querySelector(".about-tiles");

let canvasArray = [];

canvasElements.forEach((canvas) => {
  let squareCanvas = new Canvas(canvas);
  canvasArray.push(squareCanvas);
});

Services.forEach((service) => {
  let title = document.createElement("div");
  title.classList.add("service_title");

  let icon = document.createElement("div");
  icon.innerHTML = service.icon;
  title.appendChild(icon);

  let serviceTitle = document.createElement("h4");
  serviceTitle.textContent = service.title;
  let serviceDescription = document.createElement("p");
  serviceDescription.textContent = service.description;
  title.append(serviceTitle, serviceDescription);

  aboutTiles.appendChild(title);
});

window.addEventListener("resize", () => {
  canvasArray.forEach((canvas) => {
    canvas.resizeCanvas();
    canvas.drawSquare();
  });
});
