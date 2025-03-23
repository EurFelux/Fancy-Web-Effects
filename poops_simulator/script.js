const toilet = document.getElementById("toilet");
const poops = document.getElementById("poops");
const face = document.getElementById("face");
let count = 0;

poops.addEventListener("dragstart", (event) => {
  face.innerHTML = "😧";
  dragging = true;
  console.log("dragstart");
});

poops.addEventListener("dragend", (event) => {
  if (face.innerHTML === "😧") {
    face.innerHTML = "😄";
  }
  dragging = false;
  console.log("dragend");
});

face.addEventListener("dragover", (event) => {
  console.log("dragover");
  event.preventDefault();
});

face.addEventListener("dragenter", (event) => {
  face.innerHTML = "😨";
  face.classList.add("vibrating");
  console.log("dragenter");
});

face.addEventListener("dragleave", (event) => {
  face.innerHTML = "😧";
  face.classList.remove("vibrating");
  console.log("dragleave");
});

face.addEventListener("drop", (event) => {
  face.innerHTML = "🤢";
  face.classList.remove("vibrating");
  count++;
  document.getElementById("counter").innerHTML = count;
  console.log("drop");
});

face.addEventListener("click", (event) => {
  if (face.innerHTML === "🤢") {
    face.innerHTML = "🤮";
  } else if (face.innerHTML === "🤮") {
    face.innerHTML = "😅";
  } else if (face.innerHTML === "😅") {
    if (face.classList.contains("punch")) {
      return;
    }
    face.classList.add("punch");
    const audio = new Audio("./重いパンチ2.mp3");
    audio.play();
    setTimeout(() => {
      face.classList.remove("punch");
    }, 500);
  }
});
