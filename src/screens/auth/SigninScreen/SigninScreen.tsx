import {Box, Button, ImageBox, Screen, Text} from '@components';
import {useAuth} from '@domain';
import {useIsIOS} from '@hooks';
import {AppleButton} from '@invertase/react-native-apple-authentication';

export function SigninScreen() {
	const isIOS = useIsIOS();
	const {signinWithApple} = useAuth();

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
				{isIOS && (
					<AppleButton
						onPress={signinWithApple}
						buttonStyle={AppleButton.Style.DEFAULT}
						buttonType={AppleButton.Type.SIGN_IN}
						style={{
							width: '100%',
							height: 48,
						}}
					/>
				)}
			</Box>
		</Screen>
	);
}
