

//    let player1 = {
//       name :  "",
//       chips : 100
//     }
//     let player2 = {
//         name :  "",
//         chips : 100
//     }

let players = []

class Player {
  constructor(name) {
    this.name = name;
    this.chips = 100;
    this.cards = [];
    this.value = 0;
    this.alive = false;
    this.hasBlackJack = false;
    this.message = ''
    this.turn = false;
  }
}

/*jquery*/{
  $('.player2-side').hide()
  $('#player1-sec').hide()
  $('.player1-buttons').hide()
  $('.player2-buttons').hide()
  $('#start-btn').hide()
  $('#player1-busted').hide()
  $('#player2-busted').hide()

  $("#intro-btn1").click(function () {
    if (document.getElementById('name1').value == "") {
      alert("name cannot be Blank!")
    } else {
      $('.player1-side').hide()
      $('.player2-side').show()
      $('#player2-sec').hide()
      $('#intro-para1').hide()
      $('#intro-btn1').hide()
      createPlayer("name1")
    }

  })

  $("#intro-btn2").click(function () {
    if (document.getElementById("name2").value == "") {
      alert("name can not be Blank!")
    }
    else {
      $('#intro-para2').hide()
      $('#intro-btn2').hide()
      createPlayer("name2")
      $('#dealer-msg').text("lets start the game now!")
      $("#start-btn").show()
    }

  })

  $('#player1-hit').click(function () {
    newCard(players[0]);
    update()
  })

  $('#player2-hit').click(function () {
    newCard(players[1])
    update()
  })

  $("#start-btn").click(function () {
    startGame()
  })

  $('#player2-stand').click(function () {
    players[1].turn = false
    finalResult()
  })

  $('#player1-stand').click(function () {
    console.log("player1 stand pressed")
    players[0].turn = false
    players[1].turn = true
    renderGame(players[1])
  })
}

function createPlayer(nameId) {
  let player = new Player(document.getElementById(nameId).value)
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  player.cards = [firstCard, secondCard]
  player.value = getSum(player.cards)
  players.push(player)
  console.log(players)
  // console.log(player1.name)
  //console.log(player1.chips)
  //console.log(player1.cards)
  //console.log(player1.value)
  // let x =  player1.cards.toString()
}


function startGame() {
  $('#start-btn').hide()
  $('#dealer-msg').text("Game started")
  for (let i = 0; i < players.length; i++) {
    //console.log(players[i].name
    players[i].alive = true
    $(`#player${i + 1}-el`).text(players[i].name + ": $" + players[i].chips)
    $(`#cards-el${i + 1}`).text("Cards: " + players[i].cards)
    $(`#sum-el${i + 1}`).text("sum: " + players[i].value)
    $(`.player${i + 1}-side`).show()
    $(`#player${i + 1}-sec`).show()
    //renderGame(players[i])
  }
  players[0].turn = true
  renderGame(players[0])
}

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13 + 1)
  if (randomNumber >= 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function getSum(cards) {
  let sum = 0;
  for (let i = 0; i < cards.length; i++) {
    sum += cards[i];
  }
  return sum;
}


function renderGame(player) {
  // let sum = 0;
  // for (let i = 0; i < cards.length; i++) {
  //   sum += cards[i];
  // }
  for (let i = 0; i < players.length; i++) {
    if (players[i].turn == true) {
      $(`.player${i + 1}-buttons`).show()
    } else {
      $(`.player${i + 1}-buttons`).hide()
    }
  }

  if (player.value < 21) {
    player.message = "do you want to draw another card?"
  } else if (player.value === 21) {
    player.message = "congratulations! you've got blackjack"
    player.hasBlackJack = true;
    //player.chips += 100
    //$('#start-game').show('slow')
    // $('#new-card').hide()
    // $("#player-el").text(player.name + ": $" + player.chips)
  } else {
    player.message = "you're out of the game!"
    for (let i = 0; i < players.length; i++) {
      if (players[i].turn == true) {
        $(`#player${i + 1}-busted`).show()
      }
    }
    player.alive = false;
    player.turn = false;
    let nextPlayer = players.indexOf(player) + 1
    console.log(`${nextPlayer}`)
    update()
    players[nextPlayer].turn = true;
    // $('#start-game').show('slow')
    // $('#new-card').hide()

  }

  dealer(player)

  // if (player.message == "congratulations! you've got blackjack") {
  //   $("#dealer-msg").text(player.name + " " + player.message).css('color', 'goldenrod')
  //   alert("congratulations! you've got blackjack")

  // } else {
  //   $("#dealer-msg").text(player.name + " " + player.message).css('color', 'white')
  // }

}

function dealer(player) {

  if (player.message == "congratulations! you've got blackjack") {
    $("#dealer-msg").text(player.name + " " + player.message).css('color', 'goldenrod')
    alert("congratulations! you've got blackjack")

  } else if (player.message == "you're out of the game!") {
    $("#dealer-msg").text(player.name + " " + player.message).css('color', 'white')
    $('.player1-buttons').hide()
    renderGame(players[1])
  } else {
    $("#dealer-msg").text(player.name + " " + player.message).css('color', 'white')
  }
}


function newCard(player) {
  console.log("newcard function called")
  //console.log(players[0].cards)
  if (player.alive === true && player.hasBlackJack === false && player.turn == true) {
    let card = getRandomNumber()
    player.cards.push(card)
    player.value = getSum(player.cards)
    console.log(player.value)
    renderGame(player)
  }
}

function update() {
  //console.log("updated")
  //console.log(players.length)
  for (let i = 0; i < players.length; i++) {
    // console.log(`update Loop ran ${i}`)
    // console.log(players[i].name)
    $(`#player${i + 1}-el`).text(players[i].name + ": $" + players[i].chips)
    $(`#cards-el${i + 1}`).text("Cards: " + players[i].cards)
    $(`#sum-el${i + 1}`).text("sum: " + players[i].value)
  }
}

function finalResult() {
  // let j;
  // let k;
  // for (let i = 0; i < players.length; i++) {
  //   j = players[i].value
  //   for(let i = 0; i<(players.length-1); i++){
  //     k = players[i].value
  //   }
  // }
  // if(k>j && ){
  //   $("#dealer-msg").text("ankit wins")
  // }else if(j>k && players[1].value < 22){
  //   $("#dealer-msg").text("akshay wins")
  // } else {
  //   $("#dealer-msg").text("its a draw")
  // }
  console.log("final result called")
  let playersAlive = []

  for (let i = 0; i < players.length; i++) {
    if (players[i].alive == true) {
      playersAlive.push(players[i])
    }
  }
  let max = 0;
  for (let i = 0; i < playersAlive.length; i++) {
    if (max < playersAlive[i].value) {
      max = playersAlive[i].value
    }
  }
  for (let i = 0; i < playersAlive.length; i++) {
    if (playersAlive[i].value == max) {
      $('#dealer-msg').text(playersAlive[i].name + " " + "wins")
    }
  }
}
