document.addEventListener("DOMContentLoaded", () => {
  console.log("Burger Planner Ready 🚀");
});

function buildBurger() {
  const p = document.getElementById("protein").value;
  const t = document.getElementById("toppings").value;
  const s = document.getElementById("sauce").value;

  document.getElementById("output").innerText =
    `🔥 ${p} burger with ${t} + ${s}`;
}

function smoothie() {
  const list = [
    "Strawberry Banana 🍓",
    "Mango Pineapple 🥭",
    "Blueberry Protein 🫐"
  ];

  document.getElementById("smoothie").innerText =
    list[Math.floor(Math.random() * list.length)];
}

function salad() {
  const list = [
    "Caesar Salad 🥗",
    "Avocado Mix 🥑",
    "Mediterranean 🧀"
  ];

  document.getElementById("salad").innerText =
    list[Math.floor(Math.random() * list.length)];
}
