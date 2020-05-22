const rollButton = document.querySelector('#roll-button')
let dieRoll = []
const numberofDice = document.querySelector('#number-of-dice')
const total = document.querySelector('#TotalRolls')
rollButton.addEventListener("click" , function (){
    let numberofRolledDice = numberofDice.value;
    console.log(numberofRolledDice)
    let dice = 0 
    while (dice < numberofRolledDice) {
        dieRoll.push(Math.floor(Math.random() * 6 +1))
        dice += 1
    }
    console.log(dieRoll)
    let sum = dieRoll.reduce(function (a,b){
        return a + b;
    }, 0);
   console.log(sum)
   total.innerHTML = "Total Roll "  +sum
})
const showAllRolls = document.querySelector('#Show-all-Rolls')
const allRollsList = document.querySelector('#All-Rolls')
showAllRolls.addEventListener("click", function () {
    for (let i=0; i < dieRoll.length; i++){
        allRollsList.innerHTML += "<li class='dice'>" + dieRoll[i] +"</li>"
    }
})
const resetButton = document.querySelector("Reset-button")
resetButton.addEventListener("click", function() {
    numberofDice.value = ""
    allRollsList.innerHTML = ""
    dieRoll =[]
})