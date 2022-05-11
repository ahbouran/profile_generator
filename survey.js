const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  rl.question("What's an activity you like doing? ", (activityAnswer) => {
    rl.question("What do you listen to while doing that? ", (musicAnswer) => {
  console.log(`Thank you for your valuable feedback: ${answer}. We like ${activityAnswer} too. ${musicAnswer} is indeed the best.`);
  rl.close()
})
})
})