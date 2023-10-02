import React, { ReactNode } from 'react';
import {
  Center,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { SharedButton } from './SharedButton';
import { Icon } from '@iconify/react';

interface modalProps {
  children: ReactNode;
}

export const ModalComp = ({ children }: modalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SharedButton
        text={'Upgrade Plan'}
        btnExtras={{
          onClick: onOpen,
        }}
        width={'fit-content'}
        height={'48px'}
        bgColor={'purple.200'}
        textColor={'white'}
        borderRadius={'4px'}
        fontSize={{ base: `sm`, md: `md` }}
      />

      <Modal
        size={{ base: `full`, md: `5xl` }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent borderRadius={`1rem`} py={10} px={{ base: 4, md: 20 }}>
          {children}
          <Flex p={5} justifyContent={`center`} alignItems={`center`}>
            <Center cursor={`pointer`} onClick={onClose}>
              <Icon fontSize={`2rem`} icon={'system-uicons:chevron-left'} />
              <Text fontWeight={600}>Go Back</Text>
            </Center>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};
