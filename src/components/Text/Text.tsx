import {createText, TextProps as RTextProps} from '@shopify/restyle';
import {Theme} from '@theme';
import {TextProps as RNTextProps, TextStyle} from 'react-native';

export type TextPreset =
	| 'headingExtraLarge'
	| 'headingLarge'
	| 'headingMedium'
	| 'headingSmall'
	| 'paragraphLarge'
	| 'paragraphMedium'
	| 'paragraphSmall'
	| 'captionLarge'
	| 'captionMedium'
	| 'captionSmall';

export type TextFontWeight =
	| 'Light'
	| 'Regular'
	| 'Medium'
	| 'SemiBold'
	| 'Bold';

export interface TextProps
	extends Omit<RTextProps<Theme>, 'fontWeight'>,
		RNTextProps {
	fontWeight?: TextFontWeight;
	preset?: TextPreset;
}

function getFontFamily(fontWeight: TextFontWeight) {
	return `Inter_${fontWeight}`;
}

const fontSizes: Record<TextPreset, TextStyle> = {
	headingExtraLarge: {fontSize: 32, lineHeight: 40},
	headingLarge: {fontSize: 28, lineHeight: 36},
	headingMedium: {fontSize: 24, lineHeight: 32},
	headingSmall: {fontSize: 20, lineHeight: 28},

	paragraphLarge: {fontSize: 18, lineHeight: 28},
	paragraphMedium: {fontSize: 16, lineHeight: 24},
	paragraphSmall: {fontSize: 14, lineHeight: 20},

	captionLarge: {fontSize: 12, lineHeight: 16},
	captionMedium: {fontSize: 10, lineHeight: 16},
	captionSmall: {fontSize: 8, lineHeight: 12},
};

export function Text({
	children,
	preset = 'paragraphMedium',
	fontWeight = 'Regular',
	color = 'textPrimary',
	...textProps
}: TextProps) {
	const RText = createText<Theme>();
	console.log('log:::', getFontFamily(fontWeight));
	return (
		<RText
			{...textProps}
			fontSize={fontSizes[preset].fontSize}
			lineHeight={fontSizes[preset].lineHeight}
			fontFamily={getFontFamily(fontWeight)}
			color={color}>
			{children}
		</RText>
	);
}
