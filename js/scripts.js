// I'd like to introduce a script to count figure field

var dec = prompt("Choose what do you want to count: triangle field'[1]' or square field'[2]'");
if (dec == 1) {
    var a = prompt("provide width of triangle");
    var h = prompt("provide height of triangle");
    var triangleArea = a * h / 2;
    alert("Triangle field with base a: " + a + " and height h: " + h + " is equal to: " + triangleArea);
}   

else {
    var a = prompt("provide width of square");
    var b = prompt("provide height of square");
    var triangleArea = a * b;
    alert("Square field with base a: " + a + " and height b: " + b + " is equal to: " + triangleArea);
}



//console.log(triangleArea);