import 'lucide-react-native';

declare module 'lucide-react-native' {
	import {ColorValue} from 'react-native';

	export interface LucideProps {
		color?: ColorValue;
	}
}
