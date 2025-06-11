import { createText, TextProps as RTextProps } from "@shopify/restyle";
import { Theme } from "@theme";
import { TextProps as RNTextProps, TextStyle } from "react-native";

export type TextPreset =
	| "headingExtraLarge"
	| "headingLarge"
	| "headingMedium"
	| "headingSmall"
	| "paragraphLarge"
	| "paragraphMedium"
	| "paragraphSmall"
	| "captionLarge"
	| "captionMedium"
	| "captionSmall";

export type FontFamily = "DMSans" | "Inter";

export type TextFontWeight = "Regular" | "Medium" | "SemiBold" | "Bold";

export interface TextProps
	extends Omit<RTextProps<Theme>, "fontWeight">,
		RNTextProps {
	fontWeight?: TextFontWeight;
	preset?: TextPreset;
	fontFamily?: FontFamily;
}

function getFontFamily(fontFamily: FontFamily, fontWeight: TextFontWeight) {
	const fontWeightMapper: Record<TextFontWeight, string> = {
		Regular: "400Regular",
		Medium: "500Medium",
		SemiBold: "600SemiBold",
		Bold: "700Bold",
	};

	return `${fontFamily}_${fontWeightMapper[fontWeight]}`;
}

const fontSizes: Record<TextPreset, TextStyle> = {
	headingExtraLarge: { fontSize: 32, lineHeight: 40 },
	headingLarge: { fontSize: 28, lineHeight: 36 },
	headingMedium: { fontSize: 24, lineHeight: 32 },
	headingSmall: { fontSize: 20, lineHeight: 28 },

	paragraphLarge: { fontSize: 18, lineHeight: 28 },
	paragraphMedium: { fontSize: 16, lineHeight: 24 },
	paragraphSmall: { fontSize: 14, lineHeight: 20 },

	captionLarge: { fontSize: 12, lineHeight: 16 },
	captionMedium: { fontSize: 10, lineHeight: 16 },
	captionSmall: { fontSize: 8, lineHeight: 12 },
};

export function Text({
	children,
	preset = "paragraphMedium",
	fontWeight = "Regular",
	fontFamily = "Inter",
	...textProps
}: TextProps) {
	const RText = createText<Theme>();

	return (
		<RText
			fontSize={fontSizes[preset].fontSize}
			lineHeight={fontSizes[preset].lineHeight}
			fontFamily={getFontFamily(fontFamily, fontWeight)}
			{...textProps}
		>
			{children}
		</RText>
	);
}
