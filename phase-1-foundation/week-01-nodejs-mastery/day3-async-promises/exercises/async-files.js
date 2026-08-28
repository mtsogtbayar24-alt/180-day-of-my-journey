// function wait(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }

// async function run(){
//   console.log("Start!");

//   await wait(1000);

//   console.log("After 1 second");

//   console.log("End");
// }

// run();

const fs = require("fs/promises");

async function main() {
  await fs.writeFile("notes.txt", "I am learning Node.js async operations.\n");
  await fs.appendFile("notes.txt", "Today I learned fs.promises.\n");

  const data = await fs.readFile("notes.txt", "utf-8");
  console.log("File content:");
  console.log(data);
}

main();
