const fs = require('fs');

function readFile(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  return data;
}

// Example usage: reading file content from a specified path
const filePath = './example.txt';
console.log(readFile(filePath));
