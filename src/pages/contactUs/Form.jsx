import { Box, Button, Center, Flex, FormControl, FormErrorMessage, Input, ModalBody, Stack, Text, Textarea, useDisclosure } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useContactUsMutation } from '@productize/redux';
import { contactUsFormSchema } from '@productize/dashboard';
import { yupResolver } from '@hookform/resolvers/yup';
import { ModalComp, SharedButton, ToastFeedback, useToastAction } from '@productize/ui';
import errorImg from '@icons/error.svg';

export const CustomForm = () => {
    const { toast, toastIdRef, close } = useToastAction();
    const [contactUs, { isLoading }] = useContactUsMutation();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(contactUsFormSchema),
    });

    const onSubmit = async (data) => {
        try {
            const res = await contactUs(data).unwrap();
            if (res) {
                reset();
                onOpen();
            }
        } catch (error) {
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        message={error?.response?.data?.message}
                        title="Contact Us Status"
                        icon={errorImg}
                        color={null}
                        btnColor={null}
                        bgColor={undefined}
                        handleClose={close}
                    />
                ),
            });
        }
    };

    return (
        <Box p={6} bg="gray.100" borderRadius="md" border="2px solid #000" boxShadow="3.9px 3.9px 0px 1px #0E0A2D">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                    <Flex justify="space-between">
                        <FormControl isInvalid={errors.firstname} borderColor="gray.800">
                            <Input size="lg" placeholder="First Name" {...register('firstname')} isDisabled={isLoading} />
                            <FormErrorMessage fontSize="xs">{errors.firstname && errors.firstname.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.lastname} borderColor="gray.800" ml={2}>
                            <Input size="lg" placeholder="Last Name" {...register('lastname')} isDisabled={isLoading} />
                            <FormErrorMessage fontSize="xs">{errors.lastname && errors.lastname.message}</FormErrorMessage>
                        </FormControl>
                    </Flex>
                    <FormControl isInvalid={errors.email} borderColor="gray.800">
                        <Input size="lg" type="email" placeholder="Email Address" {...register('email')} isDisabled={isLoading} />
                        <FormErrorMessage fontSize="xs">{errors.email && errors.email.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.subject} borderColor="gray.800">
                        <Input size="lg" placeholder="Subject" {...register('subject')} isDisabled={isLoading} />
                        <FormErrorMessage fontSize="xs">{errors.subject && errors.subject.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.message} borderColor="gray.800">
                        <Textarea h="10rem" placeholder="Message" {...register('message')} isDisabled={isLoading} />
                        <FormErrorMessage fontSize="xs">{errors.message && errors.message.message}</FormErrorMessage>
                    </FormControl>
                    <Button isLoading={isLoading} loadingText="Sending message..." colorScheme="yellow" width="full" type="submit" isDisabled={isLoading}>
                        Get Started
                    </Button>
                </Stack>
            </form>

            <ModalComp modalSize="xl" openModal={isOpen} closeModal={onClose}>
                <ModalBody textAlign="center" py={10}>
                    <Center mb={4}>
                        <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1721287463/productize/ghildxuseyuznsdjhsnm.png" alt="Success" />
                    </Center>
                    <Text fontSize="2xl" fontWeight="bold" mb={2}>
                        Message Sent!
                    </Text>
                    <Text mb={5}>You will be given feedback shortly</Text>
                    <SharedButton
                        text="Close"
                        height="40px"
                        width={`20rem`}
                        bgColor="yellow.200"
                        textColor="grey.700"
                        borderRadius="4px"
                        fontSize={{ base: 'sm', md: 'md' }}
                        btnExtras={{
                            onClick: onClose,
                        }}
                    />
                </ModalBody>
            </ModalComp>
        </Box>
    );
};

export default CustomForm;
