import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Flex,
  Heading
} from '@chakra-ui/react';


export const RevokeAdminModal = ({isOpen, onClose, user, onConfirm}) => {

console.log(user);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={`center`}>Remove Admin User</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
        <Flex gap={`5`} flexDirection={`column`}> 
            <Text>Are you sure you want to remove this admin user?</Text>
        </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};