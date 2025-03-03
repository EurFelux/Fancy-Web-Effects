const container = document.querySelector(".magnifier-container");
const image = container.querySelector(".magnifier-image");
const zoomArea = document.querySelector(".zoom-area");

zoomArea.style.background = `url(${image.src}) no-repeat`;

container.addEventListener("mousemove", (e) => {
  const { left, top, width, height } = container.getBoundingClientRect();
  const { clientX, clientY } = e;

  // relative to the container
  const mouseX = clientX - left;
  const mouseY = clientY - top;

  const zoomAreaWidth = zoomArea.offsetWidth;
  const zoomAreaHeight = zoomArea.offsetHeight;
  zoomArea.style.left = `${mouseX - zoomAreaWidth / 2}px`;
  zoomArea.style.top = `${mouseY - zoomAreaHeight / 2}px`;

  const scale = 2;

  // relative to the zoomArea
  const bgX = -(mouseX * scale - zoomAreaWidth / 2);
  const bgY = -(mouseY * scale - zoomAreaHeight / 2);
  zoomArea.style.backgroundPosition = `left ${bgX}px top ${bgY}px`;
  zoomArea.style.backgroundSize = `${scale * width}px ${scale * height}px`;
});
