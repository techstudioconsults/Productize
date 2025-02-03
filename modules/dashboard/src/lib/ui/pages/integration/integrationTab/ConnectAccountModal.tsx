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
    Input,
    FormControl,
    FormLabel,
    FormHelperText,
    Box,
    Textarea,
    useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '@productize/redux';
import { useState } from 'react';
import { IntegrationSuccessModal } from './IntegrationSuccessModal';

interface ConnectAccountModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConnect: (credentials: { apiKey: string }) => void;
    integrationName: string;
    integrationLogo: string;
    isLoading?: boolean;
}

interface IntegrationSuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    integrationName: string;
    integrationLogo: string;
}

export const ConnectAccountModal = ({
    isOpen,
    onClose,
    integrationName,
    integrationLogo,
    isLoading: externalLoading = false,
}: ConnectAccountModalProps) => {
    const authToken = useSelector(selectCurrentToken);
    const toast = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [apiKey, setApiKey] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/emailMarketing/token`,
                {
                    token: apiKey.trim(),
                    provider: integrationName === 'MailerLite' ? 'MailerLite' : 'MailChimp'
                },
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.data) {
                setApiKey('');
                onClose();
                setShowSuccessModal(true);
            }
        } catch (error: any) {
            console.error('Error connecting account:', error);
            toast({
                title: 'Connection failed',
                description: error.response?.data?.message || 'Failed to connect to the service. Please check your API key and try again.',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setApiKey(e.target.value);
    };

    const isFormValid = apiKey.trim().length > 0;

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent maxW="555px">
                    <form onSubmit={handleSubmit}>
                        <ModalHeader>
                            <Box>
                                {/* <Image src={integrationLogo} alt={integrationName} boxSize="60px" objectFit="contain" /> */}
                                <Text fontSize="4xl" fontWeight="bold">
                                    Connect Your Account
                                </Text>
                                <Text color="gray.600" textAlign="left">
                                    Enter your API key to connect your {integrationName} account.
                                </Text>
                            </Box>
                        </ModalHeader>
                        <ModalBody>
                            <VStack align="left">
                                <FormControl isDisabled={isSubmitting}>
                                    <Box mb={4}>
                                        <FormLabel my={0} fontSize="md" fontWeight="bold">API Key</FormLabel>
                                        <Text color="gray.600" fontSize="sm">
                                            You can find your API key in your {integrationName} account settings.
                                        </Text>
                                    </Box>
                                    <Textarea 
                                        bg="gray.200" 
                                        height={246} 
                                        value={apiKey}
                                        onChange={handleChange}
                                        placeholder="Enter your API key"
                                        isDisabled={isSubmitting}
                                    />
                                </FormControl>
                            </VStack>
                        </ModalBody>
                        <ModalFooter gap={2}>
                            <Button 
                                type="submit" 
                                w="full" 
                                h="48px" 
                                colorScheme="purple" 
                                isLoading={isSubmitting || externalLoading}
                                loadingText="Connecting..."
                                isDisabled={!isFormValid || isSubmitting || externalLoading}
                            >
                                Add Integration
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
            
            <IntegrationSuccessModal 
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                integrationName={integrationName}
                integrationLogo={integrationLogo}
            />
        </>
    );
}; 