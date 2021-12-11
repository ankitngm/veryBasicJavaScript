
let cards = []
let player = {
  name: "ankit",
  chips: 100
}
let isAlive = false;
let hasBlackJack = false;
let message 
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

    function startGame(){
      if (player.chips >= 10) {
          isAlive = true
          hasBlackJack = false
          player.chips -= 10
          playerEl.textContent = player.name + ": $" + player.chips
          let firstCard = getRandomNumber()
          let secondCard = getRandomNumber()
          cards = [firstCard,secondCard]
          sum = firstCard + secondCard;
    
            renderGame()
      } else {
        messageEl.style.color = "red";
        messageEl.innerText = "you don't have enough chips to start the game"
      }
      
    }

    function getRandomNumber() {
        let randomNumber = Math.floor(Math.random() * 13 + 1 )
        if (randomNumber >= 10) {
          return 10;
        } else if (randomNumber === 1) {
          return 11;
        } else {
          return randomNumber;
        }
    }
    

  function renderGame() {
    let sum = 0;
      for (let i=0; i<cards.length; i++) {
        sum += cards[i];
      }
     
    if (sum < 21) {
        message = "do you want to draw another card?"
    } else if(sum === 21) {
        message = "congratulations! you've got blackjack"
        hasBlackJack = true;
        player.chips += 100
        playerEl.textContent = player.name + ": $" + player.chips
    }else {
        message = "you're out of the game!"
        isAlive = false;
    }
    messageEl.innerText = message
    sumEl.textContent = "sum: " + sum;
   // cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    cardsEl.textContent = "cards: " + cards;
    console.log(isAlive)
    console.log(hasBlackJack)

  }

  function newCard() { 
      if (isAlive === true && hasBlackJack === false){
        let card = getRandomNumber()
        cards.push(card)
         renderGame()
      } 
       
}
