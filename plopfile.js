const { node, nextjs, solidity } = require("./generate");

module.exports = function (plop) {
	plop.setGenerator("node", node);
	plop.setGenerator("nextjs ", nextjs);
	plop.setGenerator("sol", solidity);
};
