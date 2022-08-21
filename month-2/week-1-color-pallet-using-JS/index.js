let button = document.querySelector("button");
let h2elem = document.querySelector("h2");
let bgColor = document.getElementsByClassName("container-1")[0];

button.addEventListener("click", () => {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8);

  bgColor.style.backgroundColor = color;
  h2elem.innerHTML = color;
});
