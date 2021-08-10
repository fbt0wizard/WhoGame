// const Buhari = ("black", "Nigerian", "politician", "alive", "african", "above50", "male"); 
// const Biden = ("american", "white", "politician", "alive", "above50", "male", "west");


function getInput() {
  window.userInput = document.getElementById('userInput').value;
  console.log(userInput);
  alertUserInput();
  document.getElementById("user-name").innerHTML = ("Let's Play," + " " + userInput);
  var home = document.getElementById("firstSection");
  if (home.style.display === "none") {
    home.style.display = "block";
  } else {
    home.style.display = "none";
  }

  var game = document.getElementById("gameSection");
  if (game.style.display === "block") {
    game.style.display = "none";
  } else {
    game.style.display = "block";
  }

  var score = document.getElementById("marks");
  score.style.visibility = "hidden";
}

function alertUserInput() {
  alert("Welcome" + " " + userInput);
}

// var subButton = document.getElementById('subButton');
// subButton.addEventListener('click', userInput);

function getInput2() {
  window.userInput2 = document.getElementById('answerText').value;
  console.log(userInput2.length);
  if(userInput2 == 0) {
    alert("Please Input Answer");
    return;
  }
  const buhari = "black nigerian politician alive african above50 male president west africa";
  var data = userInput2;
  console.log(buhari.includes(data));
  if(buhari.includes(data) == true) {
    let score = document.getElementById("correct");
    score.style.visibility = "visible";
    setTimeout(() => {
      score.style.visibility = "hidden";
    }, 3000)
    
  
  } else {
    let score2 = document.getElementById("wrong")
    score2.style.visibility = "visible";
    setTimeout(() => {
      score2.style.visibility = "hidden";
    }, 3000)
  }
    
}



