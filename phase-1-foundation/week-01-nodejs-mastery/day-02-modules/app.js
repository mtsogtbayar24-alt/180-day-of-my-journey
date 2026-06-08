const math = require("./math");
const chalk = require("chalk").default;
console.log(math.add(5, 10));
console.log(math.sub(35, 10));

console.log(chalk.green("Success"));
console.log(chalk.red("Error"));