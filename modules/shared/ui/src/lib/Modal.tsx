import { ReactNode } from 'react';
import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react';

interface modalProps {
    children: ReactNode;
    modalSize?: string;
    openModal: boolean;
    closeModal: () => void;
}

export const ModalComp = ({ children, modalSize, openModal, closeModal }: modalProps) => {
    return (
        <Modal closeOnOverlayClick={false} isCentered={true} size={{ base: `full`, lg: modalSize }} isOpen={openModal} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent borderRadius={`1rem`} py={10} px={{ base: 4, md: 10 }}>
                <ModalCloseButton />
                {children}
            </ModalContent>
        </Modal>
    );
};
