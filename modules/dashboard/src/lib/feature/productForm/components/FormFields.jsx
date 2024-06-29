// import { Box, FormLabel, Text } from '@chakra-ui/react';
// import React from 'react';

// export const Field = ({ label, children, htmlFor, error }) => {
//     const id = htmlFor || getChildId(children);
//     return (
//         <Box>
//             {label && (
//                 <FormLabel color={`purple.300`} fontWeight={600} htmlFor={id}>
//                     {label}
//                 </FormLabel>
//             )}
//             {children}
//             {error && (
//                 <Text className={`tiny-text`} color={`red.200`}>
//                     {error.message}
//                 </Text>
//             )}
//         </Box>
//     );
// };

// const getChildId = (children) => {
//     const child = React.Children.only(children);

//     if ('id' in child.props) {
//         return child.props.id;
//     }
// };

import { Box, Flex, FormLabel, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import React from 'react';

export const Field = ({ label, children, htmlFor, error }) => {
    const id = htmlFor || getChildId(children);
    return (
        <Box>
            {label && (
                <Flex as={FormLabel} alignItems={`flex-start`} htmlFor={id}>
                    <Text color="purple.300" fontWeight={600}>
                        {label}
                    </Text>
                    <span hidden={label?.includes(`optional`)}>
                        <Icon fontSize={`8px`} gap={1} color={`red`} icon="mdi:required" />
                    </span>
                </Flex>
            )}
            {children}
            {error && (
                <Text className="tiny-text" color="red.200">
                    {error.message}
                </Text>
            )}
        </Box>
    );
};

const getChildId = (children) => {
    const child = React.Children.only(children);

    if (child && child.props && 'id' in child.props) {
        return child.props.id;
    }

    return null;
};
