import {
	ImageBackground,
	ImageBackgroundProps,
	TouchableOpacity,
	TouchableOpacityProps,
	Image,
	ImageProps,
} from 'react-native';

import {
	createBox,
	createRestyleComponent,
	BackgroundColorProps,
	backgroundColor,
	SpacingProps,
	spacing,
	LayoutProps,
	layout,
	BorderProps,
	border,
} from '@shopify/restyle';
import {Theme} from '@theme';

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
	SpacingProps<Theme> &
	LayoutProps<Theme> &
	BorderProps<Theme> &
	TouchableOpacityProps;

export type ImageBoxProps = BackgroundColorProps<Theme> &
	SpacingProps<Theme> &
	LayoutProps<Theme> &
	BorderProps<Theme> &
	Omit<ImageProps, 'borderRadius' | 'width' | 'height'>;

export type ImageBackgroundBoxProps = BackgroundColorProps<Theme> &
	SpacingProps<Theme> &
	LayoutProps<Theme> &
	BorderProps<Theme> &
	Omit<ImageBackgroundProps, 'borderRadius' | 'width' | 'height'>;

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export const TouchableOpacityBox = createRestyleComponent<
	TouchableOpacityBoxProps,
	Theme
>([backgroundColor, spacing, layout, border], TouchableOpacity);

export const ImageBox = createRestyleComponent<ImageBoxProps, Theme>(
	[backgroundColor, spacing, layout, border],
	Image,
);

export const ImageBackroundBox = createRestyleComponent<
	ImageBackgroundBoxProps,
	Theme
>([backgroundColor, spacing, layout, border], ImageBackground);
