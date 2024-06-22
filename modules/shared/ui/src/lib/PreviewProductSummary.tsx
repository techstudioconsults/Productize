/* eslint-disable @nx/enforce-module-boundaries */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import {
    Avatar,
    Box,
    Card,
    CardBody,
    Center,
    Container,
    Divider,
    Flex,
    Grid,
    GridItem,
    Image,
    List,
    ListItem,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom';
import { SharedButton } from './SharedButton';
import { ModalComp } from './Modal';
import React from 'react';
import { useCurrency } from '@productize/hooks';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@productize/redux';
import ReviewsCard from './review/ReviewsCard';

interface ProductProp {
    product: any;
}

export const PreviewProductSummary: React.FC = () => {
    const { state } = useLocation();

    return (
        <Container mt="5rem" maxW="70rem">
            {state ? (
                <TwoColumnLayout
                    C1={<ProductSummaryAndPreview product={state?.product} />}
                    C2={
                        <Stack pos={`sticky`} top={`20rem`} gap={4}>
                            <ProductSideNav product={state?.product} />
                            <ReviewsCard reviews={[]} />
                        </Stack>
                    }
                />
            ) : (
                <h1>No product</h1>
            )}
        </Container>
    );
};

export interface TwoColumnLayoutProps {
    staticProducts?: [];
    C1: React.ReactNode;
    C2: React.ReactNode;
}

export const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ C1, C2 }) => {
    const { pathname } = useLocation();

    return (
        <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(12, 1fr)" gap={4}>
            <GridItem colSpan={{ base: 12, md: 7, xl: pathname === `/explore/product/cart` ? 12 : 8 }}>{C1}</GridItem>
            <GridItem colSpan={{ base: 12, md: 5, xl: 4 }}>
                <Box pos="sticky" top="6rem" display={{ base: `none`, md: `block` }}>
                    {C2}
                </Box>
            </GridItem>
        </Grid>
    );
};

const ProductSummaryAndPreview: React.FC<ProductProp> = ({ product }) => {
    const user = useSelector(selectCurrentUser);
    const { onOpen, onClose, isOpen } = useDisclosure();
    const coverPhoto = product?.cover_photos?.map((photo: string, index: number) => (
        <SwiperSlide key={index}>
            <Box borderRadius="8px" overflow="hidden" height="248px">
                <Image w="100%" h="100%" src={photo} alt="img" objectFit="contain" objectPosition="center" />
            </Box>
        </SwiperSlide>
    ));

    const features = product?.highlights?.map((highlight: string, index: number) => (
        <ListItem key={index} display="flex" alignItems="flex-start" gap={2}>
            <Icon fontSize="1.5rem" icon="gg:check" />
            <Text>{highlight}</Text>
        </ListItem>
    ));

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
                {coverPhoto}
            </Swiper>
            <Box borderRadius="8px" border="1px solid #CFCFD0" p={5} my={4}>
                <Text as="h4" fontWeight={600} color="grey.800">
                    {product?.title}
                </Text>
                <Flex
                    alignItems={{ base: `flex-end`, xl: `center` }}
                    flexDir={{ base: `row`, xl: `row` }}
                    justifyContent="space-between"
                    gap={{ base: 5, xl: 10 }}
                >
                    <Flex gap={2} alignItems="center">
                        <Avatar size="sm" name={user?.logo} src={user?.logo} />
                        <Text fontWeight={500}>{user?.name}</Text>
                    </Flex>
                    <Box display={{ md: `none` }}>
                        <SharedButton
                            btnExtras={{
                                onClick: onOpen,
                            }}
                            text="Buy Product"
                            width="fit-content"
                            height="40px"
                            bgColor="purple.200"
                            textColor="grey.100"
                            borderRadius="8px"
                            fontSize={{ base: `sm`, md: `md` }}
                        />
                        <ModalComp modalSize="lg" openModal={isOpen} closeModal={onClose}>
                            <Flex justifyContent="flex-end" pb={5} fontSize="2rem" color="purple.200">
                                <Icon icon="material-symbols:cancel" onClick={onClose} />
                            </Flex>
                            <Container p={0} maxW="500px">
                                <ProductSideNav product={product} />
                            </Container>
                        </ModalComp>
                    </Box>
                </Flex>
            </Box>
            <Box borderRadius="8px" border="1px solid #CFCFD0" p={5} my={4}>
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
                        <Text dangerouslySetInnerHTML={{ __html: product?.description }} />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

const ProductSideNav: React.FC<ProductProp> = ({ product }) => {
    const formatCurrency = useCurrency();
    return (
        <Card variant="outline">
            <CardBody>
                <Flex bg="purple.100" justifyContent="space-between" p={2} borderRadius="4px">
                    <Text fontWeight={500}>Sold</Text>
                    <Text>0</Text>
                </Flex>
                <Box my={4}>
                    <Text color="grey.800" fontSize="22px" fontWeight={600}>
                        {formatCurrency(product?.price)}
                    </Text>
                </Box>
                <Box>
                    <Flex flexDir="column" w="100%" gap={4}>
                        <SharedButton
                            text="Add to cart"
                            width="100%"
                            height="38px"
                            bgColor="purple.200"
                            textColor="white"
                            borderRadius="4px"
                            fontSize={{ base: `sm`, xl: `md` }}
                            btnExtras={{
                                disabled: true,
                            }}
                        />
                        <Link to="/explore/product/buy">
                            <SharedButton
                                btnExtras={{
                                    border: '1px solid #6D5DD3',
                                    disabled: true,
                                }}
                                text="Buy Now"
                                width="100%"
                                height="38px"
                                bgColor="white"
                                textColor="purple.200"
                                borderRadius="4px"
                                fontSize={{ base: `sm`, xl: `md` }}
                            />
                        </Link>
                    </Flex>
                </Box>
                <Box my={10}>
                    <Text fontWeight={600}>The product includes</Text>
                    <Divider my={3} />
                    <Stack gap={4}>
                        <Flex color="grey.500" fontSize="sm" alignItems="center" justifyContent="space-between">
                            <Text>Format</Text>
                            <Text>PDF</Text>
                        </Flex>
                        <Flex color="grey.500" fontSize="sm" alignItems="center" justifyContent="space-between">
                            <Text>File size</Text>
                            <Text>3.8MB</Text>
                        </Flex>
                        <Flex color="grey.500" fontSize="sm" alignItems="center" justifyContent="space-between">
                            <Text>Articles</Text>
                            <Text>0</Text>
                        </Flex>
                        <Flex color="grey.500" fontSize="sm" alignItems="center" justifyContent="space-between">
                            <Text>Downloadable resources</Text>
                            <Text>{product?.data?.length}</Text>
                        </Flex>
                    </Stack>
                </Box>
            </CardBody>
        </Card>
    );
};
