
let cards = []
let player = {
  name: "ankit",
  chips: 100
};
let isAlive = false;
let hasBlackJack = false;
let message; 
// let messageEl = document.getElementById("message-el");
// let sumEl = document.querySelector('#sum-el')
// let cardsEl = document.querySelector("#cards-el")
// let playerEl = document.getElementById("player-el")
//playerEl.textContent = player.name + ": $" + player.chips
$("#player-el").text(player.name + ": $" + player.chips)
$('#new-card').hide()
$('#buy-btn').hide()


    function startGame(){
      if (player.chips >= 10) {
          isAlive = true
          hasBlackJack = false
          player.chips -= 10
          $('#start-game').hide()
          $('#new-card').show()
          //playerEl.textContent = player.name + ": $" + player.chips
          $("#player-el").text(player.name + ": $" + player.chips)
          let firstCard = getRandomNumber()
          let secondCard = getRandomNumber()
          cards = [firstCard,secondCard]
          sum = firstCard + secondCard;
    
            renderGame()
      } else {
        // messageEl.innerText = "you don't have enough chips to start the game"
        // messageEl.style.color = "red"
        // $("#message-el").text("you don't have enough chips to start the game").addClass("red");
        $("#message-el").text("you don't have enough chips to start the game").css('color','red')
        $('#buy-btn').show()
        $('#start-game').hide()
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
            $('#start-game').show('slow')
            $('#new-card').hide()
            
           // playerEl.textContent = player.name + ": $" + player.chips
            $("#player-el").text(player.name + ": $" + player.chips)
        }else {
            message = "you're out of the game!"
            isAlive = false;
            $('#start-game').show('slow')
            $('#new-card').hide()

        }
  // messageEl.innerText = message
    if(message == "congratulations! you've got blackjack") {
      $("#message-el").text(message).css('color','goldenrod')
      alert("congratulations! you've got blackjack")

    }else {
      $("#message-el").text(message).css('color','white') 
    }

    
   // sumEl.textContent = "sum: " + sum;
     $("#sum-el").text("sum: " + sum)
   // cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    //cardsEl.textContent = "cards: " + cards;
    $("#cards-el").text("cards: " + cards)
    // console.log(isAlive)
    // console.log(hasBlackJack)

  }
  $(document).ready(function(){
    $('#start-game').click(function(){
      startGame()
    })
  })

  $(document).ready(function(){
    $('#new-card').click(function(){
      newCard()
    })
  })

  $(document).ready(function(){
    $('#buy-btn').click(function(){
      player.chips += 100
      $("#player-el").text(player.name + ": $" + player.chips)
      $('#start-game').show('slow')
      $('#message-el').text("want to try your luck again ??").css('color','goldenrod')
      $(this).hide()
    })
  })
  

  function newCard() { 
      if (isAlive === true && hasBlackJack === false){
        let card = getRandomNumber()
        cards.push(card)
         renderGame()
      } 

}
