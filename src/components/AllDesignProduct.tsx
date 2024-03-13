import { Box, Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import forwardIcon from '../../../assets/icons/forward-icon.svg';
import Card from './Card';
import axios, { AxiosResponse } from 'axios';
import Container from './Container';
import Filter from './Filter';

// Define the type for a product
interface Product {
    id: number;
    image: string;
    title: string;
    rating: {
        rate: number;
        count: number;
    };
    price: number;
}

const AllDesignProduct = () => {
    const [products, setProducts] = useState<Product[]>([]); // Change type to Product[]
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Fetch data from the API
            const response: AxiosResponse<Product[]> = await axios.get('https://fakestoreapi.com/products');

            // Check for successful response status
            if (response.status !== 200) {
                setError('Network response was not okay');
            }

            // Update state with fetched products and clear error
            setProducts(response.data);
            setError(null);
        } catch (error) {
            // Handle API request error
            console.error(error);
            setError('Failed to fetch data from the API');
        }
    };

    // Render product cards
    const renderCards = () => {
        return products.map((product) => (
            <Card
                key={product.id}
                image={product.image}
                heading={product.title.slice(0, 36)}
                rate={product.rating.rate}
                count={product.rating.count}
                price={product.price}
            />
        ));
    };

    return (
        <Box as={`section`}>
            <Container>
                <Grid
                    templateColumns={{ lg: 'repeat(2,1fr)' }}
                    // justifyContent={{lg: 'start'}}
                    alignItems={{ lg: 'flex-start' }}
                >
                    <GridItem>
                        <Filter />
                    </GridItem>

                    <GridItem>
                        <Flex justify={{ lg: `space-between` }} align={{ lg: `center` }} mt={{ lg: `3rem` }} mb={{ lg: `1rem` }}>
                            <Heading fontSize={{ lg: '2xl' }} fontWeight={{ lg: 'bold' }} lineHeight={{ lg: 8 }}>
                                All Design Products
                            </Heading>
                            <Flex>
                                <Image src={forwardIcon} alt="forward-icon" w={'2rem'} h={'2rem'} mr={{ lg: '.5rem' }} />
                            </Flex>
                        </Flex>

                        {/* Conditional rendering based on error state */}
                        {error ? (
                            <Box>Error: {error}</Box>
                        ) : (
                            <Grid templateColumns={`repeat(3, auto)`} justifyContent={`space-between`} alignItems={'center'} gap={`1.64rem`}>
                                {renderCards()}
                            </Grid>
                        )}
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default AllDesignProduct;
