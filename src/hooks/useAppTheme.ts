import {useTheme} from '@shopify/restyle';

import {Theme} from '@theme';

export function useAppTheme() {
	const {colors} = useTheme<Theme>();

	return colors;
}
