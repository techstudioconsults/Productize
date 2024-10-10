import React from 'react';
import { SharedButton } from '@productize/ui';
import { useRevokeAdminMutation } from '@productize/redux';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Text, Flex, Button } from '@chakra-ui/react';
import { selectCurrentToken } from '@productize/redux';
import { useSelector } from 'react-redux';
export const RevokeAdminModal = ({ isOpen, onClose, user, onConfirm }) => {
    const [revokeAdmin, {isLoading, isError, error}] = useRevokeAdminMutation();
    const token = useSelector(selectCurrentToken)
    

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);


    const handleRemoveAdmin = async (userId) => {
      try {
          const res = await revokeAdmin({ userID: userId, token }).unwrap();
          console.log(res.data);
          if(res.data.message === "Admin account has been deleted"){
            window.location.reload();
          }
          onClose()
      } catch (error) {
          console.log(error);
      }
  };

    return (
        <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}

            <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent padding={`1rem`}>
                    <Flex justifyContent={`center`} alignItems={`center`}>
                        <img src="https://res.cloudinary.com/doejcrfso/image/upload/v1723469894/productize/Wavy_Bus-09_Single-01_1_wgev9j.svg" alt="" />
                    </Flex>
                    <ModalHeader textAlign={`center`}>Remove Admin User</ModalHeader>
                    <ModalBody pb={6}>
                        <Flex gap={`5`} flexDirection={`column`}>
                            <Text textAlign={'center'}>Are you sure you want to remove this admin user?</Text>
                        </Flex>
                    </ModalBody>

                    <ModalFooter justifyContent={'center'} gap={`1rem`}>
                    <Button onClick={()=> handleRemoveAdmin(user?.id)} colorScheme="red" mr={3} width={`246px`} height={`40px`} isLoading={isLoading}>
                            Remove Admin
                        </Button>
                        <SharedButton
                            btnExtras={{
                                border: `1px solid #6D5DD3`,
                                onClick: onClose,
                            }}
                            text={'Go Back'}
                            width={'246px'}
                            height={'40px'}
                            bgColor={`transparent`}
                            textColor={`purple.200`}
                            borderRadius={'4px'}
                            fontSize={{ base: `sm`, md: `md` }}
                        />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
