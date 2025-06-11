import {createTheme} from '@shopify/restyle';

const palette = {
	blueMain: '#4A90E2',
	blueDark: '#357ABD',
	blueLight: '#E8F4FD',
	blueAlt: '#5A9BF0',

	aquaMain: '#10B981',
	aquaDark: '#059669',
	aquaLight: '#D1FAE5',

	orangeMain: '#F59E0B',
	orangeDark: '#D97706',
	orangeLight: '#FEF3C7',
	orangeAlt: '#FBBF24',

	white: '#FFFFFF',
	grayLight: '#F8FAFC',
	grayMedium: '#9CA3AF',
	graySemiDark: '#6B7280',
	grayDark: '#2A2D3A',
	grayLightest: '#E5E7EB',

	grayBase: '#1F2937',
	graySurface: '#374151',
	graySurfaceHighlight: '#4B5563',

	redMain: '#EF4444',
	greenMain: '#10B981',
	purpleMain: '#8B5CF6',
	yellowMain: '#F59E0B',
} as const;

export const theme = createTheme({
	colors: {
		...palette,
		backgroundColor: palette.grayBase,

		textPrimary: palette.white,
		textSecondary: palette.grayLightest,
	},

	spacing: {
		s2: 2,
		s4: 4,
		s8: 8,
		s12: 12,
		s16: 16,
		s20: 20,
		s24: 24,
		s32: 32,
		s40: 40,
	},

	borderRadii: {
		s4: 4,
		s8: 8,
		s12: 12,
		s16: 16,
	},

	textVariants: {
		defaults: {},
	},
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
