import { Canvas } from "./canvas.js";
import { Services } from "./services.js";
import { projects } from "./services.js";

const canvasElements = [...document.querySelectorAll("canvas")];
const aboutTiles = document.querySelector(".about-tiles");
const projectsGrid = document.querySelector(".projects_grid");

const lines = [...document.querySelectorAll(".line")];

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

projects.forEach((project) => {
  let projectDiv = document.createElement("div");
  projectDiv.classList.add("project", "fade-in");
  let image = document.createElement("img");
  image.src = project.image;
  let title = document.createElement("h4");
  title.textContent = project.title;

  let servicesDiv = document.createElement("div");
  servicesDiv.classList.add("project_services");

  project.services.forEach((s) => {
    let service = document.createElement("p");
    service.className = "service";
    service.textContent = s;
    servicesDiv.appendChild(service);
  });

  projectDiv.append(image, title, servicesDiv);
  projectsGrid.appendChild(projectDiv);
});

const options = {
  threshold: 0.2,
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};

const observer = new IntersectionObserver(callback, options);

const fadeIns = [...document.querySelectorAll(".fade-in")];
fadeIns.forEach((el) => observer.observe(el));
lines.forEach((el) => observer.observe(el));

window.addEventListener("resize", () => {
  canvasArray.forEach((canvas) => {
    canvas.resizeCanvas();
    canvas.drawSquare();
  });
});
