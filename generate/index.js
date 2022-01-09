exports.nodeModule = {
	description: "Generates new nodeModule components",
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
				path: "../nodejs-backend/src/nodeModule/{{pascalCase name}}/{{pascalCase name}}.controller.ts",
				templateFile: "./generate/templates/nodeModule/controller.hbs",
			},
			{
				type: "add",
				path: "../nodejs-backend/src/nodeModule/{{pascalCase name}}/{{pascalCase name}}.model.ts",
				templateFile: "./generate/templates/nodeModule/model.hbs",
			},
			{
				type: "add",
				path: "../nodejs-backend/src/nodeModule/{{pascalCase name}}/{{pascalCase name}}.route.ts",
				templateFile: "./generate/templates/nodeModule/routes.hbs",
			},
		];
	},
};

exports.reactModule = {
	description: "Generates new Reactjs component",
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
				path: "../nextjs-client/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
				templateFile: "./generate/templates/reactModule/component.hbs",
			},
			{
				type: "add",
				path: "../nextjs-client/components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
				templateFile: "./generate/templates/reactModule/styles.hbs",
			},
		];
	},
};

exports.solidity = {
	description: "Generates new Solidity contract (>=0.5.0 <0.8.0)",
	prompts: [
		{
			type: "input",
			name: "Fname",
			message: "What's the Folder name of the contract?",
			validate: function (value) {
				let message = true;
				if (!/.+/.test(value)) {
					message = console.error("Missing", "you must define a Folder name");
				} else if (value.length < 3) {
					message = console.error(
						"Too Short",
						`"${value}" is not descriptive enough`
					);
				}
				return message;
			},
		},
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
				path: "../{{pascalCase Fname}}/{{pascalCase name}}/{{pascalCase name}}.sol",
				templateFile: "./generate/templates/solidity/contract.hbs",
			},
		];
	},
};

exports.nextJsWithScss = {
	description: "Generates new/blank NextJs APP With Scss ",
	prompts: [
		{
			type: "input",
			name: "name",
			message: "What's the name of the Project?",
			validate: function (value) {
				let message = true;
				if (!/.+/.test(value)) {
					message = console.error("Missing", "you must define a Project name");
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
				path: "../nextjs-client/tsconfig.json",
				templateFile: "./generate/templates/nextJsWithScss/tsconfig.json.hbs",
			},
			{
				type: "add",
				path: "../nextjs-client/styles.d.ts",
				templateFile: "./generate/templates/nextJsWithScss/styles.d.ts.hbs",
			},
			{
				type: "add",
				path: "../nextjs-client/README.md",
				templateFile: "./generate/templates/nextJsWithScss/README.md.hbs",
			},
			{
				type: "add",
				path: "../nextjs-client/package.json",
				templateFile: "./generate/templates/nextJsWithScss/package.json.hbs",
			},
			{
				type: "add",
				path: "../nextjs-client/next.config.js",
				templateFile: "./generate/templates/nextJsWithScss/next.config.js.hbs",
			},
			{
				type: "add",
				path: "../nextjs-client/next-env.d.ts",
				templateFile: "./generate/templates/nextJsWithScss/next-env.d.ts.hbs",
			},
			{
				type: "add",
				path: "../nextjs-client/.eslintrc.json",
				templateFile: "./generate/templates/nextJsWithScss/.eslintrc.json.hbs",
			},
			{
				type: "add",
				path: "../nextjs-client/.gitignore",
				templateFile: "./generate/templates/nextJsWithScss/.gitignore.hbs",
			},
			{
				type: "add",
				path: "../nextjs-client/public/publicFiles.md",
				templateFile:
					"./generate/templates/nextJsWithScss/public/publicFiles.md.hbs",
			},
			{
				type: "add",
				path: "../nextjs-client/pages/_app.tsx",
				templateFile: "./generate/templates/nextJsWithScss/pages/_app.tsx.hbs",
			},
			{
				type: "add",
				path: "../nextjs-client/pages/index.tsx",
				templateFile: "./generate/templates/nextJsWithScss/pages/index.tsx.hbs",
			},
			{
				type: "add",
				path: "../nextjs-client/pages/api/one.tsx",
				templateFile:
					"./generate/templates/nextJsWithScss/pages/api/one.tsx.hbs",
			},
			{
				type: "add",
				path: "../nextjs-client/components/index.tsx",
				templateFile:
					"./generate/templates/nextJsWithScss/components/index.tsx.hbs",
			},
			{
				type: "add",
				path: "../nextjs-client/components/Test/Test.tsx",
				templateFile:
					"./generate/templates/nextJsWithScss/components/Test/Test.tsx.hbs",
			},
			{
				type: "add",
				path: "../nextjs-client/components/Test/Test.scss",
				templateFile:
					"./generate/templates/nextJsWithScss/components/Test/Test.module.scss.hbs",
			},
		];
	},
};
