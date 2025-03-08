const names = ["John", "Jane", "Alice", "Bob"];

const getRandomName = () => {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

console.log(getRandomName()); // Output: John, Jane, Alice, or Bob
