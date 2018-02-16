const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];

const bestThing = "The Best thing about a Boolean is even if you are wrong you are only off By a Bit";  //81//

//  var newElement = document.createElement("div");
// newElement.className = "bar";

// // Place a text label inside the new div.
// var newText = document.createTextNode("Bar #" + i);
// newElement.appendChild(newText);
// // Put the new div on the page inside the existing element "d1".
// var destination = document.getElementById("d1");
// destination.appendChild(newElement);


//Step One Display Array gotCitiesCSV//
{
    var newElement = document.createElement("div");


    newElement.textContent = JSON.stringify(gotCitiesCSV.split(","));


    var destination = document.getElementById("d1");
    destination.appendChild(newElement);
}

//Step Two Display bestThing//
{
    var newElement = document.createElement("div");
    var re = /\s*\s*/;
    var noSpace = bestThing.split(re, 3);

    newElement.textContent = JSON.stringify(bestThing.split(" ", 19));


    var destination = document.getElementById("d2");
    destination.appendChild(newElement);
}
//Step Three Display gotCitiesCSV seperated by commas//
{

    var newString = gotCitiesCSV.split(",").join(";");

    var newElement = document.createElement("div");


    newElement.textContent = (newString);


    var destination = document.getElementById("d3");
    destination.appendChild(newElement);
}
//Step 4 Display a CSV (comma-separated) string from the lotrCitiesArray //
{


    var newElement = document.createElement("div");


    newElement.textContent = JSON.stringify(lotrCitiesArray.join(","));


    var destination = document.getElementById("d4");
    destination.appendChild(newElement);
}
//Step 5 Display the first 5 cities in lotrCitiesArray //

for (i = 0; i <= 5; i++) {
    var newElement = document.createElement("div");


    newElement.textContent = lotrCitiesArray[i];


    var destination = document.getElementById("d5");
    destination.appendChild(newElement);
}
// Step 6 Display the last 5 cities in lotrCitiesArray //
for (i = 3; i <= lotrCitiesArray.length; i++) {
    var newElement = document.createElement("div");


    newElement.textContent = lotrCitiesArray[i];


    var destination = document.getElementById("d6");
    destination.appendChild(newElement);
}
//Step 7 Display the 3rd to 5th city in lotrCitiesArray //
for (i = 2; i <= 4; i++) {
    var newElement = document.createElement("div");


    newElement.textContent = lotrCitiesArray[i];


    var destination = document.getElementById("d7");
    destination.appendChild(newElement);
}
// Step 8 Using splice, remove "Rohan" from lotrCitiesArray //
{
    var spliced = lotrCitiesArray.splice(2, 1);
    

    var newElement = document.createElement("div");


    newElement.textContent = lotrCitiesArray;


    var destination = document.getElementById("d8");
    destination.appendChild(newElement);
}
// Step 9 Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray //
{

    var spliceandDice = lotrCitiesArray.splice(5, 3);


    var newElement = document.createElement("div");


    newElement.textContent = lotrCitiesArray;


    var destination = document.getElementById("d9");
    destination.appendChild(newElement);
}
// Step 10 Using splice, add "Rohan" back to lotrCitiesArray right after "Gondor" //
{
    var nope = lotrCitiesArray.splice(2, 1, "Rohan");


    var newElement = document.createElement("div");


    newElement.textContent = lotrCitiesArray;


    var destination = document.getElementById("d10");
    destination.appendChild(newElement);
}
//Step 11 Using splice, rename "Dead Marshes" to "Deadest Marshes" in lotrCitiesArray //
{

    var changed = lotrCitiesArray.splice(4, 1, "Deadest Marshes");


    var newElement = document.createElement("div");


    newElement.textContent = lotrCitiesArray;


    var destination = document.getElementById("d11");
    destination.appendChild(newElement);
}
// Step 12 Using slice, display the first 14 characters from bestThing //
{

    var newElement = document.createElement("div");


    newElement.textContent = bestThing.slice(0, 14);


    var destination = document.getElementById("d12");
    destination.appendChild(newElement);
}
// Step 13 Using slice, display the last 12 characters from bestThing //
{
    var newElement = document.createElement("div");


    newElement.textContent = bestThing.slice(69, 81);


    var destination = document.getElementById("d13");
    destination.appendChild(newElement);
}
// Step 14 Using slice, display characters between the 23rd and 38th position of bestThing //
{

    var newElement = document.createElement("div");


    newElement.textContent = bestThing.slice(23, 38);


    var destination = document.getElementById("d14");
    destination.appendChild(newElement);
}
// Step 15 Repeat #13 using substring instead of slice. //
{
    var newElement = document.createElement("div");


    newElement.textContent = bestThing.substring(69, 81);


    var destination = document.getElementById("d15");
    destination.appendChild(newElement);
}
// Step 16 Repeat #14 using substr instead of slice. //
{
    var newElement = document.createElement("div");


    newElement.textContent = bestThing.substr(23, 15);


    var destination = document.getElementById("d16");
    destination.appendChild(newElement);
}
// Step Seventeen Find and display the index of "only" in bestThing //
{

    var newElement = document.createElement("div");


    newElement.textContent = bestThing.indexOf("only");


    var destination = document.getElementById("d17");
    destination.appendChild(newElement);
}
// Step Eighteen Find and display the index of the last word in bestThing //
{

    var newElement = document.createElement("div");

    newElement.textContent = bestThing.indexOf("bit");

    var destination = document.getElementById("d18");
    destination.appendChild(newElement);
}
//  Step Nineteen Find and display all cities from gotCitiesCSV  that use double vowels ("aa","ee", etc.) //
var newCities = gotCitiesCSV.split(",");
var vowelCity = "";
for (var i = 0; i < newCities.length; i++) {
    city = newCities[i];
    if (city.includes("aa") || city.includes("ee") || city.includes("ii") || city.includes("oo")) {
        vowelCity += city ;

    }

}
var newElement = document.createElement("div");

