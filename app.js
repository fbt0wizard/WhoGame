var rn = JSON.parse(localStorage.getItem("random") || "[]");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
let randomNum = getRandomInt((4));

rn.push(randomNum);
localStorage.setItem("gameInput", JSON.stringify(rn));


let outPut = localStorage.getItem("random");

console.log(outPut);

// if(result.includes(randomNum)) {
//     let randomNum = getRandomInt((4));
//     console.log(randomNum);
// }
