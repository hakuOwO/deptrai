const chalk = require('chalk');
module.exports = (data, option) => {
	const arrayColor = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	const color_one = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	const color_two = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	switch (option) {
		case "warn":
			console.log(chalk.green('[ ๐๐๐ข๐ฅ ] ยป ') + data);
			break;
		case "error":
			console.log(chalk.blue('[ ๐๐๐ข๐ฅ ] ยป ') + data);
			break;
		case "load":
			console.log(color_one('[ ๐๐๐๐๐ก๐จ๐จ๐ค ๐๐ฌ๐๐ซ ๐๐๐ฐ ]') + color_two(data));
			break;
		default:
			console.log(color_one(`${option} ยป `) + color_two(data));
			break;
	}
}

module.exports.loader = (data, option) => {
	const arrayColor = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	const color_one = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	const color_two = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	switch (option) {
		case "warn":
			console.log(chalk.greenBright('[ ๐๐ฒ๐จ ๐๐๐ฉ๐ญ๐ซ๐ฒ๐ฒ ] ยป ') + data);
			break;
		case "error":
			console.log(chalk.greenBright('[ ๐๐ฒ๐จ ๐๐๐ฉ๐ญ๐ซ๐ฒ๐ฒ ] ยป ') + data);
			break;
		default:
			console.log(color_one(`[ ๐๐ฒ๐จ ๐๐๐ฉ๐ญ๐ซ๐ฒ๐ฒ ] ยป `) + color_two(data));
			break;
	}
}
module.exports.banner = (data) => {
	const rdcl = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	const color = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
	console.log(color(data));
}