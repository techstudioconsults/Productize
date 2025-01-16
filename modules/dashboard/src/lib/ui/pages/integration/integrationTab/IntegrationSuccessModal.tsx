import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';
import success from '../assets/success-icon.png';

interface IntegrationSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  integrationName: string;
}

export const IntegrationSuccessModal = ({ isOpen, onClose, integrationName }: IntegrationSuccessModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="751px" textAlign="center" p={4}>
        <ModalHeader paddingBottom={0}>
          <VStack spacing={4}>
            <Image src={success} alt="Success" boxSize="219px" objectFit="contain" />
            <Text fontSize="xl" fontWeight="bold">
            Integration Successful!
            </Text>
          </VStack>
        </ModalHeader>
        <ModalBody py={6}>
          <Text color="gray.600">
          Your {integrationName} account is now successfully integrated! Seamlessly sync data, automate tasks, 
          and boost productivity. Start exploring to unlock its potential!
          </Text>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button w="full" h="48px" colorScheme="purple" variant="outline" onClick={onClose}>
            Continue
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}; 