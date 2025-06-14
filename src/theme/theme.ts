import {createTheme} from '@shopify/restyle';

const palette = {
	// Branco - Base limpa
	whitePure: '#FFFFFF',
	whitePaper: '#FEFEFE',
	whiteGhost: '#F8F9FA',

	// Cinza - Neutros e textos
	grayBorder: '#E9ECEF',
	grayMuted: '#ADB5BD',
	graySubtle: '#6C757D',
	grayText: '#212529',
	grayDeep: '#1A1D23',
	grayBlack: '#000000',

	// Amarelo - Accent principal
	yellowMain: '#F59E0B',
	yellowDark: '#D97706',
	yellowLight: '#FEF3C7',

	// Verde - Success states
	greenMain: '#059669',
	greenLight: '#F0FDF4',

	// Laranja - Warning states
	orangeMain: '#EA580C',
	orangeLight: '#FFF7ED',

	// Vermelho - Error states
	redMain: '#DC2626',
	redLight: '#FEF2F2',

	// Slate - Elementos secundários
	slateMain: '#64748B',
	slateLight: '#F1F5F9',
	slateDark: '#334155',
};

export const theme = createTheme({
	colors: {
		...palette,
		backgroundColor: palette.grayDeep,

		textPrimary: palette.whitePure,
		textSecondary: palette.grayMuted,
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