newElement.textContent = vowelCity;

var destination = document.getElementById("d19");
destination.appendChild(newElement);
//  20 Find and display all cities from lotrCitiesArray that end with "or" //
var orCity = "";
for (var i = 0; i < lotrCitiesArray.length; i++) {
    city = lotrCitiesArray[i];
    if (city.includes("or")) {
        orCity += city ;

    }

}
var newElement = document.createElement("div");

newElement.textContent = orCity;

var destination = document.getElementById("d20");
destination.appendChild(newElement);
// Step 21 Find and display all the words in bestThing that start with a "b" //
var orCity = " ";
var arrayChange = bestThing.split(" ")
for (var i = 0; i < arrayChange.length; i++) {
    city = arrayChange[i];
    if (city.includes("B")) {
        orCity += city + " " ;

    }

}
var newElement = document.createElement("div");

newElement.textContent = orCity ;

var destination = document.getElementById("d21");
destination.appendChild(newElement);
// Step 22 Display "Yes" or "No" if lotrCitiesArray includes "Mirkwood" //
for (var i = 0; i < lotrCitiesArray.length; i++) {
    city = lotrCitiesArray.includes("Mirkwood")

}
var newElement = document.createElement("div");

newElement.textContent = city;

var destination = document.getElementById("d22");
destination.appendChild(newElement);
// Step 23 Display "Yes" or "No" if lotrCitiesArray includes "Hollywood" //
for (var i = 0; i < lotrCitiesArray.length; i++) {
    city = lotrCitiesArray.includes("Hollywood")

}
var newElement = document.createElement("div");

newElement.textContent = city;

var destination = document.getElementById("d23");
destination.appendChild(newElement);
// Step 24 Display the index of "Mirkwood" in lotrCitiesArray //
{

    var newElement = document.createElement("div");

    newElement.textContent = lotrCitiesArray.indexOf("Mirkwood");

    var destination = document.getElementById("d24");
    destination.appendChild(newElement);
}
// Step 25 Find and display the first city in lotrCitiesArray that has more than one word //
var twoWordCity = "";
for (var i = 0; i < lotrCitiesArray.length; i++) {
    city = lotrCitiesArray[i];
    if (city.includes(" ")) {
        twoWordCity += city;
    }
}
var newElement = document.createElement("div");

newElement.textContent = twoWordCity;

var destination = document.getElementById("d25");
destination.appendChild(newElement);
// Step 26 Reverse the order in lotrCitiesArray //
{
    reverseCities = lotrCitiesArray.reverse();

    var newElement = document.createElement("div");

    newElement.textContent = reverseCities;

    var destination = document.getElementById("d26");
    destination.appendChild(newElement);
}
// Step 27 Sort lotrCitiesArray alphabetically //
{
    sortCities = lotrCitiesArray.sort();

    var newElement = document.createElement("div");

    newElement.textContent = sortCities;

    var destination = document.getElementById("d27");
    destination.appendChild(newElement);
}
// Step 28 Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first) //

// const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"]; //

function shortestCities(a, b) {
    if (a.length > b.length) {
        return 1;
    }
    if (a.length < b.length) {
        return -1;
    }
    return 0;

}

{
    var newElement = document.createElement("div");

    newElement.textContent = lotrCitiesArray.sort(shortestCities);

    var destination = document.getElementById("d28");
    destination.appendChild(newElement);
}
// Step 29 Using pop, remove the last city from lotrCitiesArray //
{
    lotrCitiesArray.pop("Deadest Marshes");

    var newElement = document.createElement("div");

    newElement.textContent = lotrCitiesArray;

    var destination = document.getElementById("d29");
    destination.appendChild(newElement);
}
// Step 30 Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array //
{
    var lastAdd = lotrCitiesArray.push("Deadest Marshes", "Beleriand","Harad", "Rhun");

    var newElement = document.createElement("div");

    newElement.textContent = lotrCitiesArray;

    var destination = document.getElementById("d30");
    destination.appendChild(newElement);
}
// Step 31 Using shift, remove the first city from lotrCitiesArray //
{   
    
    var shift = lotrCitiesArray.shift();

    var newElement = document.createElement("div");

    newElement.textContent = lotrCitiesArray;

    var destination = document.getElementById("d31");
    destination.appendChild(newElement);
}
// Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array //
{   
    var unshifted = lotrCitiesArray.unshift("Rohan");
    

    var newElement = document.createElement("div");

    newElement.textContent = lotrCitiesArray;

    var destination = document.getElementById("d32");
    destination.appendChild(newElement);
}