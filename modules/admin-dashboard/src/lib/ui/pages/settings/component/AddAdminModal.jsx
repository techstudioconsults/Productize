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
  FormControl,
  FormLabel,
  Input,
  Text,
  Flex,
  useDisclosure
} from '@chakra-ui/react';

export const AddAdminModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
        <Flex gap={`5`} flexDirection={`column`}> 
        <FormControl>
                        <FormLabel color={`purple.300`} fontWeight={600}>
                                Name
                            </FormLabel>
                            <Input
                                // required
                                // defaultValue={}
                                bgColor={`grey.200`}
                                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                _placeholder={{ color: `grey.400` }}
                                placeholder="Enter Your Name"
                                variant={`filled`}
                                size={`lg`}
                                // {...register('full_name')}
                            />
                            <Text className={`tiny-text`} color={`red.200`}>
                                {/* {errors?.full_name?.message} */}
                            </Text>
                        </FormControl>
            <FormControl>
                        <FormLabel color={`purple.300`} fontWeight={600}>
                                Email Address
                            </FormLabel>
                            <Input
                                // required
                                // defaultValue={}
                                bgColor={`grey.200`}
                                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                _placeholder={{ color: `grey.400` }}
                                placeholder="Enter Your Name"
                                variant={`filled`}
                                size={`lg`}
                                // {...register('full_name')}
                            />
                            <Text className={`tiny-text`} color={`red.200`}>
                                {/* {errors?.full_name?.message} */}
                            </Text>
                        </FormControl>
            <FormControl>
                        <FormLabel color={`purple.300`} fontWeight={600}>
                                Password
                            </FormLabel>
                            <Input
                                // required
                                // defaultValue={}
                                bgColor={`grey.200`}
                                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                _placeholder={{ color: `grey.400` }}
                                placeholder="Enter Your Name"
                                variant={`filled`}
                                size={`lg`}
                                // {...register('full_name')}
                            />
                            <Text className={`tiny-text`} color={`red.200`}>
                                {/* {errors?.full_name?.message} */}
                            </Text>
                        </FormControl>
            <FormControl>
                        <FormLabel color={`purple.300`} fontWeight={600}>
                                Confirm Password
                            </FormLabel>
                            <Input
                                // required
                                // defaultValue={}
                                bgColor={`grey.200`}
                                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                _placeholder={{ color: `grey.400` }}
                                placeholder="Enter Your Name"
                                variant={`filled`}
                                size={`lg`}
                                // {...register('full_name')}
                            />
                            <Text className={`tiny-text`} color={`red.200`}>
                                {/* {errors?.full_name?.message} */}
                            </Text>
                        </FormControl>
        
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