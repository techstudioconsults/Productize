import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import StarRatings from 'react-star-ratings';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Avatar, Box, Card, Center, Container, Divider, Flex, Image, List, ListItem, Skeleton, Stack, Text, useDisclosure, Button } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { selectSingleProduct_EXTERNAL } from '@productize/redux';
import { useSelector } from 'react-redux';
import ProductSideNav from './ProductSideNav';
import { ModalComp, ReviewsCard, SharedButton } from '@productize/ui';

const ProductSummaryAndPreview = ({ status, ratings }) => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    const product = useSelector(selectSingleProduct_EXTERNAL);
    const [expand, setExpand] = useState(false);

    const coverPhoto = product?.cover_photos?.map((photo, index) => {
        return (
            <SwiperSlide key={index}>
                <Card variant="outline" borderRadius="8px" overflow="hidden" height="248px">
                    <Image src={photo} w="100%" h="100%" alt="img" objectFit="cover" objectPosition="center" />
                </Card>
            </SwiperSlide>
        );
    });

    const features = product?.highlights?.map((highlight, index) => {
        return (
            <ListItem key={index} display="flex" alignItems="flex-start" gap={2}>
                <Icon color="#6D5DD3" fontSize="1.5rem" icon="gg:check" />
                <Text>{highlight}</Text>
            </ListItem>
        );
    });

    const expandDetails = () => {
        setExpand(!expand);
    };

    return (
        <>
            <Swiper
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
            >
                {status.isLoading ? <Skeleton height="15rem" borderRadius={8} /> : coverPhoto}
            </Swiper>
            {/* =================================================== */}
            <Skeleton isLoaded={!status?.isLoading} borderRadius={8}>
                <Flex
                    flexDir={{ base: 'column', md: 'row' }}
                    alignItems={{ base: 'center', md: 'flex-end' }}
                    w="100%"
                    justifyContent="space-between"
                    borderRadius="8px"
                    border="1px solid #CFCFD070"
                    p={5}
                    my={4}
                    gap={5}
                >
                    <Box>
                        <Text as="h4" fontWeight={600} color="grey.800">
                            {product?.title}
                        </Text>
                        <Flex my={4} alignItems={{ base: 'flex-start', xl: 'center' }} flexDir={{ base: 'column', xl: 'row' }} gap={{ base: 5, xl: 10 }}>
                            <Flex w="100%" flexDir={{ base: 'column', md: 'row' }} gap={5} alignItems="center">
                                <Center flexDir={{ base: 'column', md: 'row' }} gap={2}>
                                    <Avatar size="sm" bg="grey.300" name={product?.publisher} src={product?.publisher_logo} />
                                    <Text fontWeight="500">By {product?.publisher}</Text>
                                </Center>
                                <StarRatings rating={ratings} starDimension="22px" starSpacing="3px" starRatedColor="orange" />
                            </Flex>
                        </Flex>
                    </Box>
                    <Box w="100%" display={{ md: 'none' }}>
                        <SharedButton
                            btnExtras={{
                                onClick: onOpen,
                            }}
                            text="Buy Product"
                            width={{ base: '100%', md: 'fit-content' }}
                            height="40px"
                            bgColor="purple.200"
                            textColor="grey.100"
                            borderRadius="8px"
                            fontSize={{ base: 'sm', md: 'md' }}
                        />
                        <ModalComp modalSize="lg" openModal={isOpen} closeModal={onClose}>
                            <Container p={0} maxW="500px">
                                <ProductSideNav status={status} />
                            </Container>
                        </ModalComp>
                    </Box>
                </Flex>
            </Skeleton>
            {/* =================================================== */}
            <Skeleton isLoaded={!status?.isLoading} borderRadius={8}>
                <Box borderRadius="8px" border="1px solid #CFCFD070" p={5} my={4}>
                    <Box my={10}>
                        <Text fontWeight={600}>Features</Text>
                        <Box my={5}>
                            <Divider />
                        </Box>
                        <Box>
                            <List color="grey.700" as={Stack} gap={3}>
                                {features}
                            </List>
                        </Box>
                    </Box>
                    <Box my={10}>
                        <Text fontWeight={600}>Description</Text>
                        <Box my={5}>
                            <Divider />
                        </Box>
                        <Box>
                            <Box height={expand ? 'fit-content' : '20rem'} overflow="hidden" transition="height 0.3s ease">
                                <Text dangerouslySetInnerHTML={{ __html: product?.description }} />
                            </Box>
                            <Box cursor="pointer" onClick={expandDetails} w="fit-content" my={4}>
                                <Button variant="link" color="purple.200" _hover={{ textDecoration: 'underline' }}>
                                    {expand ? 'See less...' : 'See more...'}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Skeleton>
            <Box display={{ base: 'block', md: 'none' }} my={5}>
                <ReviewsCard />
            </Box>
        </>
    );
};

export default ProductSummaryAndPreview;
