import { Box, Card, CardBody, CardHeader, Flex, Heading, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import React from "react";

const DownloadCard = () => {
    const formatCurrency = useCurrency();
    return (
        <Card variant={`outline`} overflow={`hidden`} maxW={`266px`}>
            <Box h={{ base: ``, lg: `266px` }}>
                <Image
                    w={`100%`}
                    h={`100%`}
                    objectFit="cover"
                    src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1702731396/Images_j3apr5.png"
                    alt="Chakra UI"
                />
            </Box>
            <CardBody p={3} pb={0}>
                <Stack gap={1}>
                    <Text fontSize={{ base: `12px`, lg: `sm` }} fontWeight={700}>
                        SUI Design Systems Mastery
                    </Text>
                    <Text fontSize={{ base: `10px`, lg: `xs` }}>By Temilade Openiyi</Text>
                </Stack>
            </CardBody>
            <CardHeader p={3}>
                <Flex>
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                        <Text fontWeight={700} color={`purple.200`}>
                            {formatCurrency(3000)}
                        </Text>
                    </Flex>
                    {/* <IconButton variant="ghost" colorScheme="gray" aria-label="See menu" icon={<Icon icon={`pepicons-pop:dots-y`} />} /> */}
                    <Menu>
                        <MenuButton
                            onClick={(e) => e.stopPropagation()}
                            border={`none`}
                            as={IconButton}
                            aria-label="Options"
                            icon={<Icon icon={`pepicons-pop:dots-y`} />}
                            variant="outlined"
                        />
                        <MenuList zIndex={999}>
                            <MenuItem justifyContent={`flex-start`}>Share</MenuItem>
                            <MenuItem justifyContent={`flex-start`}>View receipt</MenuItem>
                            <MenuItem color={`red.200`} justifyContent={`flex-start`}>
                                Delete
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </CardHeader>
        </Card>
    );
};

export default DownloadCard;
