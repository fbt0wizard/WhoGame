

function getInput() {
  var userInput = document.getElementById('userInput').value;
  localStorage.setItem("userEntry", userInput);

  if (userInput.length == 0) {
    document.getElementById("warning").innerHTML = "Please input your name!!!";
    return;
  }

  let newData = localStorage.getItem('userEntry');
  document.getElementById("playerName").innerHTML = newData;
  document.getElementById("user-name").innerHTML = ("Let's Play," + " " + newData);

  var home = document.getElementById("firstSection");
  if (home.style.display === "block") {
    home.style.display = "none";
  } else {
    home.style.display = "none";
  }

  var game = document.getElementById("welcomeScreen");
  if (game.style.display === "none") {
    game.style.display = "block";
  } else {
    game.style.display = "block";
  }

  var score = document.getElementById("marks");
  score.style.visibility = "hidden";

  document.getElementById("userInput").value = "";


}
function openGame() {
  var top = sessionStorage.getItem("gameInput");
  var down = sessionStorage.getItem("wrongInput");

  console.log();
  if (down === null) {
    if (top === null) {
      var home = document.getElementById("welcomeScreen");
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

        document.getElementById("answerText").value = "";

        console.log(randomNum);
      }
    } else {
      sessionStorage.clear();
      location.reload();
      return;
    }
  } else {
    sessionStorage.clear();
    location.reload();
    return;
  }



}

function startAgain() {
  document.getElementById("answerText").value = "";
  sessionStorage.clear();
  location.reload();
}


function clearData() {
  document.getElementById("answerText").value = "";
  sessionStorage.clear();
  location.reload();
}

var playerInput = JSON.parse(sessionStorage.getItem("gameInput") || "[]");


var playerWorngInput = JSON.parse(sessionStorage.getItem("wrongInput") || "[]");

var myFunctionCalls = 0;



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let randomNum = getRandomInt((5));


function getInput2() {

  let buhar = ["black", "nigerian", "current president", "nigeria", "politician", "alive", "african", "africa",
    "above50", "male", "president", "leader", "head of state", "educated", "elected", "west africa",
    "father", "married", "africa", "west african"];

  let joeBiden = ["white", "president", "above50", "leader", "educated", "elected", "alive", "current president", "politician",
    "male", "america", "american", "usa", "united states", "united state of america", "father", "married"]

  let justinBieber = ["male", "celebrity", "singer", "beauty and a beat", "below50", "pop", "r and b", "r & b", "r&b", "canadian", "canada", "alive", "grammy",
    "singer", "songwriter", "song writer", "educated", "lives in america", "lives in usa", "musician", "wealthy", "rich", "sorry", "Baby", "Boyfriend", "i'm the one", "no brainer", "Intentions"]

  let rihana = ["female", "barbados", "lives in america", "black", "grammy", "singer", "celebrity", "below50", "barbadian", "pop",
    "r&b", "r and b", "reggae", "umbrella", "take a bow", "love the way you lie", "wild thoughts", "diamond", "diamonds", "whats my name", "we found love", "alive", "musician"]

  let michealJ = ["dead", "black", "musician", "singer", "lives in america", "male", "celebrity", "pop", "american", "america", "dancer", "father", "soul", "rock", "disco", "blues",
    "grammy", "beat it", "rock with you"]

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


  var fresh = document.getElementById('answerText').value;
  let data = fresh.toLowerCase();

  if (data.length == 0) {
    document.getElementById("warning2").innerHTML = "Please input your answer!!!";
    return;
  }

  if (data.length > 0) {
    document.getElementById("warning2").innerHTML = " ";
  }

  var raw = sessionStorage.getItem("gameInput");
  var storedResult = JSON.parse(raw);
  console.log(storedResult);

  var wrongRaw = sessionStorage.getItem("wrongInput");
  var storeWrong = JSON.parse(wrongRaw);

  console.log(storeWrong);

  // for Buhari
  if (randomNum == 0) {
    if (data.includes("buhari") || data.includes("muhammadu buhari")) {
      let newData = localStorage.getItem('userEntry');
      document.getElementById("pName").innerHTML = newData;
      document.getElementById("characterImg").innerHTML = "<img src=\"images/buhari.jpg\" width=\"250px\">";
      document.getElementById("aboutChar").innerHTML = ("Muhamemmed Buhari is the president of Nigeria")

      var home = document.getElementById("gameSection");
      if (home.style.display === "block") {
        home.style.display = "none";
      } else {
        home.style.display = "none";
      }

      var game = document.getElementById("winSection");
      if (game.style.display === "none") {
        game.style.display = "block";
      } else {
        game.style.display = "block";

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
        game.style.display = "none";
      } else {
        game.style.display = "none";
      }
      var game = document.getElementById("winSection");
      if (game.style.display === "none") {
        game.style.display = "block";
      } else {
        game.style.display = "block";

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
        game.style.display = "none";
      } else {
        game.style.display = "none";
      }
      var game = document.getElementById("winSection");
      if (game.style.display === "none") {
        game.style.display = "block";
      } else {
        game.style.display = "block";

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
        game.style.display = "none";
      } else {
        game.style.display = "none";
      }
      var game = document.getElementById("winSection");
      if (game.style.display === "none") {
        game.style.display = "block";
      } else {
        game.style.display = "block";

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
        game.style.display = "none";
      } else {
        game.style.display = "none";
      }
      var game = document.getElementById("winSection");
      if (game.style.display === "none") {
        game.style.display = "block";
      } else {
        game.style.display = "block";

      }


      return;
    }
  }




  if (storedResult != null) {
    if (storedResult.includes(data)) {
      document.getElementById("warning2").innerHTML = ("You can't input" + " " + data + " " + "again!!!");
      document.getElementById("answerText").value = "";
      return;
    }

  }

  let spit = character.includes(data);

  console.log(spit);

  if (storeWrong != null) {
    if (storeWrong.includes(data)) {
      document.getElementById("warning2").innerHTML = ("You can't input" + " " + data + " " + "again!!!");
      document.getElementById("answerText").value = "";
      return;
    }
  }

  myFunctionCalls++;

  let life = myFunctionCalls;

  if (myFunctionCalls > 15) {
    let looser = localStorage.getItem('userEntry');
    console.log(looser);
    document.getElementById("lost").innerHTML = looser;

    var game = document.getElementById("gameSection");
    if (game.style.display === "block") {
      game.style.display = "none";
    } else {
      game.style.display = "none";
    }

    var game = document.getElementById("playerFail");
    if (game.style.display === "none") {
      game.style.display = "block";
    } else {
      game.style.display = "block";

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

    playerInput.push(newData);
    sessionStorage.setItem("gameInput", JSON.stringify(playerInput));
    var guide = sessionStorage.getItem("gameInput");
    var show = JSON.parse(guide);
    document.getElementById("listUp").innerHTML = show.join(', ');

  } else {
    let score2 = document.getElementById("wrong");
    score2.style.visibility = "visible";
    setTimeout(() => {
      score2.style.visibility = "hidden";
    }, 3000);
    let newData = data.toString()
    console.log(newData);
    playerWorngInput.push(newData);

    sessionStorage.setItem("wrongInput", JSON.stringify(playerWorngInput));

    var wrongShow = sessionStorage.getItem("wrongInput");
    var nowShow = JSON.parse(wrongShow);
    document.getElementById("listUp2").innerHTML = nowShow.join(', ');
  }

  document.getElementById("answerText").value = "";



}




