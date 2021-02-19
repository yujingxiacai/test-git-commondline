// module.exports = {
// 	extends: ['eslint-config-ali', 'prettier', 'plugin:prettier/recommended'],
// 	parser: 'babel-eslint',
// 	rules: {
// 		'prettier/prettier': 'error',
// 		strict: 'off',
// 		'no-console': 'off',
// 		'import/no-dynamic-require': 'off',
// 		'global-require': 'off',
// 		'require-yield': 'off',
// 	},
// 	plugins: ['prettier'],
// 	globals: {
// 		React: 'readable',
// 	},
// };

module.exports = {
	extends: ['alloy'],
	env: {
		// Your environments (which contains several predefined global variables)
		//
		// browser: true,
		// node: true,
		// mocha: true,
		// jest: true,
		// jquery: true
	},
	globals: {
		// Your global variables (setting to false means it's not allowed to be reassigned)
		//
		// myGlobal: false
	},
	rules: {
		// Customize your rules
		quotes: ['error', 'single'],
		'prefer-const': ['error'],
	},
};
