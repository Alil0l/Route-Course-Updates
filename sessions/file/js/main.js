function sum(x, y) {
  var result = x + y;
  if (result > 5000) {
    return true;
  }
  return false;
}

var num1 = Number(window.prompt("Enter a number"));
var num2 = Number(window.prompt("Enter a number"));

var data = sum(num1, num2);

if (data) {
  console.log("YESS");
} else {
  console.log("NOOOO");
}
