(() => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const sum = num1 + num2;
  console.log("The sum of " + num1 + " and " + num2 + " is " + sum);
})();
