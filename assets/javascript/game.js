$(document).ready(function() {
//====================Global Variables===================================
//=======================================================================
	//Create variables to store all randomly generated values
	var targetValue = Math.floor(Math.random() * 101) + 19;

	var arrowCrystal = Math.floor(Math.random() * 11) + 1;

	var heartCrystal = Math.floor(Math.random() * 11) + 1;

	var ovalCrystal = Math.floor(Math.random() * 11) + 1;

	var roundCrystal = Math.floor(Math.random() * 11) + 1;

	var crystalSum = 0;       // connects to #scoreSum

	var wins = 0;       // connects to #wins

	var losses = 0;      // connects to #losses
	
	// Modify the DOM to display the random targetValue 
	$("#randomNum").text(targetValue);
	
	//Add a value attribute to each button to hold the crystal's number
	$("#arrow").attr("value", arrowCrystal);

	$("#heart").attr("value", heartCrystal);

	$("#oval").attr("value", ovalCrystal);
	
	$("#round").attr("value", roundCrystal);
	
	// Modify the DOM to display the cummulative sum as the game progresses
	$("#scoreSum").text(crystalSum);
	
	// Modify the DOM to display player's wins
	$("#wins").text(wins);		

	// Modify the DOM to display player's losses
	$("#losses").text(losses);		

//==============================EVENT LISTENER==========================
//=======================================================================
    // Add event listener for when a crystal is clicked
    $(".crystalButton").on("click", function() {

		// Convert the string value of the clicked crystal to an integer
		// Add that integer to the previous sum and store the new
		crystalSum += parseInt($(this).attr("value"));
		
		//Modity the DOM to display the crystalSum
		$("#scoreSum").text(crystalSum);

		//Compare newCrystalSum to targetValue and decide win, lose or play-on
		if (crystalSum === targetValue) {
			wins++;

			// Modify the DOM to update player's wins
			$("#wins").text(wins);

			// Reset the game but not the wins and losses
			newGame();


		} else if (crystalSum > targetValue) {
			losses++;

			// Modify the DOM to update player's losses
			$("#losses").text(losses);

			// Reset the game but not the wins and losses
			newGame();
		}

	});

//========================== FUNCTION ==================================
//=======================================================================
		//newGame function resets all random variables but not the wins and losses
	function newGame() {

		targetValue = Math.floor(Math.random() * 101) + 19;
		
		arrowCrystal = Math.floor(Math.random() * 11) + 1;
		
		heartCrystal = Math.floor(Math.random() * 11) + 1;
		
		ovalCrystal = Math.floor(Math.random() * 11) + 1;
		
		roundCrystal = Math.floor(Math.random() * 11) + 1;
		
		crystalSum = 0;

		$("#randomNum").text(targetValue);
		
		$("#arrow").attr("value", arrowCrystal);
		
		$("#heart").attr("value", heartCrystal);
		
		$("#oval").attr("value", ovalCrystal);
		
		$("#round").attr("value", roundCrystal);
		
		$("#scoreSum").text(crystalSum);
	}
	
})
