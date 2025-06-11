import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {Text, TextProps} from '../Text/Text';

type ButtonPreset = 'default' | 'outline';
type ButtonVariant = 'default' | 'disabled' | 'danger' | 'warning';

interface ButtonProps extends TouchableOpacityBoxProps {
	preset?: ButtonPreset;
	variant?: ButtonVariant;
	title: string;
}

const buttonPresets: Record<
	ButtonPreset,
	Record<ButtonVariant, {container: TouchableOpacityBoxProps; text: TextProps}>
> = {
	default: {
		default: {
			container: {
				backgroundColor: 'blueMain',
			},
			text: {
				color: 'white',
			},
		},
		danger: {
			container: {
				backgroundColor: 'redMain',
			},
			text: {
				color: 'white',
			},
		},
		disabled: {
			container: {
				backgroundColor: 'grayMedium',
			},
			text: {
				color: 'white',
			},
		},
		warning: {
			container: {
				backgroundColor: 'yellowMain',
			},
			text: {
				color: 'white',
			},
		},
	},

	outline: {
		default: {
			container: {
				borderWidth: 1,
				borderColor: 'blueMain',
			},
			text: {
				color: 'blueMain',
			},
		},
		danger: {
			container: {
				borderWidth: 1,
				borderColor: 'redMain',
			},
			text: {
				color: 'redMain',
			},
		},
		disabled: {
			container: {
				borderWidth: 1,
				borderColor: 'grayMedium',
			},
			text: {
				color: 'grayMedium',
			},
		},
		warning: {
			container: {
				borderWidth: 1,
				borderColor: 'yellowMain',
			},
			text: {
				color: 'yellowMain',
			},
		},
	},
};

export function Button({
	preset = 'default',
	variant = 'default',
	title,
	...touchableOpacityBoxProps
}: ButtonProps) {
	const buttonPreset = buttonPresets[preset][variant];

	return (
		<TouchableOpacityBox
			{...buttonPreset.container}
			borderRadius="s8"
			paddingVertical="s8"
			paddingHorizontal="s16"
			justifyContent="center"
			alignItems="center"
			activeOpacity={0.5}
			{...touchableOpacityBoxProps}
		>
			<Text {...buttonPreset.text} fontWeight="SemiBold">
				{title}
			</Text>
		</TouchableOpacityBox>
	);
}
