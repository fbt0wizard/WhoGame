const userName = [];

function playAgain() {
  if(randomArray.length == 6) {
    gameComplete();
    return;
  }
  document.getElementById("answerText").value = "";
  var win = document.getElementById("winSection");
    if (win.style.display === "block") {
      $("#winSection").fadeOut(500);
    } else {
      $("#winSection").fadeOut(500);
    }
  
    var game = document.getElementById("welcomeScreen");
    if (game.style.display === "none") {
      $("#welcomeScreen").fadeIn(500);
    } else {
      $("#welcomeScreen").fadeIn(500);
    }
  
    var score = document.getElementById("marks");
    score.style.visibility = "hidden";

    clearRight();
    checker();
    clearCounter();

    document.getElementById("listUp").innerHTML = "";
    document.getElementById("listUp2").innerHTML = "";
    document.getElementById("counter").innerHTML = "0";

}

function fail() {
  document.getElementById("answerText").value = "";
  var win = document.getElementById("playerFail");
    if (win.style.display === "block") {
      $("#playerFail").fadeOut(500);
    } else {
      $("#playerFail").fadeOut(500);
    }
  
    var game = document.getElementById("gameSection");
    if (game.style.display === "none") {
      $("#gameSection").fadeIn(500);
    } else {
      $("#gameSection").fadeIn(500);
    }
  
    var score = document.getElementById("marks");
    score.style.visibility = "hidden";

    clearRight();
    checker();
    clearCounter();

    document.getElementById("listUp").innerHTML = "";
    document.getElementById("listUp2").innerHTML = "";
    document.getElementById("counter").innerHTML = "0";

}

function reset() {
  var win = document.getElementById("gameSection");
    if (win.style.display === "block") {
      $("#gameSection").fadeOut(500);
    } else {
      $("#gameSection").fadeOut(500);
    }
  
    var game = document.getElementById("welcomeScreen");
    if (game.style.display === "none") {
      $("#welcomeScreen").fadeIn(500);
    } else {
      $("#welcomeScreen").fadeIn(500);
    }
  
    var score = document.getElementById("marks");
    score.style.visibility = "hidden";

    clearRight();
    checker();
    clearCounter();

    document.getElementById("listUp").innerHTML = "";
    document.getElementById("listUp2").innerHTML = "";
    document.getElementById("counter").innerHTML = "0";
}

function gameComplete() {
  document.getElementById("final").innerHTML = userName;
  var win = document.getElementById("winSection");
    if (win.style.display === "block") {
      $("#winSection").fadeOut(500);
    } else {
      $("#winSection").fadeOut(500);
    }
  
    var game = document.getElementById("suggestion");
    if (game.style.display === "none") {
      $("#suggestion").fadeIn(500);
    } else {
      $("#suggestion").fadeIn(500);
    }
  
    var score = document.getElementById("marks");
    score.style.visibility = "hidden";
}



function getInput() {
    var userInput = document.getElementById('userInput').value;
    userName.push(userInput);
  
    if (userInput.length == 0) {
      document.getElementById("warning").innerHTML = "Please input your name!!!";
      return;
    }
  
    document.getElementById("playerName").innerHTML = userName;
    document.getElementById("user-name").innerHTML = ("Let's Play," + " " + userName);
  
     var home = document.getElementById("firstSection");

     if (home.style.display === "block") {
      $("#firstSection").fadeOut(500);
      

 
     } else {
       $("#firstSection").fadeOut(500);
     }
  
     var game = document.getElementById("welcomeScreen");
    
     if (game.style.display === "none") {
  
      $("#welcomeScreen").fadeIn(500);
      
     } else {
       $("#welcomeScreen").fadeIn(500);
     }
    
    var score = document.getElementById("marks");
    score.style.visibility = "hidden";
  
    document.getElementById("userInput").value = "";
  
  
  }


