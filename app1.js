// const Buhari = ("black", "Nigerian", "politician", "alive", "african", "above50", "male"); 
// const Biden = ("american", "white", "politician", "alive", "above50", "male", "west");

function getInput() {
  window.userInput = document.getElementById('userInput').value;
  localStorage.setItem("userEntry", userInput);

  let newData = localStorage.getItem('userEntry');
  alert("Welcome" + " " + newData);
  document.getElementById("user-name").innerHTML = ("Let's Play," + " " + newData);

  var home = document.getElementById("firstSection");
   if (home.style.display === "block") {
   home.style.display = "none";
   } else {
     home.style.display = "none";
   }

    var game = document.getElementById("gameSection");
    if (game.style.display === "none") {
      game.style.display = "block";
    } else {
      game.style.display = "block";
    }

    var score = document.getElementById("marks");
    score.style.visibility = "hidden";
  
}

function clearData() {
  localStorage.clear();
}

var playerInput = JSON.parse(localStorage.getItem("gameInput") || "[]");


function getInput2() {
  const buhari = "black nigerian politician alive african above50 male president west africa father married ";
  var data = document.getElementById('answerText').value;
  if (data.length == 0) {
    alert("Please input answer");
    return;
  }

  var storedResult = localStorage.getItem("gameInput");

  console.log(storedResult);
  
 
  
  if(storedResult == null) {
    if (buhari.includes(data)) {
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
      }, 3000);
      return;
    
    }
    document.getElementById("listUp").innerHTML = data;    
  }
  if(storedResult != null) {
    if(storedResult.includes(data)) {
      alert("You can't input" + " " + data + " " + "again");
      return;
    }
  }
  if (buhari.includes(data)) {
    let score = document.getElementById("correct");
    score.style.visibility = "visible";
    setTimeout(() => {
    score.style.visibility = "hidden";
  }, 3000)
  playerInput.push(data);
  localStorage.setItem("gameInput", JSON.stringify(playerInput));
  } else {
    let score2 = document.getElementById("wrong")
    score2.style.visibility = "visible";
    setTimeout(() => {
      score2.style.visibility = "hidden";
    }, 3000);
    return;
  
  }    


  let guide = localStorage.getItem("gameInput")
  document.getElementById("listUp").innerHTML = guide;

}



