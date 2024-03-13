import { ProductCards } from './ProductCard';
import ProductNavbar from './ProductNavbar';
import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';
import arrowLeft from '@icons/Property_2_Arrow-left_kafkjg.svg';
import { useTokenExists } from '@productize/hooks';
import { useNavigate } from 'react-router-dom';

export const ProductCart = () => {
    const navigate = useNavigate();

    return (
        <>
            <ProductNavbar isAuth={useTokenExists()} />
            <Container mt={`5rem`} maxW={`50rem`}>
                <Flex w={`fit-content`} gap={8} alignItems={`center`} mb={5} cursor={`pointer`} onClick={() => navigate(-1)}>
                    <Box>
                        <Image src={arrowLeft} />
                    </Box>
                    <Text as={`h6`}>Back to product page</Text>
                </Flex>
                <ProductCards />
            </Container>
        </>
    );
};

export default ProductCart;
