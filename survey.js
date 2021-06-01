const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer1) => {
  rl.question("What do you listen to while doing that?", (answer2) => {
    rl.question("What\'s an activity you like doing?", (answer3) => {
      rl.question("What\'s an animal you like doing?", (answer4) => {
        rl.question("What\'s your favourite TV show?", (answer5) => {
          rl.question("What\'s your favourite music?", (answer6) => {
            console.log(`meal: ${answer1},\n listen: ${answer2}, activity: ${answer3}, animal: ${answer4}, TV show:${answer5}, music ${answer6}`);
            rl.close();
          })
        })
      })
    })
  })
})