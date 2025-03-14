function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[getRandomInt(letters.length)];
  }
  return color;
}

console.log(getRandomColor());
