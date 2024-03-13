import {
    Box,
    Divider,
    Flex,
    FormControl,
    Image,
    FormLabel,
    Grid,
    GridItem,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    Textarea,
    Center,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileFormSchema } from '../../feature/formValidationSchema/form-schemas';
import { Link, useNavigate } from 'react-router-dom';
import errorImg from '@icons/error.svg';
import toastImg from '@icons/star-notice.png';
import { selectCurrentUser, useGetUserMutation } from '@productize/redux';
import { PaywallUnpublishWarning, PaywallUpgrade, SharedButton, ToastFeedback, UpgradePlanModal, useToastAction } from '@productize/ui';
import { useAxiosInstance, useSetPaymentPlan } from '@productize/hooks';

export const ProfileForm = () => {
    const user = useSelector(selectCurrentUser);
    const { toast, toastIdRef, close } = useToastAction();
    const { query, isLoading } = useAxiosInstance({ MIME_TYPE: 'multipart/form-data' });
    const [getUser] = useGetUserMutation();
    const fileInput = useRef(null);
    const imgRef = useRef(null);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        criteriaMode: 'all',
        mode: 'onChange',
        resolver: yupResolver(profileFormSchema),
    });

    const onSubmit = async (data) => {
        // console.log(data);
        // let formData = {};
        // if (data.facebook_account && data.youtube_account && data.twitter_account) {
        //     formData = {
        //         full_name: data.full_name,
        //         username: data.username,
        //         phone_number: data.phone_number,
        //         bio: data.bio,
        //         twitter_account: data.twitter_account,
        //         facebook_account: data.facebook_account,
        //         youtube_account: data.youtube_account,
        //     };
        // } else if (data.facebook_account) {
        //     formData = {
        //         full_name: data.full_name,
        //         username: data.username,
        //         phone_number: data.phone_number,
        //         bio: data.bio,
        //         facebook_account: data.facebook_account,
        //     };
        // } else if (data.youtube_account) {
        //     formData = {
        //         full_name: data.full_name,
        //         username: data.username,
        //         phone_number: data.phone_number,
        //         bio: data.bio,
        //         youtube_account: data.youtube_account,
        //     };
        // } else if (data.twitter_account) {
        //     formData = {
        //         full_name: data.full_name,
        //         username: data.username,
        //         phone_number: data.phone_number,
        //         bio: data.bio,
        //         twitter_account: data.twitter_account,
        //     };
        // }
        // if (isPremium) {
        try {
            const res = await query(`post`, `/users/me`, data);
            if (res?.status === 200) {
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            btnColor={`purple.200`}
                            message={`Profile updated successfully`}
                            title="Profile updated"
                            icon={toastImg}
                            bgColor={undefined}
                            color={undefined}
                            handleClose={close}
                        />
                    ),
                });
                await getUser(null).unwrap();
            }
        } catch (error) {
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        message={error.response.data.message}
                        title="Profile update"
                        icon={errorImg}
                        color={`red.600`}
                        btnColor={`red.600`}
                        bgColor={undefined}
                        handleClose={close}
                    />
                ),
            });
        }
        // } else {
        //     onOpen();
        // }
    };

    const previewImg = (files) => {
        if (files && imgRef.current) {
            imgRef.current.src =
                URL.createObjectURL(files?.[0]) || `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951003/productize/Star_6_alusuk_sbe2un.png`;
        }
    };

    return (
        <FormControl as={`form`} onSubmit={handleSubmit(onSubmit)}>
            {/* grid one */}
            <Grid templateColumns="repeat(12, 1fr)" gap={6}>
                <GridItem colSpan={{ base: 12, md: 5 }}>
                    <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                        Profile Information
                    </Text>
                </GridItem>
                <GridItem colSpan={{ base: 12, md: 7 }}>
                    <Box mb={4}>
                        <Flex mb={5} color={`grey.400`} alignItems={`center`} gap={1}>
                            <Icon color={`green`} fontSize={`14px`} icon={`ep:info-filled`} />
                            <Text fontStyle={`italic`} fontSize={`12px`}>
                                To Complete your profile to start getting your products published, Fill all profile field and upload an image.
                            </Text>
                        </Flex>
                        <FormControl>
                            <FormLabel color={`purple.300`} fontWeight={600}>
                                Full name
                            </FormLabel>
                            <Input
                                // required
                                defaultValue={user?.name}
                                bgColor={`grey.200`}
                                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                _placeholder={{ color: `grey.400` }}
                                placeholder="Enter Your Name"
                                variant={`filled`}
                                size={`lg`}
                                {...register('full_name')}
                            />
                            <Text className={`tiny-text`} color={`red.200`}>
                                {errors?.full_name?.message}
                            </Text>
                        </FormControl>
                    </Box>
                    <Box mb={4}>
                        <FormControl>
                            <FormLabel color={`purple.300`} fontWeight={600}>
                                Username
                            </FormLabel>
                            <Input
                                // required
                                defaultValue={user?.username}
                                bgColor={`grey.200`}
                                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                _placeholder={{ color: `grey.400` }}
                                placeholder="Enter Username"
                                variant={`filled`}
                                size={`lg`}
                                {...register('username')}
                            />
                            <Text className={`tiny-text`} color={`red.200`}>
                                {errors?.username?.message}
                            </Text>
                        </FormControl>
                    </Box>
                    <Box mb={4}>
                        <FormControl>
                            <FormLabel color={`purple.300`} fontWeight={600}>
                                Email
                            </FormLabel>
                            <Flex mb={1} justifyContent={`space-between`}>
                                <Text color={`grey.400`} className="tiny-text">
                                    This email is linked to your account
                                </Text>
                                <Link to={`/dashboard/settings#account`}>
                                    <Text color={`purple.200`} className="tiny-text">
                                        Change Account Email
                                    </Text>
                                </Link>
                            </Flex>
                            <Input
                                readOnly
                                defaultValue={user?.email}
                                type="email"
                                bgColor={`grey.200`}
                                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                _placeholder={{ color: `grey.400` }}
                                placeholder="example@gmail.com"
                                variant={`filled`}
                                size={`lg`}
                            />
                            <Text className={`tiny-text`} color={`red.200`}>
                                {errors?.email?.message}
                            </Text>
                        </FormControl>
                    </Box>
                    <Box mb={4}>
                        <FormControl>
                            <FormLabel color={`purple.300`} fontWeight={600}>
                                Contact number
                            </FormLabel>
                            <InputGroup size={`lg`}>
                                <InputLeftElement color={`green`} pointerEvents="none">
                                    <Icon hidden={errors?.phone_number?.message} icon={`material-symbols:check`} />
                                </InputLeftElement>
                                <Input
                                    // required
                                    defaultValue={user?.phone_number}
                                    bgColor={`grey.200`}
                                    _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                    _placeholder={{ color: `grey.400` }}
                                    variant={`filled`}
                                    type="tel"
                                    placeholder="Enter number"
                                    {...register('phone_number')}
                                />
                            </InputGroup>
                            <Text className={`tiny-text`} color={`red.200`}>
                                {errors?.phone_number?.message}
                            </Text>
                        </FormControl>
                    </Box>
                    <Box mb={4}>
                        <FormControl>
                            <FormLabel color={`purple.300`} fontWeight={600}>
                                Bio
                            </FormLabel>
                            <Textarea
                                // required
                                defaultValue={user?.bio}
                                bgColor={`grey.200`}
                                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                                _placeholder={{ color: `grey.400` }}
                                variant={`filled`}
                                placeholder="Follow me to unlock your potential with my products."
                                {...register('bio')}
                            />
                            <Text className={`tiny-text`} color={`red.200`}>
                                {errors?.bio?.message}
                            </Text>
                        </FormControl>
                    </Box>
                    <Divider mb={8} />
                </GridItem>
            </Grid>
            {/* grid two */}
            <Grid templateColumns="repeat(12, 1fr)" gap={6}>
                <GridItem colSpan={{ base: 12, md: 5 }}>
                    <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                        Upload Logo
                    </Text>
                </GridItem>
                <GridItem colSpan={{ base: 12, md: 7 }}>
                    <Box mb={4}>
                        <FormControl>
                            <FormLabel color={`purple.300`} fontWeight={600}>
                                Logo
                            </FormLabel>
                            <Box>
                                <Center
                                    overflow={`hidden`}
                                    borderRadius={`4px`}
                                    bgColor={`yellow.100`}
                                    boxSize={`120px`}
                                    onClick={() => fileInput.current?.click()}
                                >
                                    <Image
                                        ref={imgRef}
                                        objectFit={`contain`}
                                        src={
                                            user?.logo ||
                                            `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951003/productize/Star_6_alusuk_sbe2un.png`
                                        }
                                        alt={`img`}
                                    />
                                    <Controller
                                        name="logo"
                                        control={control}
                                        defaultValue={null}
                                        render={({ field }) => (
                                            <Input
                                                hidden
                                                ref={fileInput}
                                                onChange={(e) => {
                                                    field.onChange(e.target.files?.[0]);
                                                    previewImg(e.target.files);
                                                }}
                                                type="file"
                                            />
                                        )}
                                    />
                                    {/* <Input {...register('logo')} type="file" size={`lg`} /> */}
                                </Center>
                            </Box>
                            <Text fontSize={{ base: `xs`, lg: `sm` }} className="small-text" color={`grey.400`}>
                                Your logo will be visible next to your name in your Productize profile and product pages. Your image should be at least
                                200x200px and must be in JPG or PNG format.
                            </Text>
                            <Text className={`tiny-text`} color={`red.200`}>
                                {errors?.logo?.message}
                            </Text>
                        </FormControl>
                    </Box>
                    <Divider mb={8} />
                </GridItem>
            </Grid>
            {/* grid three */}
            <Grid templateColumns="repeat(12, 1fr)" gap={6}>
                <GridItem colSpan={{ base: 12, md: 5 }}>
                    <Text textAlign={{ base: `center`, md: `initial` }} color={`purple.300`} as={`h5`}>
                        Social Links
                    </Text>
                </GridItem>
                <GridItem colSpan={{ base: 12, md: 7, xl: 5 }}>
                    <Box mb={4}>
                        <FormControl>
                            <FormLabel color={`purple.300`} fontWeight={600}>
                                X
                            </FormLabel>
                            <InputGroup size="lg">
                                <Input
                                    // required
                                    defaultValue={user?.twitter_account}
                                    pr="4.5rem"
                                    bgColor={`grey.200`}
                                    _focus={{ bgColor: `grey.200`, color: `grey.800` }}
                                    _placeholder={{ color: `grey.400` }}
                                    placeholder="Enter username"
                                    variant={`filled`}
                                    {...register('twitter_account')}
                                />
                            </InputGroup>
                            <Text className={`tiny-text`} color={`red.200`}>
                                {errors?.twitter_account?.message}
                            </Text>
                        </FormControl>
                    </Box>
                    <Box mb={4}>
                        <FormControl>
                            <FormLabel color={`purple.300`} fontWeight={600}>
                                Facebook
                            </FormLabel>
                            <InputGroup size="lg">
                                <Input
                                    // required
                                    defaultValue={user?.facebook_account}
                                    pr="4.5rem"
                                    bgColor={`grey.200`}
                                    _focus={{ bgColor: `grey.200`, color: `grey.800` }}
                                    _placeholder={{ color: `grey.400` }}
                                    placeholder="Enter username"
                                    variant={`filled`}
                                    {...register('facebook_account')}
                                />
                            </InputGroup>
                            <Text className={`tiny-text`} color={`red.200`}>
                                {errors?.facebook_account?.message}
                            </Text>
                        </FormControl>
                    </Box>
                    <Box mb={4}>
                        <FormControl>
                            <FormLabel color={`purple.300`} fontWeight={600}>
                                Youtube
                            </FormLabel>
                            <InputGroup size="lg">
                                <Input
                                    // required
                                    defaultValue={user?.youtube_account}
                                    pr="4.5rem"
                                    bgColor={`grey.200`}
                                    _focus={{ bgColor: `grey.200`, color: `grey.800` }}
                                    _placeholder={{ color: `grey.400` }}
                                    placeholder="Enter username"
                                    variant={`filled`}
                                    {...register('youtube_account')}
                                />
                            </InputGroup>
                            <Text className={`tiny-text`} color={`red.200`}>
                                {errors?.youtube_account?.message}
                            </Text>
                        </FormControl>
                    </Box>
                    <Flex gap={4} mt={12}>
                        <SharedButton
                            btnExtras={{
                                border: '1px solid #6D5DD3',
                                onClick: () => navigate(-1),
                            }}
                            text={'Cancel'}
                            width={'fit-content'}
                            height={'40px'}
                            bgColor={'transparent'}
                            textColor={'purple.200'}
                            borderRadius={'4px'}
                            fontSize={{ base: `sm`, md: `md` }}
                        />
                        <SharedButton
                            btnExtras={{
                                isLoading: isLoading,
                                loadingText: `Saving Profile...`,
                                type: `submit`,
                            }}
                            text={'Save Changes'}
                            width={'fit-content'}
                            height={'40px'}
                            bgColor={'purple.200'}
                            textColor={'grey.100'}
                            borderRadius={'4px'}
                            fontSize={{ base: `sm`, md: `md` }}
                        />
                    </Flex>
                </GridItem>
            </Grid>
        </FormControl>
    );
};
