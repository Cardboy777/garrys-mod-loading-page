module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'linkComponents': [
		// Components used as alternatives to <a> for linking, eg. <Link to={ url } />
		'Hyperlink',
		{'name': 'Link', 'linkAttribute': 'to'}
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
	],
	'propWrapperFunctions': [
		// The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
		'forbidExtraProps',
		{'property': 'freeze', 'object': 'Object'},
		{'property': 'myFavoriteWrapper'}
  	],
	'react': {
		'createClass': 'createReactClass', // Regex for Component Factory to use,
										   // default to 'createReactClass'
		'pragma': 'React',  // Pragma to use, default to 'React'
		'version': 'detect', // React version. 'detect' automatically picks the version you have installed.
							 // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
							 // default to latest and warns if missing
							 // It will default to 'detect' in the future
		'flowVersion': '0.53' // Flow version
	},
	'rules': {
		'indent': [
			'warn',
			'tab'
		],
		'linebreak-style': [
			'warn',
			'windows'
		],
		'quotes': [
			'warn',
			'single'
		],
		'semi': [
			'warn',
			'always'
		],
		'no-console': 'warn',
		'no-else-return': 'warn',
		'space-unary-ops': 'warn',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'space-in-brackets': 'always',
	}
};