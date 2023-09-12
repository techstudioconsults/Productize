import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
// import forwardIcon from '../../assets/icons/forward-icon.svg';
// import Card from '../shared-ui/Card';
import axios, { AxiosResponse } from 'axios';
import Card from './Card';
import { Icon } from '@iconify/react';
// import Container from '../shared-ui/Container';

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

export interface slideProps {
  title: string;
}

export const ExploreFeatures = ({ title }: slideProps) => {
  // State to hold the products and error message
  const [products, setProducts] = useState<Product[]>([]); // Change type to Product[]
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from the API
      const response: AxiosResponse<Product[]> = await axios.get(
        'https://fakestoreapi.com/products?limit=4'
      );

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
        heading={product.title}
        rate={product.rating.rate}
        count={product.rating.count}
        price={product.price}
      />
    ));
  };

  return (
    <Flex>
      <Container p={0} maxW={`70rem`}>
        <Flex mb={5} justifyContent={`space-between`} alignItems={`center`}>
          <Text as={`h4`}>{title}</Text>
          <Flex>
            <Icon fontSize={`1.5rem`} icon={`solar:arrow-right-bold-duotone`} />
          </Flex>
        </Flex>

        <Flex py={2} w={`100%`} overflow={`auto`}>
          {/* Conditional rendering based on error state */}
          {error ? (
            <Box>Error: {error}</Box>
          ) : (
            <Grid
              templateColumns={{
                base: `repeat(4, 1fr)`,
              }}
              w={`100%`}
              justifyContent={`space-between`}
              // templateColumns={{
              //   base: `repeat(1, 1fr)`,
              //   md: `repeat(2, 1fr)`,
              //   lg: `repeat(4, 1fr)`,
              // }}
              gap={`1.64rem`}
            >
              {renderCards()}
            </Grid>
          )}
        </Flex>
      </Container>
    </Flex>
  );
};
