import { Box, FormLabel, Text } from '@chakra-ui/react';
import React from 'react';

export const Field = ({ label, children, htmlFor, error }) => {
    const id = htmlFor || getChildId(children);
    return (
        <Box>
            {label && (
                <FormLabel color={`purple.300`} fontWeight={600} htmlFor={id}>
                    {label}
                </FormLabel>
            )}
            {children}
            {error && (
                <Text className={`tiny-text`} color={`red.200`}>
                    {error.message}
                </Text>
            )}
        </Box>
    );
};

const getChildId = (children) => {
    const child = React.Children.only(children);

    if ('id' in child.props) {
        return child.props.id;
    }
};
