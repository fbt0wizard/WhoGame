// const Biden = ("american", "white", "politician", "alive", "above50", "male", "west");

function getInput() {
  var userInput = document.getElementById('userInput').value;
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
  location.reload();
}

var playerInput = JSON.parse(localStorage.getItem("gameInput") || "[]");


var playerWorngInput = JSON.parse(localStorage.getItem("wrongInput") || "[]");


function getInput2() {
  const buhari = ["black", "nigerian", "politician", "alive", "african", "above50", "male", "president", "leader", "head of state", "educated", "elected", "west africa", "father", "married", "africa", "buhari", "muhammadu buhari"];
  var fresh = document.getElementById('answerText').value;
  let data = fresh.toLowerCase();
  if (data.length == 0) {
    alert("Please input answer");
    return;
  }

  var storedResult = localStorage.getItem("gameInput");
  var storeWrong = localStorage.getItem("wrongInput");

  console.log(storeWrong);
  
  
   if(data == "buhari" || data == "muhammadu buhari") {
      document.getElementById("guess").innerHTML = "<img src=\"images/buhari.jpg\" width=\"250px\">";
      let newData = localStorage.getItem('userEntry');
      alert("Great job" + " " + newData);
      return;
   }
 


  // if(storedResult == null) {
  //   if (buhari.includes(data)) {
  //     let score = document.getElementById("correct");
  //     score.style.visibility = "visible";
  //     setTimeout(() => {
  //     score.style.visibility = "hidden";
  //   }, 3000)
  //     document.getElementById("listUp").innerHTML = data;
      
  //   } else {
  //     let score2 = document.getElementById("wrong")
  //     score2.style.visibility = "visible";
  //     setTimeout(() => {
  //       score2.style.visibility = "hidden";
  //     }, 3000);

  //   }     
  // }

  if(storedResult != null) {
    if(storedResult.includes(data)) {
      alert("You can't input" + " " + data + " " + "again");
      return;
    }
    
  }

  if(storeWrong != null) {
    if(storeWrong.includes(data)) {
      alert("You can't input" + " " + data + " " + "again");
      return;
    }
  }



  // if(storeWrong == null) {
  //   if (buhari.includes(data)) {
  //     let score = document.getElementById("correct");
  //     score.style.visibility = "visible";
  //     setTimeout(() => {
  //     score.style.visibility = "hidden";
  //   }, 3000)
 
  //   } else {
  //     let score2 = document.getElementById("wrong")
  //     score2.style.visibility = "visible";
  //     setTimeout(() => {
  //       score2.style.visibility = "hidden";
  //     }, 3000);
  //     // playerWorngInput.push(data);
    
  //     // localStorage.setItem("wrongInput", JSON.stringify(playerWorngInput));
  //     // return;
  //   }     
  //  } else {
  //       playerWorngInput.push(data);
    
  //       localStorage.setItem("wrongInput", JSON.stringify(playerWorngInput));
  //       return;
  //  }
  
  if (buhari.includes(data)) {
    let score = document.getElementById("correct");
    score.style.visibility = "visible";
    setTimeout(() => {
    score.style.visibility = "hidden";
  }, 3000)
  playerInput.push(data);
  localStorage.setItem("gameInput", JSON.stringify(playerInput));
  var guide = localStorage.getItem("gameInput");
  var show = JSON.parse(guide);
  document.getElementById("listUp").innerHTML = show.join(', ');

  } else {
    let score2 = document.getElementById("wrong");
    score2.style.visibility = "visible";
    setTimeout(() => {
      score2.style.visibility = "hidden";
    }, 3000);
    playerWorngInput.push(data);
    
    localStorage.setItem("wrongInput", JSON.stringify(playerWorngInput));

    var wrongShow = localStorage.getItem("wrongInput");
    var nowShow = JSON.parse(wrongShow);
    document.getElementById("listUp2").innerHTML = nowShow.join(', ');
  }


  // if(storeWrong.includes(data)) {
  //   alert("You can't input" + " " + data + " " + "again");
  //   return;
  // } else {
  //   playerWorngInput.push(data);
      
  //   localStorage.setItem("wrongInput", JSON.stringify(playerWorngInput));
  //   return;
  // }



  

// if(storedResult != null) {

  
   
   

//   console.log(show.join(', '));
  
   

// }

 }





