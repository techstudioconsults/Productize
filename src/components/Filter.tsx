import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const Filter = () => {
    return (
        <Box mt={{ lg: `3rem` }}>
            <Flex justify="space-between" align="center">
                <Heading>Filter</Heading>
                <Text mr={{ lg: '1.71rem' }}>Clear</Text>
            </Flex>

            <Flex>
                <select name="show">
                    <option value="show">Showing</option>
                    <option value="show">Design</option>
                    <option value="show">Autobus</option>
                    <option value="show">Painting</option>
                </select>
            </Flex>

            <Flex m={{ lg: '1.43rem 0' }}>
                <select name="sort">
                    <option value="show">Sort by</option>
                    <option value="show">Design</option>
                    <option value="show">Autobus</option>
                    <option value="show">Painting</option>
                </select>
            </Flex>

            <Flex>
                <select name="rating">
                    <option value="show">Rating</option>
                    <option value="show">Design</option>
                    <option value="show">Autobus</option>
                    <option value="show">Painting</option>
                </select>
            </Flex>

            <Flex mt={{ lg: '1.43rem' }}>
                <select name="show">
                    <option value="show">Price</option>
                    <option value="show">Design</option>
                    <option value="show">Autobus</option>
                    <option value="show">Painting</option>
                </select>
            </Flex>
        </Box>
    );
};

export default Filter;
