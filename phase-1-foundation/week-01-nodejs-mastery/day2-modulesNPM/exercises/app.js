const { add, subtract, multiply } = require("./math");
const chalk = require('chalk');

console.log(chalk.green(add(10, 5)));
console.log(chalk.yellow(subtract(10, 5)));
console.log(chalk.magenta(multiply(10, 5)));

console.log(chalk.blue('Hello world!'));

console.log(chalk.green("Success!"));

console.log(chalk.red("Error!"));

console.log(chalk.gray("Hello Node.js!"));