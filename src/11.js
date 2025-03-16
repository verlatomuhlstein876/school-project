// Function to calculate the area of a circle
function calculateArea(radius) {
  return Math.PI * radius ** 2;
}

// Function to calculate the circumference of a circle
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

// Driver code to test the functions
console.log("Area of circle with radius 5:", calculateArea(5));
console.log("Circumference of circle with radius 5:", calculateCircumference(5));
