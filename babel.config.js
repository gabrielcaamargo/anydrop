module.exports = {
  presets: ['module:@react-native/babel-preset'],
	plugins: [
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
					},
				},
			],
			'react-native-reanimated/plugin',
		]
};
