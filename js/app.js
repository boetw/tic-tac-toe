var oneA = 1;
var oneB = 1;
var oneC = 1;
var twoA = 1;
var twoB = 1;
var twoC = 1;
var threeA = 1;
var threeB = 1;
var threeC = 1;
var player = true;

document.getElementById('1a').addEventListener('click', function(){
	 if (oneA === 1){
	 	if (player == true) {
	 	document.getElementById('1a').innerHTML="x";
	 	console.log("x");
	 	oneA++;
	 	var player = false;
	 	} else{
	 	document.getElementById('1a').innerHTML="o";
	 	console.log("o");
	 	oneA++;
	 	var player = true;}
	 } else{
	 	console.log("Used Square");
	 }
	 console.log("1a "+oneA+" 1b "+oneB+" 1c "+oneC);
	 console.log("2a "+twoA+" 2b "+twoB+" 2c "+twoC);
	 console.log("3a "+threeA+" 3b "+threeB+" 3c "+threeC);
	 console.log("player "+player);
});