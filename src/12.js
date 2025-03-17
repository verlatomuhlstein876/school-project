const getRandomCode = () => {
  // Generate a random integer between 10 and 99
  const randomNumber = Math.floor(Math.random() * 89) + 10;

  // Return the random number as a string
  return String(randomNumber);
};
