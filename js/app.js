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
var count = 0;

//functions
var winX = function(){
	if(count === 9){
		document.getElementById('header').innerHTML="GAME OVER";
	 	document.getElementById('header').style="color:white";
	}
	else{
	if ((oneA + oneB + oneC) === 6){
		document.getElementById('1a').style.background="#FF0000";
		document.getElementById('1b').style.background="#FF0000";
		document.getElementById('1c').style.background="#FF0000";
		document.getElementById('header').innerHTML="X WINS";
	 	document.getElementById('header').style="color:red";
	} else if ((twoA + twoB + twoC) === 6){
		document.getElementById('2a').style.background="#FF0000";
		document.getElementById('2b').style.background="#FF0000";
		document.getElementById('2c').style.background="#FF0000";
		document.getElementById('header').innerHTML="X WINS";
	 	document.getElementById('header').style="color:red";
	} else if ((threeA + threeB + threeC) === 6){
		document.getElementById('3a').style.background="#FF0000";
		document.getElementById('3b').style.background="#FF0000";
		document.getElementById('3c').style.background="#FF0000";
		document.getElementById('header').innerHTML="X WINS";
	 	document.getElementById('header').style="color:red";
	} else if ((oneA + twoA + threeA) === 6){
		document.getElementById('1a').style.background="#FF0000";
		document.getElementById('2a').style.background="#FF0000";
		document.getElementById('3a').style.background="#FF0000";
		document.getElementById('header').innerHTML="X WINS";
	 	document.getElementById('header').style="color:red";
	} else if ((oneB + twoB + threeB) === 6){
		document.getElementById('1b').style.background="#FF0000";
		document.getElementById('2b').style.background="#FF0000";
		document.getElementById('3b').style.background="#FF0000";
		document.getElementById('header').innerHTML="X WINS";
	 	document.getElementById('header').style="color:red";
	} else if ((oneC + twoC + threeC) === 6){
		document.getElementById('1c').style.background="#FF0000";
		document.getElementById('2c').style.background="#FF0000";
		document.getElementById('3c').style.background="#FF0000";
		document.getElementById('header').innerHTML="X WINS";
	 	document.getElementById('header').style="color:red";
	} else if ((oneA + twoB + threeC) === 6){
		document.getElementById('1a').style.background="#FF0000";
		document.getElementById('2b').style.background="#FF0000";
		document.getElementById('3c').style.background="#FF0000";
		document.getElementById('header').innerHTML="X WINS";
	 	document.getElementById('header').style="color:red";
	} else if ((oneC + twoB + threeA) === 6){
		document.getElementById('1c').style.background="#FF0000";
		document.getElementById('2b').style.background="#FF0000";
		document.getElementById('3a').style.background="#FF0000";
		document.getElementById('header').innerHTML="X WINS";
	 	document.getElementById('header').style="color:red";
	} else {
		console.log("No winner");
	}}
}
var winO = function(){
	if (count === 9){
		document.getElementById('header').innerHTML="GAME OVER";
	 	document.getElementById('header').style="color:white";
	}
	else{
	if ((oneA + oneB + oneC) === 0){
		document.getElementById('1a').style.background="#0000FF";
		document.getElementById('1b').style.background="#0000FF";
		document.getElementById('1c').style.background="#0000FF";
		document.getElementById('header').innerHTML="O WINS";
	 	document.getElementById('header').style="color:blue";;
	} else if ((twoA + twoB + twoC) === 0){
		document.getElementById('2a').style.background="#0000FF";
		document.getElementById('2b').style.background="#0000FF";
		document.getElementById('2c').style.background="#0000FF";
		document.getElementById('header').innerHTML="O WINS";
	 	document.getElementById('header').style="color:blue";
	} else if ((threeA + threeB + threeC) === 0){
		document.getElementById('3a').style.background="#0000FF";
		document.getElementById('3b').style.background="#0000FF";
		document.getElementById('3c').style.background="#0000FF";
		document.getElementById('header').innerHTML="O WINS";
	 	document.getElementById('header').style="color:blue";
	} else if ((oneA + twoA + threeA) === 0){
		document.getElementById('1a').style.background="#0000FF";
		document.getElementById('2a').style.background="#0000FF";
		document.getElementById('3a').style.background="#0000FF";
		document.getElementById('header').innerHTML="O WINS";
	 	document.getElementById('header').style="color:blue";
	} else if ((oneB + twoB + threeB) === 0){
		document.getElementById('1b').style.background="#0000FF";
		document.getElementById('2b').style.background="#0000FF";
		document.getElementById('3b').style.background="#0000FF";
		document.getElementById('header').innerHTML="O WINS";
	 	document.getElementById('header').style="color:blue";
	} else if ((oneC + twoC + threeC) === 0){
		document.getElementById('1c').style.background="#0000FF";
		document.getElementById('2c').style.background="#0000FF";
		document.getElementById('3c').style.background="#0000FF";
		document.getElementById('header').innerHTML="O WINS";
	 	document.getElementById('header').style="color:blue";
	} else if ((oneA + twoB + threeC) === 0){
		document.getElementById('1a').style.background="#0000FF";
		document.getElementById('2b').style.background="#0000FF";
		document.getElementById('3c').style.background="#0000FF";
		document.getElementById('header').innerHTML="O WINS";
	 	document.getElementById('header').style="color:blue";
	} else if ((oneC + twoB + threeA) === 0){
		document.getElementById('1c').style.background="#0000FF";
		document.getElementById('2b').style.background="#0000FF";
		document.getElementById('3a').style.background="#0000FF";
		document.getElementById('header').innerHTML="O WINS";
	 	document.getElementById('header').style="color:blue";
	} else {
		console.log("No winner");
	}}
}
var reload = function(){
	location.reload();
}

