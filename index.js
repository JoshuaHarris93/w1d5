var chalk = require("chalk");
var numberOfLetters = ""
var message = "Hello " + chalk.yellow("Bob. ") + chalk.green("You seem ") + chalk.underline("to be") + chalk.blue(chalk.italic(" changing color ")) + chalk.dim("and font!");
console.log(message);