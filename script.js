const container = document.getElementById("container");
const squares = 800;

for (let i = 0; i < squares; i++) {
  const innerDiv = document.createElement("div");
  innerDiv.className = "square";
  container.appendChild(innerDiv);

  innerDiv.addEventListener("mouseover", () => {
    innerDiv.style.animation = "changing 1s linear forwards";
  });

  innerDiv.addEventListener("mouseout", () => {
    innerDiv.style.animation = "";
  });
}
