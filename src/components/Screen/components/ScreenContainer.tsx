import {ScrollView, ScrollViewProps, View, ViewProps} from 'react-native';

interface ScrollViewContainerProps extends ScrollViewProps {
	backgroundColor: string;
}

interface ViewContainerProps extends ViewProps {
	backgroundColor: string;
}

export function ScrollViewContainer({
	children,
	backgroundColor,
	...scrollViewProps
}: ScrollViewContainerProps) {
	return (
		<ScrollView style={{flex: 1, backgroundColor}} {...scrollViewProps}>
			{children}
		</ScrollView>
	);
}

export function ViewContainer({
	children,
	backgroundColor,
	...viewProps
}: ViewContainerProps) {
	return (
		<View style={{flex: 1, backgroundColor}} {...viewProps}>
			{children}
		</View>
	);
}
