import { Box, Flex, Grid, Heading, Image } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import forwardIcon from '../../../assets/icons/forward-icon.svg';
import Card from '../../../components/Card';
import axios, { AxiosResponse } from 'axios';
import Container from '../../../components/Container';

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

const ExploreFeatures: React.FC = () => {
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
    <Box 
    as={`section`}
    
     >
      <Container>
        <Flex
         
          justify={{lg:`space-between`}}
          align={{lg:`center`}}
          mt={{lg:`3rem`}}
          mb={{lg:`1rem`}}
        >
          <Heading 
          fontSize={{lg:'2xl'}} 
          fontWeight={{lg:'bold'}} 
          lineHeight={{lg: 8}}
          >
            Featured
          </Heading>
          <Flex>
            <Image 
            src={forwardIcon} 
            alt='forward-icon' 
            w={'2rem'} 
            h={'2rem'} 
            mr={{lg: '.5rem'}}
            />
          </Flex>
        </Flex>

        {/* Conditional rendering based on error state */}
        {error ? (
          <Box>Error: {error}</Box>
        ) : (
          <Grid
            templateColumns={`repeat(4, 1fr)`}
            justifyContent={`space-between`}
            alignItems={'center'}
            gap={`1.64rem`}
          >
            {renderCards()}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default ExploreFeatures;
