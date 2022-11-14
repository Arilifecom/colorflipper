
const colors = [
  "#ffd1d1","#ffe0e0","#ffe0ef","#ffe0ff","#efe0ff","#e0e0ff","#e0efff","#e0ffff","#e0ffef","#e0ffe0","#efffe0",
  "#ffffe0"," #ffefe0","#ffd1e8","#ffd1ff","#e8d1ff","#d1d1ff","#d1e8ff","#d1ffff","#d1ffe8","#d1ffd1","#e8ffd1","#ffffd1","#ffe8d1"
  ];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