var randomArray = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function openGame() {
    let randomGen = getRandomInt((6));
    console.log(randomGen);
    if(randomArray.includes(randomGen)) {
        openGame();
    } else {
    randomArray.push(randomGen);
    }

     var home = document.getElementById("welcomeScreen");
     if (home.style.display === "block") {
      $("#welcomeScreen").fadeOut(500);
      } else {
        $("#welcomeScreen").fadeOut(500);
      }
  
        var game = document.getElementById("gameSection");
        if (game.style.display === "none") {
          $("#gameSection").fadeIn(500);
        } else {
          $("#gameSection").fadeIn(500);
  
          document.getElementById("answerText").value = "";
        }


  }

  var myFunctionCalls = 0;

  function clearCounter(){
    myFunctionCalls = 0
  }


  let rightInput = [];
  let wrongInput = [];

  function clearRight() {
    rightInput.splice(0, rightInput.length);
    wrongInput.splice(0, wrongInput.length);
  }

  function checker () {
    console.log(rightInput);
    console.log(wrongInput);
  }

  function getInput2() {

    var randomNum = randomArray[randomArray.length - 1];

    console.log(randomNum);

    let buhar = ["black", "nigerian", "current president", "nigeria", "politician", "alive", "african", "africa",
      "above50", "male", "president", "leader", "head of state", "educated", "elected", "west africa",
      "father", "married", "africa", "west african"];
  
    let joeBiden = ["white", "president", "above50", "leader", "educated", "elected", "alive", "current president", "politician",
      "male", "america", "american", "usa", "united states", "united state of america", "father", "married"]
  
    let justinBieber = ["male", "celebrity", "singer", "beauty and a beat", "below50", "pop", "r and b", "r & b", "r&b", "canadian", "canada", "alive", "grammy",
      "singer", "songwriter", "song writer", "educated", "lives in america", "lives in usa", "musician", "wealthy", "rich", "sorry", "Baby", "Boyfriend", "i'm the one", "no brainer", "Intentions"]
  
    let rihana = ["female", "barbados", "lives in america", "black", "grammy", "singer", "celebrity", "below50", "barbadian", "pop",
      "r&b", "r and b", "reggae", "umbrella", "take a bow", "love the way you lie", "wild thoughts", "diamond", "diamonds", "whats my name", "we found love", "alive", "musician"]
  
    let michealJ = ["dead", "black", "musician", "singer", "lived in america", "male", "celebrity", "pop", "american", "america", "dancer", "father", "soul", "rock", "disco", "blues",
      "grammy", "beat it", "rock with you"]

    let tupac = ["dead", "black", "musician", "rapper", "rap", "lived in america", "male", "celebrity", "hiphop", "hip hop", "american", "america", "father", "below50", "hit em up", "all eyes on me",
      "califonia love", "dear mama", "changes", "ghetto gospel", "so many tears", "only fear of death", "grammy", "beat it", "rock with you"]
  
    if (randomNum == 0) {
      var character = buhar;
    }
  
    if (randomNum == 1) {
      var character = joeBiden;
    }
  
    if (randomNum == 2) {
      var character = justinBieber;
    }
  
    if (randomNum == 3) {
      var character = rihana;
    }
  
    if (randomNum == 4) {
      var character = michealJ;
    }

    if (randomNum == 5) {
      var character = tupac;
    }
  
  
    var fresh = document.getElementById('answerText').value;
    let data = fresh.toLowerCase();
  
    if (data.length == 0) {
      document.getElementById("warning2").innerHTML = "Please input your answer!!!";
      return;
    }
  
    if (data.length > 0) {
      document.getElementById("warning2").innerHTML = " ";
    }

  
    // for Buhari
    if (randomNum == 0) {
      if (data.includes("buhari") || data.includes("muhammadu buhari")) {
        let newData = localStorage.getItem('userEntry');
        document.getElementById("pName").innerHTML = newData;
        document.getElementById("characterImg").innerHTML = "<img src=\"images/buhari.jpg\" width=\"250px\">";
        document.getElementById("aboutChar").innerHTML = ("Muhamemmed Buhari is the president of Nigeria")
  
        var home = document.getElementById("gameSection");
        if (home.style.display === "block") {
          $("#gameSection").fadeOut(1000);
        } else {
          $("#gameSection").fadeOut(1000);
        }
  
        var game = document.getElementById("winSection");
        if (game.style.display === "none") {
          $("#winSection").fadeIn(1000);
        } else {
          $("#winSection").fadeIn(1000);
  
        }
  
  
  
        return;
      }
    }
  
    //for Biden
    if (randomNum == 1) {
  
      if (data.includes("biden") || data.includes("joe biden")) {
        let newData = localStorage.getItem('userEntry');
        document.getElementById("pName").innerHTML = newData;
        document.getElementById("characterImg").innerHTML = "<img src=\"images/biden.jpg\" width=\"250px\">";
        document.getElementById("aboutChar").innerHTML = ("Joe Biden is the president of USA")
  
        var game = document.getElementById("gameSection");
        if (game.style.display === "block") {
          $("#gameSection").fadeOut(1000);
        } else {
          $("#gameSection").fadeOut(1000);
        }
        var game = document.getElementById("winSection");
        if (game.style.display === "none") {
          $("#winSection").fadeIn(1000);
        } else {
          $("#winSection").fadeIn(1000);
  
        }
  
  
        return;
      }
    }
  
    //for Justin bieber
    if (randomNum == 2) {
  
      if (data.includes("justin") || data.includes("bieber")) {
        let newData = localStorage.getItem('userEntry');
        document.getElementById("pName").innerHTML = newData;
        document.getElementById("characterImg").innerHTML = "<img src=\"images/justin.jpg\" width=\"250px\">";
        document.getElementById("aboutChar").innerHTML = ("Justin Bieber is a canadian born song writer")
  
        var game = document.getElementById("gameSection");
        if (game.style.display === "block") {
          $("#gameSection").fadeOut(1000);
        } else {
          $("#gameSection").fadeOut(1000);
        }
        var game = document.getElementById("winSection");
        if (game.style.display === "none") {
          $("#winSection").fadeIn(1000);
        } else {
          $("#winSection").fadeIn(1000);
  
        }
  
        return;
      }
    }
    // Rihanna
    if (randomNum == 3) {
      if (data.includes("rihanna")) {
        let newData = localStorage.getItem('userEntry');
        document.getElementById("pName").innerHTML = newData;
        document.getElementById("characterImg").innerHTML = "<img src=\"images/rihana.jpg\" width=\"250px\">";
        document.getElementById("aboutChar").innerHTML = ("")
  
        var game = document.getElementById("gameSection");
        if (game.style.display === "block") {
          $("#gameSection").fadeOut(1000);
        } else {
          $("#gameSection").fadeOut(1000);
        }
        var game = document.getElementById("winSection");
        if (game.style.display === "none") {
          $("#winSection").fadeIn(1000);
        } else {
          $("#winSection").fadeIn(1000);
  
        }
  
  
        return;
      }
    }
  
    // Micheal jackson
    if (randomNum == 4) {
      if (data.includes("micheal jackson")) {
        let newData = localStorage.getItem('userEntry');
        document.getElementById("pName").innerHTML = newData;
        document.getElementById("characterImg").innerHTML = "<img src=\"images/micheal.jpg\" width=\"250px\">";
        document.getElementById("aboutChar").innerHTML = ("Micheal Joseph Jackson is an American pop singer and dancer")
  
        var game = document.getElementById("gameSection");
        if (game.style.display === "block") {
          $("#gameSection").fadeOut(1000);
        } else {
          $("#gameSection").fadeOut(1000);
        }
        var game = document.getElementById("winSection");
        if (game.style.display === "none") {
          $("#winSection").fadeIn(1000);
        } else {
          $("#winSection").fadeIn(1000);
  
        }
  
  
        return;
      }
    }
  
    // 2pac
    if (randomNum == 5) {
      if (data.includes("2pac") || data.includes("tupac") || data.includes("2pac shakur") || data.includes("Tupac shakur")) {
        let newData = localStorage.getItem('userEntry');
        document.getElementById("pName").innerHTML = newData;
        document.getElementById("characterImg").innerHTML = "<img src=\"images/2pac.jpg\" width=\"250px\">";
        document.getElementById("aboutChar").innerHTML = ("Tupac Shakur is a late black American Rapper")
  
        var game = document.getElementById("gameSection");
        if (game.style.display === "block") {
          $("#gameSection").fadeOut(1000);
        } else {
          $("#gameSection").fadeOut(1000);
        }
        var game = document.getElementById("winSection");
        if (game.style.display === "none") {
          $("#winSection").fadeIn(1000);
        } else {
          $("#winSection").fadeIn(1000);
  
        }
  
  
        return;
      }
    }
  
  
  
  
    if (rightInput != null) {
      if (rightInput.includes(data)) {
        document.getElementById("warning2").innerHTML = ("You can't input" + " " + data + " " + "again!!!");
        document.getElementById("answerText").value = "";
        return;
      }
  
    }
  
  
    if (wrongInput != null) {
      if (wrongInput.includes(data)) {
        document.getElementById("warning2").innerHTML = ("You can't input" + " " + data + " " + "again!!!");
        document.getElementById("answerText").value = "";
        return;
      }
    }
  
    myFunctionCalls++;
  
    let life = myFunctionCalls;
  
    if (myFunctionCalls > 15) {
      
      let looser = userName;
      console.log(looser);
      document.getElementById("lost").innerHTML = looser;
  
      var game = document.getElementById("gameSection");
      if (game.style.display === "block") {
        $("#gameSection").fadeOut(500);
      } else {
        $("#gameSection").fadeOut(500);
      }
  
      var game = document.getElementById("playerFail");
      if (game.style.display === "none") {
        $("#playerFail").fadeIn(500);
      } else {
        $("#playerFail").fadeIn(500);
  
      }
  
      return;
    } else {
      document.getElementById("counter").innerHTML = life;
    }
  
  
    if (character.includes(data)) {
      let score = document.getElementById("correct");
      score.style.visibility = "visible";
      setTimeout(() => {
        score.style.visibility = "hidden";
      }, 3000)
      let newData = data.toString()
      console.log(newData);
  
      rightInput.push(newData);
      var show = rightInput;
      document.getElementById("listUp").innerHTML = show.join(', ');
  
    } else {
      let score2 = document.getElementById("wrong");
      score2.style.visibility = "visible";
      setTimeout(() => {
        score2.style.visibility = "hidden";
      }, 3000);
      let newData = data.toString()
      console.log(newData);
      wrongInput.push(newData);
  
      var nowShow = wrongInput;
      document.getElementById("listUp2").innerHTML = nowShow.join(', ');
    }
  
    document.getElementById("answerText").value = "";
  
  
  
  }
  

