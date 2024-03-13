import { Card, CardBody, CardFooter, CardHeader, Divider, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react';
import { SharedButton } from '@productize/ui';

const ProductCardDetailsInput = () => {
    return (
        <Card maxW="sm">
            <CardHeader>
                <Text fontWeight={600}>Enter card details</Text>
            </CardHeader>
            <CardBody pt={0}>
                <Stack gap={3}>
                    <FormControl>
                        <FormLabel fontWeight={`500`} fontSize={`sm`}>
                            Name on Card
                        </FormLabel>
                        <Input bg={`grey.200`} placeholder="Enter name" type="text" />
                    </FormControl>
                    <FormControl>
                        <FormLabel fontWeight={`500`} fontSize={`sm`}>
                            Card Number
                        </FormLabel>
                        <Input bg={`grey.200`} placeholder="Card Number" type="text" />
                    </FormControl>
                </Stack>
            </CardBody>
            <CardHeader>
                <Divider mb={3} />
                <Text fontWeight={600}>Contact information</Text>
            </CardHeader>
            <CardBody pt={0}>
                <Stack gap={3}>
                    <FormControl>
                        <FormLabel fontWeight={`500`} fontSize={`sm`}>
                            Account Email
                        </FormLabel>
                        <Input bg={`grey.200`} placeholder="Enter email" type="email" />
                    </FormControl>
                </Stack>
                <Divider mt={3} />
                <Stack gap={3}>
                    <FormControl>
                        <FormLabel fontWeight={`500`} fontSize={`sm`}>
                            Account Name
                        </FormLabel>
                        <Input bg={`grey.200`} placeholder="Enter name" type="email" />
                    </FormControl>
                </Stack>
                <Divider mt={3} />
            </CardBody>
            <CardFooter pt={0}>
                <SharedButton
                    text={'Pay'}
                    width={'100%'}
                    height={'38px'}
                    bgColor={'purple.200'}
                    textColor={'white'}
                    borderRadius={'4px'}
                    fontSize={{ base: `sm`, xl: `md` }}
                />
            </CardFooter>
        </Card>
    );
};

export default ProductCardDetailsInput;
