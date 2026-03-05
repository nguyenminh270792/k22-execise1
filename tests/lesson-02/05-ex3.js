let a = true;
let b = false;
let c = true;

//Case (1) result should be 'false' since with && operator, "true" is all parts of expression are "true"
console.log("The result of the case 1 is: " + (a && b && c));

//Case (2) result should be true since with ||, just having 1 "true" in the expression, then the whole expression is true
console.log("The result of the case 2 is: " + (a && b || c));