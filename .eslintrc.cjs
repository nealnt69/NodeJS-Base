module.exports = {
	env: {
		browser: false,
		es6: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	plugins: ['@typescript-eslint', 'jest', 'prettier'],
	extends: [
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'prettier',
	],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 1,
		'@typescript-eslint/return-await': 0,
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'no-promise-executor-return': 0,
	},
};
