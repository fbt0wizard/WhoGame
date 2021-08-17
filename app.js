var randomNums = JSON.parse(localStorage.getItem("ranNum") || "[]"); 

var check = localStorage.getItem("ranNum");

if(check == null) {
    var nums = [1,2,3,4,5],
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}
}

if(check == null) {
console.log(ranNums);
let newSt = ranNums.toString();
console.log(newSt);

randomNums.push(newSt);
localStorage.setItem("ranNum", JSON.stringify(randomNums));

}

let newStorage = localStorage.getItem("ranNum");
console.log(newStorage);

var string = newStorage;

var index = 2;
var index2 = 4;
var index3 = 6;
var index4 = 8;
var index5 = 10;

console.log(parseInt(string.charAt(index)));
console.log(parseInt(string.charAt(index2)));
console.log(parseInt(string.charAt(index3)));
console.log(parseInt(string.charAt(index4)));
console.log(parseInt(string.charAt(index5)));

// localStorage.clear();