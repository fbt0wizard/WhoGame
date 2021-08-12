// const Biden = ("american", "white", "politician", "alive", "above50", "male", "west");

function getInput() {
  var userInput = document.getElementById('userInput').value;
  sessionStorage.setItem("userEntry", userInput);

  if (userInput.length == 0) {
    document.getElementById("warning").innerHTML = "Please input your name!!!";
    return;
  }

  let newData = sessionStorage.getItem('userEntry');
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
  sessionStorage.clear();
  location.reload();
}

var playerInput = JSON.parse(sessionStorage.getItem("gameInput") || "[]");


var playerWorngInput = JSON.parse(sessionStorage.getItem("wrongInput") || "[]");

var myFunctionCalls = 0;


function getInput2() {
  const buhari = ["black", "nigerian", "nigeria", "politician", "alive", "african", "africa",
    "above50", "male", "president", "leader", "head of state", "educated", "elected", "west africa",
    "father", "married", "africa", "buhari", "muhammadu buhari"];


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


  if (data == "buhari" || data == "muhammadu buhari") {
    document.getElementById("guess").innerHTML = "<img src=\"images/buhari.jpg\" width=\"250px\">";
    let newData = sessionStorage.getItem('userEntry');
    alert("Great job" + " " + newData);
    return;
  }



  if (storedResult != null) {
    if (storedResult.includes(data)) {
      alert("You can't input" + " " + data + " " + "again");
      return;
    }

  }

  let spit = buhari.includes(data);

  console.log(spit);

  if (spit == false) {
    if (storeWrong != null) {
      if (storeWrong.includes(data)) {
        alert("You can't input" + " " + data + " " + "again");
        return;
      }
    }
  }

  myFunctionCalls++;

  let life = myFunctionCalls;

  if (myFunctionCalls > 10) {
    let loss = sessionStorage.getItem('userEntry');
    alert("Hey" + " " + loss + " " + "sorry you lost");
  } else {
    document.getElementById("counter").innerHTML = life;
  }


  if (buhari.includes(data)) {
    let score = document.getElementById("correct");
    score.style.visibility = "visible";
    setTimeout(() => {
      score.style.visibility = "hidden";
    }, 3000)
    playerInput.push(data);
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
    playerWorngInput.push(data);

    sessionStorage.setItem("wrongInput", JSON.stringify(playerWorngInput));

    var wrongShow = sessionStorage.getItem("wrongInput");
    var nowShow = JSON.parse(wrongShow);
    document.getElementById("listUp2").innerHTML = nowShow.join(', ');
  }

}





