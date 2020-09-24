const rollButton = document.querySelector("#roll-button");
let dieRoll = [];
const total = document.querySelector("#Total-Number-Rolls");
rollButton.addEventListener("click", function () {
  let numberofDice = document.getElementById("number-of-dice").value;
  let numberofRolledDice = numberofDice;
  console.log(numberofRolledDice);

  let dice = 0;
  while (dice < numberofRolledDice) {
    dieRoll.push(Math.floor(Math.random() * 6 + 1));
    dice += 1;
  }
  console.log(dieRoll);

  let sum = dieRoll.reduce(function (a, b) {
    return a + b;
  }, 0);
  console.log(sum);
  total.innerHTML = "Total Roll " + sum;
});

let ShowAllRolls = document.getElementById("Show-All-Rolls");
const allRollsList = document.querySelector("#All-Rolls");
ShowAllRolls.addEventListener("click", function () {
  for (let i = 0; i < dieRoll.length; i++) {
    allRollsList.innerHTML += "<li class='dice'>" + dieRoll[i] + "</li>";
  }
});

const resetButton = document.getElementById("Reset-button");
resetButton.addEventListener("click", function () {
  total.innerHTML = "";
  allRollsList.innerHTML = "";
  dieRoll = [];
});