//row 1
document.getElementById('1a').addEventListener('click', function(){
	 if (oneA === 1){
	 	if (player == 1) {
	 	document.getElementById('1a').innerHTML="x";
	 	document.getElementById('header').innerHTML="TURN: O";
	 	document.getElementById('header').style="color:blue";
	 	console.log("x");
	 	oneA++;
	 	player = 2;
	 	count++;
	 	winX();
	 	} else{
	 	document.getElementById('1a').innerHTML="o";
	 		 	document.getElementById('header').innerHTML="TURN:X";
	 	document.getElementById('header').style="color:red";
	 	console.log("o");
	 	oneA--;
	 	player = 1;
	 	count++;
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
	 		 	document.getElementById('header').innerHTML="TURN:O";
	 	document.getElementById('header').style="color:blue";
	 	console.log("x");
	 	oneB++;
	 	player = 2;
	 	count++;
	 	winX();
	 	} else{
	 	document.getElementById('1b').innerHTML="o";
	 	document.getElementById('header').innerHTML="TURN:X";
	 	document.getElementById('header').style="color:red";
	 	console.log("o");
	 	oneB--;
	 	player = 1;
	 	count++;
	 	winO();
	 	}
	 } else{
	 	console.log("Used Square");
	 }
});document.getElementById('1c').addEventListener('click', function(){
	 if (oneC === 1){
	 	if (player == 1) {
	 	document.getElementById('1c').innerHTML="x";
	 		 	document.getElementById('header').innerHTML="TURN:O";
	 	document.getElementById('header').style="color:blue";
	 	console.log("x");
	 	oneC++;
	 	player = 2;
	 	count++;
	 	winX();
	 	} else{
	 	document.getElementById('1c').innerHTML="o";
	 	document.getElementById('header').innerHTML="TURN:X";
	 	document.getElementById('header').style="color:red";
	 	oneC--;
	 	player = 1;
	 	count++;
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
	 		 	document.getElementById('header').innerHTML="TURN: O";
	 	document.getElementById('header').style="color:blue";
	 	console.log("x");
	 	twoA++;
	 	player = 2;
	 	count++;
	 	winX();
	 	} else{
	 	document.getElementById('2a').innerHTML="o";
	 	document.getElementById('header').innerHTML="TURN: X";
	 	document.getElementById('header').style="color:red";
	 	console.log("o");
	 	twoA--;
	 	player = 1;
	 	count++;
	 	winO();
	 	}
	 } else{
	 	console.log("Used Square");
	 }
});document.getElementById('2b').addEventListener('click', function(){
	 if (twoB === 1){
	 	if (player == 1) {
	 	document.getElementById('2b').innerHTML="x";
	 		 	document.getElementById('header').innerHTML="TURN: O";
	 	document.getElementById('header').style="color:blue";
	 	console.log("x");
	 	twoB++;
	 	player = 2;
	 	count++;
	 	winX();
	 	} else{
	 	document.getElementById('2b').innerHTML="o";
	 	document.getElementById('header').innerHTML="TURN: X";
	 	document.getElementById('header').style="color:red";
	 	console.log("o");
	 	twoB--;
	 	player = 1;
	 	count++;
	 	winO();
	 	}
	 } else{
	 	console.log("Used Square");
	 }
});document.getElementById('2c').addEventListener('click', function(){
	 if (twoC === 1){
	 	if (player == 1) {
	 	document.getElementById('2c').innerHTML="x";
	 		 	document.getElementById('header').innerHTML="TURN: O";
	 	document.getElementById('header').style="color:blue";
	 	console.log("x");
	 	twoC++;
	 	player = 2;
	 	count++;
	 	winX();
	 	} else{
	 	document.getElementById('2c').innerHTML="o";
	 	document.getElementById('header').innerHTML="TURN: X";
	 	document.getElementById('header').style="color:red";
	 	console.log("o");
	 	twoC--;
	 	player = 1;
	 	count++;
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
	 		 	document.getElementById('header').innerHTML="TURN: O";
	 	document.getElementById('header').style="color:blue";
	 	console.log("x");
	 	threeA++;
	 	player = 2;
	 	count++;
	 	winX();
	 	} else{
	 	document.getElementById('3a').innerHTML="o";
	 	document.getElementById('header').innerHTML="TURN: X";
	 	document.getElementById('header').style="color:red";
	 	console.log("o");
	 	threeA--;
	 	player = 1;
	 	count++;
	 	winO();
	 	}
	 } else{
	 	console.log("Used Square");
	 }
});document.getElementById('3b').addEventListener('click', function(){
	 if (threeB === 1){
	 	if (player == 1) {
	 	document.getElementById('3b').innerHTML="x";
	 		 	document.getElementById('header').innerHTML="TURN: O";
	 	document.getElementById('header').style="color:blue";
	 	console.log("x");
	 	threeB++;
	 	player = 2;
	 	count++;
	 	winX();
	 	} else{
	 	document.getElementById('3b').innerHTML="o";
	 	document.getElementById('header').innerHTML="TURN: X";
	 	document.getElementById('header').style="color:red";
	 	console.log("o");
	 	threeB--;
	 	player = 1;
	 	count++;
	 	winO();
	 	}
	 } else{
	 	console.log("Used Square");
	 }
});document.getElementById('3c').addEventListener('click', function(){
	 if (threeC === 1){
	 	if (player == 1) {
	 	document.getElementById('3c').innerHTML="x";
	 		 	document.getElementById('header').innerHTML="TURN: O";
	 	document.getElementById('header').style="color:blue";
	 	console.log("x");
	 	threeC++;
	 	player = 2;
	 	count++;
	 	winX();
	 	} else{
	 	document.getElementById('3c').innerHTML="o";
	 	document.getElementById('header').innerHTML="TURN: X";
	 	document.getElementById('header').style="color:red";
	 	console.log("o");
	 	threeC--;
	 	player = 1;
	 	count++;
	 	winO();
	 	}
	 } else{
	 	console.log("Used Square");
	 }
});
//winner
// if (oneA === oneB === oneC === 2 || twoA === twoB === twoC === 2 || threeA === threeB === threeC ===2){
// 	console.log("X Wins!")
// } else {console.log"NO winner"};