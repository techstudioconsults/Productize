import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

export const useDrawerState = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [menuColor, setMenuColor] = useState('white');

    return {
        isOpen,
        onOpen,
        onClose,
        menuColor,
        setMenuColor,
    };
};
