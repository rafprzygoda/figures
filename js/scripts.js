// I'd like to introduce a script to count figure field

var dec = prompt("Choose what do you want to count: triangle field [1]  or square field [2] ");
if (dec == 1) {
    var a = prompt("Provide width of triangle");
    var h = prompt("Provide height of triangle");
    var triangleArea = a * h / 2;
    alert("Triangle field with base a: " + a + " and height h: " + h + " is equal to: " + triangleArea);
}   

else {
    var a = prompt("Provide width of square");
    var b = prompt("Provide height of square");
    var squareArea = a * b;
    alert("Square field with base a: " + a + " and height b: " + b + " is equal to: " + squareArea);
}

//console.log(triangleArea);