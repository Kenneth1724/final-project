const game = document.getElementById("game");
const totalDisplay = document.getElementById("total");
const newBtn = document.getElementById("newTickets");


const pool = [
  { Image: "resources/capybara.png", value: 5, weight: 80 },
  { Image: "resources/capybara.png", value: 10, weight: 20 },
  { Image: "resources/capybara.png", value: 20, weight: 15 },
  { Image: "resources/capybara.png", value: 30, weight: 10 },
  { Image: "resources/capybara.png", value: 100, weight: 5 },
  { Image: "resources/capybara.png",value: 200, weight: 1 }
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
  const ticket = document.getElementById("ticket");
  ticket.innerHTML = "";
  values = [];

  for (let i = 0; i < 8; i++) {

    let reward = getRandomReward();
    values.push(reward);

    let cell = document.createElement("div");
    cell.classList.add("cell");

    cell.innerText = "?";

    cell.addEventListener("click", function () {

      
      cell.innerHTML = `
        <img src="${reward.image}" width="60">
        <p>$${reward.value}</p>
      `;

      cell.style.backgroundColor = "white";

      checkWin();
    });

    ticket.appendChild(cell);
  }
}


newBtn.onclick = loadTickets;


loadTickets();