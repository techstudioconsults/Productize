import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export const ExploreBanner: React.FC = () => {
    return (
        <Flex
            alignItems={`center`}
            bgColor={`yellow.100`}
            bgImg={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1706092414/productize/Frame_40353_wiryex.png`}
            backgroundSize={`contain`}
            backgroundRepeat={`no-repeat`}
            backgroundPosition={`right bottom`}
            h={`164px`}
            borderRadius={`9px`}
            padding={10}
            // maxW={}
        >
            <Text as={`h4`} textAlign={'start'} color={'#0E0A2D'} fontWeight={'bold'} lineHeight={10} maxW={`35rem`}>
                Unlock your potential with creator’s curated course.
            </Text>
        </Flex>
    );
};
