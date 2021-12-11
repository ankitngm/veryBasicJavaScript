let firstCard = 2;
let secondCard = 3;
let cards = [firstCard, secondCard]

let isAlive = true;
let hasBlackJack = false;
let message = '';
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector("#cards-el")

    function startGame(){
        renderGame()
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
       let card = 6;
       cards.push(card)
        renderGame()
}
