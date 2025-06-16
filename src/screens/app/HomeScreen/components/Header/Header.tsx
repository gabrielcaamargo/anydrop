import {Box, Icon, ImageBox, Text, TouchableOpacityBox} from '@components';
import {useAuthCredentialsProvider} from '@domain';

export function Header() {
	const {currentUser} = useAuthCredentialsProvider();

	return (
		<Box>
			<Box
				flexDirection="row"
				alignItems="center"
				justifyContent="space-between">
				<Box flexDirection="row" alignItems="center" gap="s16">
					<ImageBox
						source={{uri: currentUser?.photoURL}}
						height={48}
						width={48}
						style={{borderRadius: 24}}
					/>

					<Box>
						<Text preset="paragraphSmall">Bem-vindo(a)</Text>
						<Text color="yellowMain">{currentUser?.displayName}</Text>
					</Box>
				</Box>

				<TouchableOpacityBox>
					<Icon name="LogOut" />
				</TouchableOpacityBox>
			</Box>

			<Box height={1} width="100%" backgroundColor="grayText" marginTop="s24" />
		</Box>
	);
}
