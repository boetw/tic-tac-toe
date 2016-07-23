//var
var oneA = 1;
var oneB = 1;
var oneC = 1;
var twoA = 1;
var twoB = 1;
var twoC = 1;
var threeA = 1;
var threeB = 1;
var threeC = 1;
var player = 1;

//winner
var winX = function(){
	if ((oneA + oneB + oneC) === 6){
		alert("X Wins!")
	} else if ((twoA + twoB + twoC) === 6){
		alert("X Wins!")
	} else if ((threeA + threeB + threeC) === 6){
		alert("X Wins!")
	} else if ((oneA + twoA + threeA) === 6){
		alert("X Wins!")
	} else if ((oneB + twoB + threeB) === 6){
		alert("X Wins!")
	} else if ((oneC + twoC + threeC) === 6){
		alert("X Wins!")
	} else if ((oneA + twoB + threeC) === 6){
		alert("X Wins!")
	} else if ((oneC + twoB + threeA) === 6){
		alert("X Wins!")
	} else {
		console.log("NO winner");
	}
}
var winO = function(){
	if ((oneA + oneB + oneC) === 0){
		alert("O Wins!")
	} else if ((twoA + twoB + twoC) === 0){
		alert("O Wins!")
	} else if ((threeA + threeB + threeC) === 0){
		alert("O Wins!")
	} else if ((oneA + twoA + threeA) === 0){
		alert("O Wins!")
	} else if ((oneB + twoB + threeB) === 0){
		alert("O Wins!")
	} else if ((oneC + twoC + threeC) === 0){
		alert("O Wins!")
	} else if ((oneA + twoB + threeC) === 0){
		alert("O Wins!")
	} else if ((oneC + twoB + threeA) === 0){
		alert("O Wins!")
	} else {
		console.log("NO winner");
	}
}

//row 1
document.getElementById('1a').addEventListener('click', function(){
	 if (oneA === 1){
	 	if (player == 1) {
	 	document.getElementById('1a').innerHTML="x";
	 	console.log("x");
	 	oneA++;
	 	player = 2;
	 	winX();
	 	} else{
	 	document.getElementById('1a').innerHTML="o";
	 	console.log("o");
	 	oneA--;
	 	player = 1;
	 	winO();
	 	}
	 } else{
	 	console.log("Used Square");
	 }
});
document.getElementById('1b').addEventListener('click', function(){
	 if (oneB === 1){
	 	if (player == 1) {
	 	document.getElementById('1b').innerHTML="x";
	 	console.log("x");
	 	oneB++;
	 	player = 2;
	 	winX();
	 	} else{
	 	document.getElementById('1b').innerHTML="o";
	 	console.log("o");
	 	oneB--;
	 	player = 1;
	 	winO();
	 	}
	 } else{
	 	console.log("Used Square");
	 }
});document.getElementById('1c').addEventListener('click', function(){
	 if (oneC === 1){
	 	if (player == 1) {
	 	document.getElementById('1c').innerHTML="x";
	 	console.log("x");
	 	oneC++;
	 	player = 2;
	 	winX();
	 	} else{
	 	document.getElementById('1c').innerHTML="o";
	 	console.log("o");
	 	oneC--;
	 	player = 1;
	 	winO();
	 	}
	 } else{
	 	console.log("Used Square");
	 }
});

//row2
document.getElementById('2a').addEventListener('click', function(){
	 if (twoA === 1){
	 	if (player == 1) {
	 	document.getElementById('2a').innerHTML="x";
	 	console.log("x");
	 	twoA++;
	 	player = 2;
	 	winX();
	 	} else{
	 	document.getElementById('2a').innerHTML="o";
	 	console.log("o");
	 	twoA--;
	 	player = 1;
	 	winO();
	 	}
	 } else{
	 	console.log("Used Square");
	 }
});document.getElementById('2b').addEventListener('click', function(){
	 if (twoB === 1){
	 	if (player == 1) {
	 	document.getElementById('2b').innerHTML="x";
	 	console.log("x");
	 	twoB++;
	 	player = 2;
	 	winX();
	 	} else{
	 	document.getElementById('2b').innerHTML="o";
	 	console.log("o");
	 	twoB--;
	 	player = 1;
	 	winO();
	 	}
	 } else{
	 	console.log("Used Square");
	 }
});document.getElementById('2c').addEventListener('click', function(){
	 if (twoC === 1){
	 	if (player == 1) {
	 	document.getElementById('2c').innerHTML="x";
	 	console.log("x");
	 	twoC++;
	 	player = 2;
	 	winX();
	 	} else{
	 	document.getElementById('2c').innerHTML="o";
	 	console.log("o");
	 	twoC--;
	 	player = 1;
	 	winO();
	 	}
	 } else{
	 	console.log("Used Square");
	 }
});

//row3
document.getElementById('3a').addEventListener('click', function(){
	 if (threeA === 1){
	 	if (player == 1) {
	 	document.getElementById('3a').innerHTML="x";
	 	console.log("x");
	 	threeA++;
	 	player = 2;
	 	winX();
	 	} else{
	 	document.getElementById('3a').innerHTML="o";
	 	console.log("o");
	 	threeA--;
	 	player = 1;
	 	winO();
	 	}
	 } else{
	 	console.log("Used Square");
	 }
});document.getElementById('3b').addEventListener('click', function(){
	 if (threeB === 1){
	 	if (player == 1) {
	 	document.getElementById('3b').innerHTML="x";
	 	console.log("x");
	 	threeB++;
	 	player = 2;
	 	winX();
	 	} else{
	 	document.getElementById('3b').innerHTML="o";
	 	console.log("o");
	 	threeB--;
	 	player = 1;
	 	winO();
	 	}
	 } else{
	 	console.log("Used Square");
	 }
});document.getElementById('3c').addEventListener('click', function(){
	 if (threeC === 1){
	 	if (player == 1) {
	 	document.getElementById('3c').innerHTML="x";
	 	console.log("x");
	 	threeC++;
	 	player = 2;
	 	winX();
	 	} else{
	 	document.getElementById('3c').innerHTML="o";
	 	console.log("o");
	 	threeC--;
	 	player = 1;
	 	winO();
	 	}
	 	win();
	 } else{
	 	console.log("Used Square");
	 }
});

//winner
// if (oneA === oneB === oneC === 2 || twoA === twoB === twoC === 2 || threeA === threeB === threeC ===2){
// 	console.log("X Wins!")
// } else {console.log"NO winner"};