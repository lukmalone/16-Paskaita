"use-strict"

var prideti = document.getElementsByTagName("button")[0];
var playerTwo = document.getElementsByTagName("button")[1];
var istrinti = document.getElementsByTagName("button")[2];
var inputNum = document.getElementById("inputNum");
var test = document.getElementById("test");
var number = 0;
var clicks = 0;
var clicksTwo = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

function onClickTwo() {
  clicksTwo += 1;
  document.getElementById("clicks2").innerHTML = clicksTwo;
};

function Calculate() {
  var inputNum = document.getElementById("inputNum").value;
  document.getElementById("test").innerHTML = inputNum;
};

function clearResult(){
  document.getElementById("result").value = ''
}
//
// for (let number = 0; number => clicks.length; i++) {
//   // prideti.disabled = true
// }

// if (clicks = inputNum) {
//   prideti.disabled = true
// };

if(clicks.value == inputNum.value) {
  prideti.disabled = false;
}
else if (clicks.value < inputNum.value) {
  prideti.disabled = true;
};

// do {
//   var spejimas = clicks;
//   var tikrinimas = Number(spejimas);
//   if(tikrinimas < inputNum){
//     alert("veikia");
//   }
// } while (isNaN(tikrinimas) || clicks != inputNum);

for(var i = 1; i <= 8; i++) {
  play();
};
