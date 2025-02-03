// import React from 'react';
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     Button,
//     FormControl,
//     FormLabel,
//     Input,
//     Text,
//     Flex,
//     useDisclosure,
// } from '@chakra-ui/react';

// export const AddAdminModal = ({ isOpen, onClose, }) => {
//     // const { isOpen, onOpen, onClose } = useDisclosure();

//     const initialRef = React.useRef(null);
//     const finalRef = React.useRef(null);

//     return (
//         <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="lg">
//                 <ModalOverlay />
//                 <ModalContent>
//                     <ModalHeader>Create your account</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody pb={6}>
//                         <Flex gap={`5`} flexDirection={`column`}>
//                             <FormControl>
//                                 <FormLabel color={`purple.300`} fontWeight={600}>
//                                     Name
//                                 </FormLabel>
//                                 <Input
//                                     // required
//                                     // defaultValue={}
//                                     bgColor={`grey.200`}
//                                     _focus={{ bgColor: `grey.300`, color: `grey.800` }}
//                                     _placeholder={{ color: `grey.400` }}
//                                     placeholder="Enter Your Name"
//                                     variant={`filled`}
//                                     size={`lg`}
//                                     // {...register('full_name')}
//                                 />
//                                 <Text className={`tiny-text`} color={`red.200`}>
//                                     {/* {errors?.full_name?.message} */}
//                                 </Text>
//                             </FormControl>
//                             <FormControl>
//                                 <FormLabel color={`purple.300`} fontWeight={600}>
//                                     Email Address
//                                 </FormLabel>
//                                 <Input
//                                     // required
//                                     // defaultValue={}
//                                     bgColor={`grey.200`}
//                                     _focus={{ bgColor: `grey.300`, color: `grey.800` }}
//                                     _placeholder={{ color: `grey.400` }}
//                                     placeholder="Enter Your Name"
//                                     variant={`filled`}
//                                     size={`lg`}
//                                     // {...register('full_name')}
//                                 />
//                                 <Text className={`tiny-text`} color={`red.200`}>
//                                     {/* {errors?.full_name?.message} */}
//                                 </Text>
//                             </FormControl>
//                             <FormControl>
//                                 <FormLabel color={`purple.300`} fontWeight={600}>
//                                     Password
//                                 </FormLabel>
//                                 <Input
//                                     // required
//                                     // defaultValue={}
//                                     bgColor={`grey.200`}
//                                     _focus={{ bgColor: `grey.300`, color: `grey.800` }}
//                                     _placeholder={{ color: `grey.400` }}
//                                     placeholder="Enter Your Name"
//                                     variant={`filled`}
//                                     size={`lg`}
//                                     // {...register('full_name')}
//                                 />
//                                 <Text className={`tiny-text`} color={`red.200`}>
//                                     {/* {errors?.full_name?.message} */}
//                                 </Text>
//                             </FormControl>
//                             <FormControl>
//                                 <FormLabel color={`purple.300`} fontWeight={600}>
//                                     Confirm Password
//                                 </FormLabel>
//                                 <Input
//                                     // required
//                                     // defaultValue={}
//                                     bgColor={`grey.200`}
//                                     _focus={{ bgColor: `grey.300`, color: `grey.800` }}
//                                     _placeholder={{ color: `grey.400` }}
//                                     placeholder="Enter Your Name"
//                                     variant={`filled`}
//                                     size={`lg`}
//                                     // {...register('full_name')}
//                                 />
//                                 <Text className={`tiny-text`} color={`red.200`}>
//                                     {/* {errors?.full_name?.message} */}
//                                 </Text>
//                             </FormControl>
//                         </Flex>
//                     </ModalBody>

//                     <ModalFooter justifyContent={`center`}>
//                         <Button colorScheme="blue" mr={3}>
//                             Save
//                         </Button>
//                         <Button onClick={onClose}>Cancel</Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>
//     );
// };

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Icon } from '@iconify/react';
import { yupResolver } from '@hookform/resolvers/yup';
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
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import errorImg from '@icons/error.svg';
import toastImg from '@icons/star-notice.png';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { registrationSchema } from '@productize/auth';

import {  selectCurrentToken, useUpdateAdminMutation } from '@productize/redux';
import { useSelector } from 'react-redux';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SharedButton, ToastFeedback, useToastAction  } from '@productize/ui';

