import { Text } from "@chakra-ui/react";
import React from "react";

interface errorProp {
    error: string;
}

export const ErrorText = ({ error }: errorProp) => {
    return (
        <Text mb={4} className="small-text" color={`red.200`}>
            {error}
        </Text>
    );
};

// export default ErrorText;
