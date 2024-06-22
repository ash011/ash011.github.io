import dashter from "./q.js";
console.log(dashter);
let count = 0;
dashter.forEach((dirq, i) => {
  let board = document.createElement("div");
  let doska = document.createElement("div");
  let No = document.createElement("h2");

  No.innerText = i + 1

  board.classList.add("board");
  doska.classList.add("doska");
  
  board.appendChild(No);
  board.appendChild(doska);
  document.body.appendChild(board);

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let dasht = document.createElement("div");
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          dasht.classList.add("sev_dasht");
        } else {
          dasht.classList.add("spitak_dasht");
        }
      } else {
        if (j % 2 === 0) {
          dasht.classList.add("spitak_dasht");
        } else {
          dasht.classList.add("sev_dasht");
        }
      }
      if (dirq[i][j] === "Q") {
        let q = document.createElement("img");
        q.src = "./queen.jpg";

        dasht.appendChild(q);
      }
      dasht.classList.add("dasht");
      doska.appendChild(dasht);
      count++;
    }
  }
});