export const EditAdminModal = ({ isOpen, onClose, user }) => {
    const token = useSelector(selectCurrentToken);
    console.log(user);
    const { toast, toastIdRef, close } = useToastAction()
    

    const { register, reset, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(registrationSchema),
        mode: 'onChange',
    });

    const [updateAdmin, { isLoading, isError, error }] = useUpdateAdminMutation();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmpassword, setShowConfirmpassword] = useState(false)

    const togglePasswordType = ()=>{
        setShowPassword(!showPassword)
    }
    const toggleConfirmPasswordType = ()=>{
        setShowConfirmpassword(!showConfirmpassword)
    }

    // const handleFormSubmit = async (data) => {
    //     try {
    //         await updateAdmin({
    //             credentials: {
    //                 full_name: data.full_name,
    //                 email: data.email,
    //                 password: data.password,
    //                 password_confirmation: data.password_confirmation,
    //                 role: "ADMIN"
    //             },
    //             token,
    //         });
    //         onClose();
    //     } catch (err) {
    //         console.error('Failed to create admin:', err);
    //     }
    // };
    const handleFormSubmit = async (data) => {
        try {
           const res = await updateAdmin({
                credentials: {
                    full_name: data.full_name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                    role: "ADMIN"
                },
                userID: user.id,  // Add this line
                token,
            });
            console.log(res);

            // i would delete later when i get the right response f
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        btnColor={`purple.200`}
                        message={`Admin Updated successfully`}
                        title="Admin Update"
                        icon={toastImg}
                        bgColor={undefined}
                        color={undefined}
                        handleClose={close}
                    />
                ),
            })
            // if (res?.status === 200) {
            //     toastIdRef.current = toast({
            //         position: 'top',
            //         render: () => (
            //             <ToastFeedback
            //                 btnColor={`purple.200`}
            //                 message={`Admin Added successfully`}
            //                 title="Admin Created"
            //                 icon={toastImg}
            //                 bgColor={undefined}
            //                 color={undefined}
            //                 handleClose={close}
            //             />
            //         ),
            //     })}
            
            onClose();
            reset();
        } catch (err) {
            console.error('Failed to update admin:', err);
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        btnColor={`purple.200`}
                        message={`${err}`}
                        title="Admin Update"
                        icon={errorImg}
                        bgColor={undefined}
                        color={undefined}
                        handleClose={close}
                    />
                ),
            })
        }
    };

    const handleCancel = () => {
        reset();
        onClose();
    };

    return (
        <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="lg">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Admin</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <ModalBody pb={6}>
                        <Flex gap={`5`} flexDirection={`column`}>
                            <FormControl isInvalid={errors.full_name}>
                                <FormLabel color={`purple.300`} fontWeight={600}>
                                    Name
                                </FormLabel>
                                <Input
                                    {...register('full_name')}
                                    bgColor={`grey.200`}
                                    defaultValue={user?.name || " "}
                                    _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                    _placeholder={{ color: `grey.400` }}
                                    placeholder="Enter Your Full Name"
                                    variant={`filled`}
                                    size={`lg`}
                                />
                                <Text className={`tiny-text`} color={`red.200`}>
                                    {errors.full_name?.message}
                                </Text>
                            </FormControl>
                            <FormControl isInvalid={errors.email}>
                                <FormLabel color={`purple.300`} fontWeight={600}>
                                    Email
                                </FormLabel>
                                <Input
                                    {...register('email')}
                                    defaultValue={user?.email || " "}
                                    bgColor={`grey.200`}
                                    _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                    _placeholder={{ color: `grey.400` }}
                                    placeholder="Email Address"
                                    variant={`filled`}
                                    size={`lg`}
                                />
                                <Text className={`tiny-text`} color={`red.200`}>
                                    {errors.email?.message}
                                </Text>
                            </FormControl>
                            <FormControl isInvalid={errors.password}>
                                <FormLabel color={`purple.300`} fontWeight={600}>
                                    Password
                                </FormLabel>
                                <InputGroup>
                                <Input
                                    {...register('password')}
                                    type={showPassword ? 'text' : 'password'}
                                    bgColor={`grey.200`}
                                    _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                    _placeholder={{ color: `grey.400` }}
                                    placeholder="Enter Password"
                                    variant={`filled`}
                                    size={`lg`}
                                />
                                <InputRightElement onClick={togglePasswordType}>
                                {!showPassword ? <Icon icon="ant-design:eye-twotone" /> : <Icon icon="ant-design:eye-invisible-twotone" />}
                                </InputRightElement>
                                </InputGroup>
                                <Text className={`tiny-text`} color={`red.200`}>
                                    {errors.password?.message}
                                </Text>
                            </FormControl>
                            <FormControl isInvalid={errors.password_confirmation}>
                                <FormLabel color={`purple.300`} fontWeight={600}>
                                    Confirm Password
                                </FormLabel>
                                <InputGroup>
                                <Input
                                    {...register('password_confirmation')}
                                    type={showConfirmpassword ? 'text': 'password'}
                                    bgColor={`grey.200`}
                                    _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                    _placeholder={{ color: `grey.400` }}
                                    placeholder="Re-enter Password"
                                    variant={`filled`}
                                    size={`lg`}
                                />
                                 <InputRightElement onClick={toggleConfirmPasswordType}>
                                {!showConfirmpassword ? <Icon icon="ant-design:eye-twotone" /> : <Icon icon="ant-design:eye-invisible-twotone" />}
                                </InputRightElement>
                                </InputGroup>
                                <Text className={`tiny-text`} color={`red.200`}>
                                    {errors.password_confirmation?.message}
                                </Text>
                            </FormControl>
                           
                        </Flex>
                    </ModalBody>

                    <ModalFooter justifyContent={`center`} gap={`0.5rem`}>
                        <Button  bgColor={'purple.200'} color={`white`}  type="submit" isLoading={isLoading} isDisabled={!isValid}>
                            Save Changes
                        </Button>
                       
                        <SharedButton
                            btnExtras={{
                                border: `1px solid #6D5DD3`,
                                onClick: handleCancel,
                            }}
                            text={'Cancel'}
                            width={'86px'}
                            height={'40px'}
                            bgColor={`transparent`}
                            textColor={`purple.200`}
                            borderRadius={'4px'}
                            fontSize={{ base: `sm`, md: `md` }}
                        />
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
};