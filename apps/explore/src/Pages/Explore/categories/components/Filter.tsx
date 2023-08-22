import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const Filter = () => {
  return (
    <div>
      <Flex justify="center" align="center" gap="1rem">
        <Heading>Filter</Heading>
        <Text>Clear</Text>
      </Flex>

      <Box>
        <select name="show">
          <option value="show">Showing</option>
          <option value="show">Design</option>
          <option value="show">Autobus</option>
          <option value="show">Painting</option>
        </select>
      </Box>

      <Box>
        <select name="sort">
          <option value="show">Sort by</option>
          <option value="show">Design</option>
          <option value="show">Autobus</option>
          <option value="show">Painting</option>
        </select>
      </Box>

      <Box>
        <select name="rating">
          <option value="show">Rating</option>
          <option value="show">Design</option>
          <option value="show">Autobus</option>
          <option value="show">Painting</option>
        </select>
      </Box>

      <Box>
        <select name="show">
          <option value="show">Price</option>
          <option value="show">Design</option>
          <option value="show">Autobus</option>
          <option value="show">Painting</option>
        </select>
      </Box>
    </div>
  );
};

export default Filter;
