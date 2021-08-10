// const Buhari = ("black", "Nigerian", "politician", "alive", "african", "above50", "male"); 
// const Biden = ("american", "white", "politician", "alive", "above50", "male", "west");


function getInput() {
    window.userInput = document.getElementById('userInput').value;
    console.log(userInput);
    alertUserInput();
    document.getElementById("user-name").innerHTML = ("Ranger" + " " + userInput);
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
}

function alertUserInput() {
    alert("Welcome" + " " + userInput);
}

var subButton = document.getElementById('subButton');
subButton.addEventListener('click', userInput);




