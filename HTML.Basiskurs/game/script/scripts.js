window.onload = function(){



	document.getElementById("counterBenutzer").innerHTML = counterB;

	function controlName() {
		bname = document.getElementById("benutzername").value;
		try {
			if(x == "")	throw "Bitte gib deinen Namen ein!";
		}
		catch(err) {
			alert("Bitte gib deinen Namen ein!");
		}
	}

}

	 counterB = 5;
	 victoryB = 0;
	 counterG = 5;

	 function wurf(){
	 	if(counterB > 0){
			
			 	counterB = counterB - 1;
			 	counterG = counterG -1;
			 	document.getElementById("counterBenutzer").innerHTML = counterB;

			 	zahlBenutzer = Math.floor(Math.random() * 5) +1;
			 	zahlGI = Math.floor(Math.random() * 5) + 1;

			 	if (zahlBenutzer > zahlGI){
			 		alert("Juhu du hast einen Punkt gewonnen!");
			 		counterB = counterB + 2;
			 		victoryB = victoryB + 2;
			 		document.getElementById("counterBenutzer").innerHTML = counterB;
			 		if (victoryB >= 3){
				 		document.getElementById("secondPage").style.display = 'none';
				 		document.getElementById("thirdPage").style.display = 'inline'; 
				 	}
			 		
			 	}
			 	else if(zahlBenutzer == zahlGI) {
			 		alert("Ihr habt ein Unentschieden erreicht!")
			 		gameOver();
			 	}
			 	else {
			 		alert("Verdammt, dass war kanpp, das nächste Mal gewinnst du bestimmt!");
			 		gameOver();
			 	}
			 
		} else {
			gameOver();
		}

	 }
	 function gameOver(){
	 		if (counterB <= 0) {
		 		document.getElementById("secondPage", "thirdPage").style.display = 'none';
		 		document.getElementById("gameOver").style.display = 'inline';
		 	}
	 }
	 function wurfZwei() {

	 	if (counterB <= 0) {
	 		document.getElementById("thirdPage").style.display = 'none';
	 		document.getElementById("gameOver").style.display = 'inline';
	 	}
	 	else{
		 	counterB = counterB - 1;
		 	counterG = counterG -1;
		 	document.getElementById("counterBenutzer").innerHTML = counterB;

		 	zahlBenutzer = Math.floor(Math.random() * 5) + 1;
		 	zahlBenutzer2 = Math.floor(Math.random() * 5) + 1;

		 	zahlGI = Math.floor(Math.random() * 5) + 1;
		 	zahlGI2 = Math.floor(Math.random() * 5) + 1;

		 	var augenZahlB = summeWurf(zahlBenutzer, zahlBenutzer2);
		 	var augenZahlG =summeWurf(zahlGI, zahlGI2);

		 	if (augenZahlB>augenZahlG){
		 		alert("Juhu du hast einen Punkt gewonnen!");
		 		counterB = counterB + 2;
		 		document.getElementById("counterBenutzer").innerHTML = counterB;
		 	}

		 	else {
		 		alert("Verdammt, dass war kanpp, das nächste Mal gewinnst du bestimmt!");
		 		document.getElementById("counterBenutzer").innerHTML = counterB;
		 	}
		 }
	 }
	 function restart() {
	 		 document.getElementById("gameOver").style.display = 'none';
	 		document.getElementById("secondPage").style.display = 'inline';
	 		counterB = 5;
	 		document.getElementById("counterBenutzer").innerHTML = counterB;
	 }
	 function summeWurf(a, b) {
	 	return a+b;
	 }