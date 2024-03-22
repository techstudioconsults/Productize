import { Box, Card, Flex, Image, Link, Text } from '@chakra-ui/react';
import { SharedButton } from '@productize/ui';
import { Link as RouterLink } from 'react-router-dom';

const CoverPageCard = ({ desc, buttonText, img }) => {
    return (
        <Card variant={`plain`}>
            <Flex flexDir={`column`} alignItems={`center`}>
                <Box>
                    <Image src={img} />
                </Box>
                <Text textAlign={`center`} fontSize={{ base: `lg`, md: `2xl` }} mt={7}>
                    {desc}
                </Text>
            </Flex>
            <Box my={`3rem`}>
                <Link w={`fit-content`} m={`auto`} as={RouterLink} to={buttonText === `Explore as Seller` ? `/seller` : `/explore`}>
                    <SharedButton
                        text={buttonText}
                        width={'285px'}
                        height={'56px'}
                        bgColor={'transparent'}
                        textColor={'purple.200'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, md: `2xl` }}
                        btnExtras={{
                            border: `1px solid #6D5DD3`,
                        }}
                    />
                </Link>
            </Box>
        </Card>
    );
};
export default CoverPageCard;
