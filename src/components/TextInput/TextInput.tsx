import React, {useRef} from 'react';
import {
	Pressable,
	TextInput as RNTextInput,
	TextInputProps as RNTextInputProps,
	StyleProp,
	TextStyle,
} from 'react-native';
import {
	Box,
	BoxProps,
	Icon,
	IconName,
	Text,
	TouchableOpacityBox,
} from '@components';
import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

export type TextInputIcon =
	| {
			iconName: IconName;
			onPressIcon?: () => void;
	  }
	| {
			iconName?: never;
			onPressIcon?: never;
	  };

export type TextInputProps = {
	label?: string;
	labelColor?: ThemeColors;
	boxProps?: BoxProps;
	errorMessage?: string;
} & RNTextInputProps &
	TextInputIcon;

export function TextInput({
	label,
	labelColor,
	iconName,
	onPressIcon,
	boxProps,
	errorMessage,
	...textInputProps
}: TextInputProps) {
	const colors = useAppTheme();
	const inputRef = useRef<RNTextInput>(null);

	const $textInputStyles: StyleProp<TextStyle> = {
		flex: 1,
		fontSize: 16,
		color: colors.textPrimary,
	};

	function onInputFocus() {
		inputRef.current?.focus();
	}

	const borderColor: ThemeColors = errorMessage
		? 'redMain'
		: inputRef.current?.isFocused()
		? 'blueMain'
		: 'grayLight';

	return (
		<Box>
			<Pressable onPress={onInputFocus}>
				{label && <Text color={labelColor ?? 'textPrimary'}>{label}</Text>}

				<Box
					borderWidth={1}
					borderColor={borderColor}
					marginTop="s4"
					height={48}
					paddingHorizontal="s16"
					borderRadius="s16"
					flexDirection="row"
					alignItems="center"
					justifyContent="space-between"
					{...boxProps}>
					<RNTextInput
						cursorColor={errorMessage ? 'redError' : 'greenMain'}
						style={$textInputStyles}
						placeholderTextColor={colors.grayMedium}
						ref={inputRef}
						{...textInputProps}
					/>

					{iconName && (
						<TouchableOpacityBox onPress={onPressIcon}>
							<Icon name={iconName} size={16} color="blueMain" />
						</TouchableOpacityBox>
					)}
				</Box>

				{errorMessage && (
					<Text color="redMain" preset="paragraphSmall">
						{errorMessage}
					</Text>
				)}
			</Pressable>
		</Box>
	);
}
