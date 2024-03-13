import { Box, Card, CardBody, CardHeader, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import { useCurrency } from '@productize/hooks';
import { Link as ReactLink } from 'react-router-dom';

const DownloadCard = ({ product }) => {
    const formatCurrency = useCurrency();
    return (
        <Link w={{ base: `100%`, lg: `266px` }} as={ReactLink} to={`/dashboard/downloads/${product?.id}`} state={product}>
            <Card variant={`outline`} overflow={`hidden`} w={`100%`}>
                <Box h={{ base: `266px` }}>
                    <Image w={`100%`} h={`100%`} objectFit="cover" src={product?.thumbnail} alt={product?.title} />
                </Box>
                <CardBody p={3} pb={0}>
                    <Stack gap={1}>
                        <Text fontSize={{ base: `12px`, lg: `sm` }} fontWeight={700}>
                            {product?.title}
                        </Text>
                        <Text fontSize={{ base: `10px`, lg: `xs` }}>{product?.publisher}</Text>
                    </Stack>
                </CardBody>
                <CardHeader p={3}>
                    <Flex>
                        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                            <Text fontWeight={700} color={`purple.200`}>
                                {formatCurrency(product?.price)}
                            </Text>
                        </Flex>
                    </Flex>
                </CardHeader>
            </Card>
        </Link>
    );
};

export default DownloadCard;
