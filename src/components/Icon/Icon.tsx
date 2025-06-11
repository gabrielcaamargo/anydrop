import {icons} from 'lucide-react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';
import {Box, BoxProps} from '../Box/Box';

export type IconName = keyof typeof icons;

export interface IconProps extends BoxProps {
	name: IconName;
	size?: number;
	color?: ThemeColors;
}

export function Icon({
	name,
	size = 20,
	color = 'textPrimary',
	...boxProps
}: IconProps) {
	const colors = useAppTheme();
	const IconComponent = icons[name];

	console.log('IconComponent', IconComponent);

	return (
		<Box {...boxProps}>
			<IconComponent size={size} color={colors[color]} />
		</Box>
	);
}
