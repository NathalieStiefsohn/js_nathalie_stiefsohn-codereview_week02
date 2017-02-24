// asking for player Names
function naming () {
	// Type conversion to String
	var Player1 = String(prompt("Please enter your name here, Player 1", "Player 1"));
	var Player2 = String(prompt("Please enter your name here, Player 2", "Player 2"));

	document.getElementById("caption_player1").innerHTML = Player1;
	document.getElementById("caption_player2").innerHTML = Player2;

	// window.onload = background()
}

// Rolling the Dice for the first player
function dice1 () {
// this would be the easy approach but you want it differently with an array
// Without array I would only keep these 3 lines and continue with document.getElementByID....
	var Dice1 = Math.round(Math.random()*5+1);
	var Dice2 = Math.round(Math.random()*5+1);
	var Dice3 = Math.round(Math.random()*5+1);

// array - for my solution this would be unnecessary - but you want an array
	var Dices = [];
	Dices.push(Dice1);
	Dices.push(Dice2);
	Dices.push(Dice3);

	var Dice1 = Number(Dices.slice(0,1))
	var Dice2 = Number(Dices.slice(1,2))
	var Dice3 = Number(Dices.slice(2,3))
// end of unnecessary part

	document.getElementById("p1_d1").innerHTML = Dice1;
	document.getElementById("p1_d2").innerHTML = Dice2;
	document.getElementById("p1_d3").innerHTML = Dice3;

	var Sum = Dice1+Dice2+Dice3

	document.getElementById("result_p1").innerHTML = "Result: "+Sum;
}
// Rolling the Dice for the second player
function dice2 () {
	
// this would be the easy approach but you want it differently with an array
// Without array I would only keep these 3 lines and continue with document.getElementByID....
	var Dice1 = Math.round(Math.random()*5+1);
	var Dice2 = Math.round(Math.random()*5+1);
	var Dice3 = Math.round(Math.random()*5+1);

// array - for my solution this would be unnecessary - but you want an array
	var Dices = [];
	Dices.push(Dice1);
	Dices.push(Dice2);
	Dices.push(Dice3);

	var Dice1 = Number(Dices.slice(0,1))
	var Dice2 = Number(Dices.slice(1,2))
	var Dice3 = Number(Dices.slice(2,3))
// end of unnecessary part

	document.getElementById("p2_d1").innerHTML = Dice1;
	document.getElementById("p2_d2").innerHTML = Dice2;
	document.getElementById("p2_d3").innerHTML = Dice3;

	var Sum = Dice1+Dice2+Dice3

	document.getElementById("result_p2").innerHTML = "Result: "+Sum;
}

// changing the background color
// anonymous function
var Background = function ()
{
	var Red = Math.floor((Math.random())*25);
	var Green = Math.floor((Math.random())*25);
	var Blue = Math.floor((Math.random())*25);
	document.body.style.background = "rgb("+Red+", "+Green+", "+Blue+")";
	
	// document.write("rgb("+Red+", "+Green+", "+Blue+")");
	// document.write((Math.random()*255))
}

