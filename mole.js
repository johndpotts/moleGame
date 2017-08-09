
document.getElementById("startButton").addEventListener("click", function start() {
  var time = setInterval(moveMole, 1000);
  game();
  document.getElementById("stopButton").addEventListener("click", function stop() {
    clearInterval(time)
  });
});

let score = 0;
let moleSlot = 1;


function game() {
  for (let i = 1; i < 10; i++) {
    let theBox = document.querySelector('#box__' + i);
    theBox.addEventListener('click', function checkForMole() {
      if (moleSlot === i) {
        increaseScore();
      }
    });
  }
}

function increaseScore() {
  score = score + 1;
  let scoreSpot = document.querySelector('#score');
  scoreSpot.textContent = score;
}

function moveMole() {
  let oldMole = document.querySelector('#box__' + moleSlot);
  oldMole.classList.remove('mole');
  moleSlot = Math.ceil(Math.random() * 9);
  let newMole = document.querySelector('#box__' + moleSlot);
  newMole.classList.add('mole');
}
/*to-do:
1. add start/stop button
2. change mole picture (add jquery?)
3. */

