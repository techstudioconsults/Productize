import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import lines from '@icons/Lines.png';

export const ExploreBanner: React.FC = () => {
    return (
        <Flex
            alignItems={`center`}
            bgColor={`yellow.100`}
            justifyContent={`space-between`}
            bgImg={lines}
            backgroundSize={`cover`}
            backgroundRepeat={`no-repeat`}
            backgroundPosition={`right bottom`}
            h={`164px`}
            borderRadius={`9px`}
            padding={{ base: 5, lg: 10 }}
        >
            <Text as={`h4`} textAlign={'start'} color={'#0E0A2D'} fontWeight={'bold'} lineHeight={10} maxW={`35rem`}>
                Unlock your potential with creator’s curated course.
            </Text>
            <Image
                display={{ base: `none`, lg: `initial` }}
                src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1706092414/productize/Frame_40353_wiryex.png`}
            />
        </Flex>
    );
};
