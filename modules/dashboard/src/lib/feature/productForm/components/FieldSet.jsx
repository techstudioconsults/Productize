import { Box } from '@chakra-ui/react';

const FieldSet = ({ label, children }) => {
    return (
        <Box>
            {label && <legend>{label}</legend>}
            <Box>{children}</Box>
        </Box>
    );
};

export default FieldSet;
