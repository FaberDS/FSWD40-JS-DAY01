
function vergleich() {
	document.getElementById("first").innerHTML = " ";
	document.getElementById("second").innerHTML = " ";

	var zZ1 = Math.floor(Math.random() * 100);
	var zZ2 = Math.floor(Math.random() * 100);

	if (zZ1 > zZ2){
		zZ1.style.color = "orange";
		document.getElementById("first").innerHTML = "Meine Glückszahl lautet " + zZ1 + " und diese ist die größte Zahl, sie ist um " + (zZ1 - zZ2) + " größer als diese von meinem Nachbarn";
		document.getElementById("f").style.backgroundColor = "green";
		document.getElementById("s").style.backgroundColor = "red";
	} else if (zZ1 == zZ2){
		document.getElementByTagName("p").innerHTML = "Verdammt, dass war die gleiche Zahl";

	} else {
		document.getElementById("second").innerHTML = "Meine Glückszahl lautet " + zZ2 + " und diese ist die größte Zahl, sie ist um " + (zZ2 - zZ1) + " größer als diese von meinem Nachbarn";
		document.getElementById("s").style.backgroundColor = "green";
		document.getElementById("f").style.backgroundColor = "red";
	}
}