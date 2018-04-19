//Basic Exercise 2
document.write("<h1>Basic Excercise 2</h1>");
document.write("Hi my name is Jeremy");

//Basic Exercise 4
document.write("<h1>Basic Excercise 4</h1>");
var player = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];
document.write("<p>The most valuable player of the match is: " + player[2] + "</p>");

//Intermediate Exercise 1
document.write("<h1>Intermediate Exercise 1</h1>");
var cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
cars.sort();
document.write(cars.join(", "));

//Intermediate Exercise 2 part 1.
document.write("<h1>Intermediate Exercise 2 part 1</h1>");
var fruits = ["apple", "banana", "kiwi"];

fruits.push("orange");
document.write(fruits.join(", "));

fruits.pop("orange");
document.write("<br>" + fruits.join(", "));

//Intermediate Exercise 2 part 2.
document.write("<h1>Intermediate Exercise 2 part 2</h1>");
var animals = ["monkey", "horse", "dog"];
animals.sort();
document.write(animals.join(", ") + "<br>");
animals.unshift("cat");
document.write(animals.join(", "));

//Intermediate Exercise 3.
document.write("<h1>Intermediate Exercise 3</h1>");
var fruitsEx3 = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var fruitsEx3Ar = new Array();
fruitsEx3Ar = fruitsEx3.split("/");
document.write(fruitsEx3Ar.join("<br>"));