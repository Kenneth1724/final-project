const game = document.getElementById("game");
const totalDisplay = document.getElementById("total");
const newBtn = document.getElementById("newTickets");

let total = 0;
7


const images = [
  "resources/capybara.png",
  "resources/capybara1.png",
  "resources/capybara2.png",
  "resources/watermelon.png",
  "resources/carrot.png",
  "resources/lettuce.png",
  "resources/homer.png",
];


function pickValue() {
  let rand = Math.random(1, 100) * 100;
  let sumy = Math.floor(rand);
  return sumy;
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
      console.log(images[3]);
      console.log(`${img.src}`);
    
      if ((img.src.includes("resources/capybara.png") || img.src.includes("resources/capybara1.png") || img.src.includes("resources/capybara2.png"))) {  
        total += value;
        totalDisplay.textContent = `Total Won: $${total}`;
      }
    }
    total = 0
    game.appendChild(card);
  }
}


loadTickets()