import { Center, Spinner } from '@chakra-ui/react';

interface spinnerProp {
	size?: string;
}

export const SpinnerComponent = () => {
	return (
		<Center w={`100%`} h={`100vh`}>
			<Spinner
				thickness="4px"
				speed="0.65s"
				emptyColor="gray.200"
				color="purple.200"
				size="xl"
			/>
		</Center>
	);
};
export const SpinnerComponentSmall = ({ size }: spinnerProp) => {
	return (
		<Spinner
			speed="0.65s"
			emptyColor="gray.200"
			color="purple.200"
			size={size}
		/>
	);
};
