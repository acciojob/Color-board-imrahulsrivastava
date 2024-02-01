const container = document.querySelector(".container");

for (let i = 0; i < 800; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
  square.addEventListener("mouseenter", changeColor);
  square.addEventListener("mouseleave", revertColor);
}

function changeColor(e) {
  e.target.style.backgroundColor = generateRandomHexCode();
}

function revertColor(e) {
  setTimeout(() => {
    e.target.style.backgroundColor = "rgb(17, 17, 17)";
  }, 1000);
}

function generateRandomHexCode() {
  const characters = "0123456789abcdef";
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    hexCode += characters[Math.floor(Math.random() * 16)];
  }

  return hexCode;
}
