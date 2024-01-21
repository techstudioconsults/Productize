import { Center, SimpleGrid, Skeleton, Spinner, Stack } from "@chakra-ui/react";

interface spinnerProp {
    size?: string;
}

export const SpinnerComponent = () => {
    return (
        <Center w={`100%`} h={`100vh`}>
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="purple.200" size="xl" />
        </Center>
    );
};
export const SpinnerComponentSmall = ({ size }: spinnerProp) => {
    return <Spinner speed="0.65s" emptyColor="gray.200" color="purple.200" size={size} />;
};

export const OnBoardingLoader = () => {
    return (
        <Stack>
            <Skeleton startColor={`purple.100`} height="40px" borderRadius={`8px`} />
            <Skeleton startColor={`purple.100`} height="40px" borderRadius={`8px`} />
            <Skeleton startColor={`purple.100`} height="40px" borderRadius={`8px`} />
            <Skeleton startColor={`purple.100`} height="40px" borderRadius={`8px`} />
            <Skeleton startColor={`purple.100`} height="40px" borderRadius={`8px`} />
        </Stack>
    );
};
export const DownloadLoader = () => {
    return (
        <SimpleGrid mt={10} columns={{ base: 2, lg: 4 }} spacing={{ base: 1, lg: 5 }}>
            {[2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
                return <Skeleton key={num} startColor={`purple.100`} height="387px" maxW={`266px`} borderRadius={`8px`} />;
            })}
        </SimpleGrid>
    );
};
