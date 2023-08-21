import { Box, Heading, Image } from '@chakra-ui/react';
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

const ExploreSec2: React.FC = () => {
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
    //  pl={`14.375rem`} 
    //  pr={'14.3125rem'}
     >
      <Container>
        <Box
          display={`flex`}
          justifyContent={`space-between`}
          alignItems={`center`}
          mt={`3rem`}
          mb={`1rem`}
        >
          <Heading fontSize={'2xl'} fontWeight={'bold'} lineHeight={8}>
            Featured
          </Heading>
          <Box display={'flex'}>
            <Image src={forwardIcon} alt='forward-icon' w={'2rem'} h={'2rem'} />
          </Box>
        </Box>

        {/* Conditional rendering based on error state */}
        {error ? (
          <Box>Error: {error}</Box>
        ) : (
          <Box
            display={`grid`}
            gridTemplateColumns={`repeat(4, 1fr)`}
            justifyContent={`space-between`}
            alignItems={'center'}
            gap={`4rem`}
          >
            {renderCards()}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ExploreSec2;
