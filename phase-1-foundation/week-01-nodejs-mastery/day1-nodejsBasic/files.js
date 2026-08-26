const fs = require("fs");

fs.writeFileSync("greeting.txt", "Hello");

const data = fs.readFileSync("greeting.txt", "utf8");

console.log(data);