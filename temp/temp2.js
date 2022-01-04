

//    let player1 = {
//       name :  "",
//       chips : 100
//     }
//     let player2 = {
//         name :  "",
//         chips : 100
//     }

let players = []
// function Player(name) {
//     this.name = name;
//     this.chips = 100;
//     this.cards = []
//     this.value = 0
// }
// players[p1:{},p2:{}]
// players[0].p1.name


$('#para2').hide()
$('#btn2').hide()
$('#left-sec').hide()
$('#right-sec').hide()
$('#start-btn').hide()

$("#btn1").click(function () {
    $('#para1').hide()
    $('#btn1').hide()
    $('#para2').show()
    $('#btn2').show()
    createPlayer("name1")
})

$("#btn2").click(function () {
    $('#para2').hide()
    $('#btn2').hide()
    createPlayer("name2")
})

function createPlayer(nameId) {
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    //let playerName= document.getElementById(nameId).value !=undefined ? document.getElementById("name1").value : document.getElementById("name2").value;
    player = { "name": document.getElementById(nameId).value, "chips": 100, "cards": [firstCard, secondCard] }
    player.value = getSum(player.cards);

    // player1 = new Player(document.getElementById("name1").value)
    players.push(player)
    console.log(players)

    // console.log(player1.name)
    //console.log(player1.chips)
    let msg = (players.length > 0 && players.length == 1) ? displayMsgOfPlayerOne(players[0]) : players[1] != undefined ? displayMsgOfPlayerTwo(players[1]) : '';


}
function displayMsgOfPlayerOne(player) {
    $('#player1-el').text(player.name + ": $" + player.chips)
    $('#cards-el1').text("Cards: " + player.cards)
    $('#sum-el1').text("sum: " + player.value)
    $('#left-sec').show()
}
function displayMsgOfPlayerTwo(player) {
    $('#player2-el').text(player.name + ": $" + player.chips)
    $('#cards-el2').text("Cards: " + player.cards)
    $('#sum-el2').text("sum: " + player.value)
    $('#right-sec').show()
}


//     function createPlayer2(){
//        player2 = new Player(document.getElementById("name2").value)
//       //console.log(player2.name)
//       //console.log(player2.chips)
//       $('#player2-el').text(player2.name+ ": $"+player2.chips)
//       let firstCard =getRandomNumber();
//       let secondCard = getRandomNumber();
//       player2.cards = [firstCard,secondCard]
//       //console.log(player2.cards)
//      // let x =  player1.cards.toString()
//       $('#cards-el2').text("Cards: "+ player2.cards)
//       player2.value = getSum(player2.cards)
//       //console.log(player2.value)
//       $('#sum-el2').text("sum: "+ player2.value)

//       $('#right-sec').show()
//       players.push(player2)
//       //console.log(players)
//       $('#start-btn').show()
//   }




function startGame() {
    $('#start-btn').hide()

    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    $('#new-card').show()

    renderGame()
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


function renderGame() {
    let sum = 0;
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i];
    }


    if (sum < 21) {
        message = "do you want to draw another card?"
    } else if (sum === 21) {
        message = "congratulations! you've got blackjack"
        hasBlackJack = true;
        //player.chips += 100
        $('#start-game').show('slow')
        $('#new-card').hide()
        $("#player-el").text(player.name + ": $" + player.chips)
    } else {
        message = "you're out of the game!"
        isAlive = false;
        $('#start-game').show('slow')
        $('#new-card').hide()

    }

    if (message == "congratulations! you've got blackjack") {
        $("#message-el").text(message).css('color', 'goldenrod')
        alert("congratulations! you've got blackjack")

    } else {
        $("#message-el").text(message).css('color', 'white')
    }

}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomNumber()
        cards.push(card)
        renderGame()
    }
}
// for(let i=0;i<players.length+1;i++){
//     let firstCard = getRandomNumber();
//     let secondCard = getRandomNumber();
//      player = { "name": i, "chips": 100, "cards": [firstCard, secondCard] }
//     player.cards= [firstCard, secondCard]
//     player.value = getSum(player.cards)
//     players[i]=player;
//   //  $('#sum-el'+i).text("sum: " + player.value)
// }