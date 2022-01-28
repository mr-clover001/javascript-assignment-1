const num1 = prompt("Enter the number");

if (Math.sign(num1) == 1) {
  alert("number is positive");
} else if (Math.sign(num1) == -1) {
  alert("number is negative");
} else if (Math.sign(num1) == 0) {
  alert("number is zero");
} else {
  alert("default value");
}
