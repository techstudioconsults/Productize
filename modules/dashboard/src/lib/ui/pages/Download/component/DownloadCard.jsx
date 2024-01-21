import { Box, Card, CardBody, CardHeader, Flex, Heading, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import React from "react";

const DownloadCard = ({ product }) => {
    const formatCurrency = useCurrency();
    return (
        <Card variant={`outline`} overflow={`hidden`} maxW={`266px`}>
            <Box h={{ base: ``, lg: `266px` }}>
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
    );
};

export default DownloadCard;
