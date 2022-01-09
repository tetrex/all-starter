const {
	nodeModule,
	reactModule,
	solidity,
	nextJsWithScss,
} = require("./generate");

module.exports = function (plop) {
	plop.setGenerator("New NextJs Project", nextJsWithScss);
	plop.setGenerator("ReactJs Component", reactModule);
	plop.setGenerator("NodeJs Component(CRM)", nodeModule);
	plop.setGenerator("New Sol", solidity);
};
