exports.node = {
	description: "Generates new Node components",
	prompts: [
		{
			type: "input",
			name: "name",
			message: "What's the name of the Component?",
			validate: function (value) {
				let message = true;
				if (!/.+/.test(value)) {
					message = console.error(
						"Missing",
						"you must define a component name"
					);
				} else if (value.length < 3) {
					message = console.error(
						"Too Short",
						`"${value}" is not descriptive enough`
					);
				}
				return message;
			},
		},
	],
	actions: function () {
		return [
			{
				type: "add",
				path: "src/nodejs/{{pascalCase name}}/{{pascalCase name}}.controller.ts",
				templateFile: "./generate/templates/nodejs/controller.hbs",
			},
			{
				type: "add",
				path: "src/nodejs/{{pascalCase name}}/{{pascalCase name}}.model.ts",
				templateFile: "./generate/templates/nodejs/model.hbs",
			},
			{
				type: "add",
				path: "src/nodejs/{{pascalCase name}}/{{pascalCase name}}.route.ts",
				templateFile: "./generate/templates/nodejs/routes.hbs",
			},
		];
	},
};

exports.nextjs = {
	description: "Generates new Nextjs/Reactjs component",
	prompts: [
		{
			type: "input",
			name: "name",
			message: "What's the name of the Component?",
			validate: function (value) {
				let message = true;
				if (!/.+/.test(value)) {
					message = console.error(
						"Missing",
						"you must define a component name"
					);
				} else if (value.length < 3) {
					message = console.error(
						"Too Short",
						`"${value}" is not descriptive enough`
					);
				}
				return message;
			},
		},
	],
	actions: function () {
		return [
			{
				type: "add",
				path: "component/{{pascalCase name}}/{{pascalCase name}}.tsx",
				templateFile: "./generate/templates/nextjs/component.hbs",
			},
			{
				type: "add",
				path: "component/{{pascalCase name}}/{{pascalCase name}}.styles.scss",
				templateFile: "./generate/templates/nextjs/styles.hbs",
			},
		];
	},
};

exports.solidity = {
	description: "Generates new Solidity contract (>=0.5.0 <0.8.0)",
	prompts: [
		{
			type: "input",
			name: "name",
			message: "What's the name of the contract?",
			validate: function (value) {
				let message = true;
				if (!/.+/.test(value)) {
					message = console.error("Missing", "you must define a contract name");
				} else if (value.length < 3) {
					message = console.error(
						"Too Short",
						`"${value}" is not descriptive enough`
					);
				}
				return message;
			},
		},
	],
	actions: function () {
		return [
			{
				type: "add",
				path: "contracts/{{pascalCase name}}/{{pascalCase name}}.sol",
				templateFile: "./generate/templates/solidity/contract.hbs",
			},
		];
	},
};
