            /* if else example with litle DOM manipulation*/ 

// let age = 100;
// let msgOut = document.getElementById('msg-out');
// if (age<100) {
//     console.log('not elegible')
//     msgOut.innerText = 'not elegible for card'
// } else if(age == 100) {
//     console.log('here is your card!')
//     msgOut.innerHTML = 'here is your card!'
// }else {
//     console.log('not elegible! you have already gotten one')
//     msgOut.textContent = 'not elegible! you have already gotten one'
// }


$(document).ready(function(){
    $("#hide-btn").click(function(){
      $("h1").hide();
    });
  });

  
    $("#show-btn").click(function(){
      $("h1").show();
    });
  