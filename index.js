const game = document.getElementById("game");
const totalDisplay = document.getElementById("total");
const newBtn = document.getElementById("newTickets");

let total = 0;


const pool = [
  { value: 5, weight: 80 },
  { value: 10, weight: 20 },
  { value: 20, weight: 15 },
  { value: 30, weight: 10 },
  { value: 100, weight: 5 },
  { value: 200, weight: 1 }
];


const images = [
  "resources/capybara.png",
  "resources/capybara1.png",
  "resources/capybara2.png",
  "resources/homer.png",
];


function pickValue() {
  let sum = pool.reduce((a, b) => a + b.weight, 0);
  let rand = Math.random() * sum;

  for (let item of pool) {
    if (rand < item.weight) return item.value;
    rand -= item.weight;
  }
}


function loadTickets() {
  game.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    const value = pickValue();


    const image = images[Math.floor(Math.random() * images.length)];

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${image}" style="display:none;">
      <div class="cover"></div>
    `;

    const img = card.querySelector("img");
    const cover = card.querySelector(".cover");

    cover.onclick = () => {
      if (cover.style.display === "none") return;

      img.style.display = "block";
      cover.style.display = "none";

      total += value;
      totalDisplay.textContent = `Total Won: $${total}`;
    };
    total = 0
    game.appendChild(card);
  }
}


newBtn.onclick = loadTickets;


loadTickets();