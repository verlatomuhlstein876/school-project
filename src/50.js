function sum(numbers) {
  let total = 0;
  numbers.forEach(number => {
    if (typeof number === 'number') {
      total += number;
    }
  });
  return total;
}
