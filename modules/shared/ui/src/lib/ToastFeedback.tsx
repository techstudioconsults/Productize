import { Box, Card, Image, Text } from '@chakra-ui/react';

interface toastProps {
	title?: string;
	message: string;
	bgColor?: string;
	icon?: string;
}

export const ToastFeedback = ({
	title,
	message,
	icon,
	bgColor,
}: toastProps) => {
	return (
		<Card
			display={`flex`}
			flexDir={`row`}
			alignItems={`center`}
			w={{ base: `100%`, lg: `702px` }}
			p={1}
			bg={bgColor || `grey.100`}
		>
			<Box borderRight={`1px solid green`} p={2}>
				<Image
					objectFit={`cover`}
					objectPosition={`center`}
					src={
						icon ||
						`https://res.cloudinary.com/dkszgtapy/image/upload/v1697538678/productize/Rectangle_ikpmwt.png`
					}
					alt="img"
				/>
			</Box>
			<Box p={2}>
				<Text fontWeight={600}>{title || `Congratulations!`}</Text>
				<Text className="small-text" color={`grey.400`}>
					{message}
				</Text>
			</Box>
		</Card>
	);
};
