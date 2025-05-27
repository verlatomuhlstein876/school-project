// Example code for simple school project collaboration

const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" }
];

function shareProject(projectName) {
  const links = {};
  
  users.forEach(user => {
    links[user.name] = user.email;
  });

  if (projectName in links) {
    console.log(`${projectName} is shared with ${links[`${projectName}`]}!`);
  } else {
    console.log(`${projectName} is not found.`);
  }
}

shareProject("Math");
