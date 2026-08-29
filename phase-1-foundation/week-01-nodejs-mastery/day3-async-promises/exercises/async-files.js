 function wait(ms) {
   return new Promise(resolve => {
     setTimeout(resolve, ms);
   });
 }

 async function run(){
   console.log("Start!");

   await wait(1000);

   console.log("After 1 second");

   console.log("End");
 }

 run();

//⭐ fs.promises

const fs = require("fs/promises");

async function main() {
  //Task 1
  await fs.writeFile("notes.txt", "I am learning Node.js async operations.\n");
  //Task 3
  await fs.appendFile("notes.txt", "Today I learned fs.promises.\n");

  //Task 2
  const data = await fs.readFile("notes.txt", "utf-8");
  console.log("File contents:");
  console.log(data);
}

main();

async function readFile() {
  try {
    await fs.writeFile("notes.txt", "I am learning Node.js async operations.\n");
  //Task 3
  await fs.appendFile("notes.txt", "Today I learned fs.promises.\n");

  //Task 2
  const data = await fs.readFile("does-not-exist.txt", "utf-8");
  console.log("File content:");
  console.log(data);

  } catch(err){
    console.log("Cound not read a file.")
  }
  
};

readFile();
