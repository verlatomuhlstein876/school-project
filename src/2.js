// Generate a random integer between 1 and 10
function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

// Get a random value from an array
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[getRandomInt(fruits.length)]);
