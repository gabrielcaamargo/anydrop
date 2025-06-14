import {Box, Button, ImageBox, Screen, Text} from '@components';

export function SigninScreen() {
	return (
		<Screen flex={1} alignItems="center">
			<Box flex={1} alignItems="center" justifyContent="center">
				<ImageBox
					source={require('../../../assets/svg/send-message.png')}
					width={400}
					height={400}
				/>
			</Box>

			<Text preset="headingExtraLarge" color="yellowMain" fontWeight="Bold">
				AnyDrop
			</Text>
			<Text>Compartilhamento feito de forma fácil e rápida.</Text>

			<Box gap="s8" width="100%" paddingBottom="s24" marginTop="s16">
				<Button title="Entrar com Google" preset="outline" />
				<Button title="Entrar com Apple" preset="outline" />
			</Box>
		</Screen>
	);
}
