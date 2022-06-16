var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Hide container-1 and display container-2
function evaluateCard(isChanceCard) {
  if(isChanceCard == false) {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "block";
  }
}

// Get random card

var isChanceCard = 0;

function getRandomCard() {
  x = Math.floor(Math.random() * 15 + 1);
  if(isChanceCard == true) {
    var result = document.getElementById("randomChanceCard");
    switch (x) {
      case 1: result.innerHTML="<img alt='Ereigniskarte' src='images/Ereigniskarte_01.jpeg'>"; break;
      case 2: result.innerHTML="<img alt='Ereigniskarte' src='images/Ereigniskarte_02.jpeg'>"; break;
      case 3: result.innerHTML="<img alt='Ereigniskarte' src='images/Ereigniskarte_03.jpeg'>"; break;
      case 4: result.innerHTML="<img alt='Ereigniskarte' src='images/Ereigniskarte_04.jpeg'>"; break;
      case 5: result.innerHTML="<img alt='Ereigniskarte' src='images/Ereigniskarte_05.jpeg'>"; break;
      case 6: result.innerHTML="<img alt='Ereigniskarte' src='images/Ereigniskarte_06.jpeg'>"; break;
      case 7: result.innerHTML="<img alt='Ereigniskarte' src='images/Ereigniskarte_07.jpeg'>"; break;
      case 8: result.innerHTML="<img alt='Ereigniskarte' src='images/Ereigniskarte_08.jpeg'>"; break;
      case 9: result.innerHTML="<img alt='Ereigniskarte' src='images/Ereigniskarte_09.jpeg'>"; break;
      case 10: result.innerHTML="<img alt='Ereigniskarte' src='images/Ereigniskarte_10.jpeg'>"; break;
      case 11: result.innerHTML="<img alt='Ereigniskarte' src='images/Ereigniskarte_11.jpeg'>"; break;
      case 12: result.innerHTML="<img alt='Ereigniskarte' src='images/Ereigniskarte_12.jpeg'>"; break;
      case 13: result.innerHTML="<img alt='Ereigniskarte' src='images/Ereigniskarte_13.jpeg'>"; break;
      case 14: result.innerHTML="<img alt='Ereigniskarte' src='images/Ereigniskarte_14.jpeg'>"; break;
      case 15: result.innerHTML="<img alt='Ereigniskarte' src='images/Ereigniskarte_15.jpeg'>"; break;
    }
  }
  else {
    var result = document.getElementById("randomCommunityChestCard");
    switch (x) {
      case 1: result.innerHTML="<img alt='Gemeinschaftskarte' src='images/Gemeinschaftskarte_01.jpeg'>"; break;
      case 2: result.innerHTML="<img alt='Gemeinschaftskarte' src='images/Gemeinschaftskarte_02.jpeg'>"; break;
      case 3: result.innerHTML="<img alt='Gemeinschaftskarte' src='images/Gemeinschaftskarte_03.jpeg'>"; break;
      case 4: result.innerHTML="<img alt='Gemeinschaftskarte' src='images/Gemeinschaftskarte_04.jpeg'>"; break;
      case 5: result.innerHTML="<img alt='Gemeinschaftskarte' src='images/Gemeinschaftskarte_05.jpeg'>"; break;
      case 6: result.innerHTML="<img alt='Gemeinschaftskarte' src='images/Gemeinschaftskarte_06.jpeg'>"; break;
      case 7: result.innerHTML="<img alt='Gemeinschaftskarte' src='images/Gemeinschaftskarte_07.jpeg'>"; break;
      case 8: result.innerHTML="<img alt='Gemeinschaftskarte' src='images/Gemeinschaftskarte_08.jpeg'>"; break;
      case 9: result.innerHTML="<img alt='Gemeinschaftskarte' src='images/Gemeinschaftskarte_09.jpeg'>"; break;
      case 10: result.innerHTML="<img alt='Gemeinschaftskarte' src='images/Gemeinschaftskarte_10.jpeg'>"; break;
      case 11: result.innerHTML="<img alt='Gemeinschaftskarte' src='images/Gemeinschaftskarte_11.jpeg'>"; break;
      case 12: result.innerHTML="<img alt='Gemeinschaftskarte' src='images/Gemeinschaftskarte_12.jpeg'>"; break;
      case 13: result.innerHTML="<img alt='Gemeinschaftskarte' src='images/Gemeinschaftskarte_13.jpeg'>"; break;
      case 14: result.innerHTML="<img alt='Gemeinschaftskarte' src='images/Gemeinschaftskarte_14.jpeg'>"; break;
      case 15: result.innerHTML="<img alt='Gemeinschaftskarte' src='images/Gemeinschaftskarte_15.jpeg'>"; break;
    }
  }
  console.log(x);
}

btn.addEventListener('click', () => {
  getRandomCard(); 
});

evaluateCard(isChanceCard);
getRandomCard();