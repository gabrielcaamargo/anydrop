module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module:react-native-dotenv',
			{
				envName: 'APP_ENV',
				moduleName: '@env',
				path: '.env',
				blocklist: null,
				allowlist: null,
				safe: false,
				allowUndefined: true,
				verbose: false,
			},
		],
		[
			'module-resolver',
			{
				root: '.',
				alias: {
					'@brand': './src/brand',
					'@components': './src/components',
					'@hooks': './src/hooks',
					'@routes': './src/routes',
					'@screens': './src/screens',
					'@theme': './src/theme',
					'@domain': './src/domain',
					'@api': './src/api',
					'@types': './src/types',
					'@lib': './src/lib',
					'@storage': './src/storage',
					'@config': './src/config',
				},
			},
		],
		'react-native-reanimated/plugin',
	],
};
