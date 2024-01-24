// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import StarRatings from "react-star-ratings";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { Avatar, Box, Card, CardBody, Container, Divider, Flex, Grid, GridItem, Image, List, ListItem, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { Link, useLocation, useParams } from "react-router-dom";
import { SharedButton } from "./SharedButton";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { useCurrency } from "@productize-v1.0.0/modules/shared/hooks";

interface productProp {
    product: any;
}

export const PreviewProductSummary = () => {
    const { state } = useLocation();
    console.log(state);

    return (
        <Container mt={`5rem`} maxW={`70rem`}>
            {state ? (
                <TwoColumnLayout C1={<ProductSummaryAndPreview product={state?.product} />} C2={<ProductSideNav product={state?.product} />} />
            ) : (
                <h1>no product</h1>
                // eslint-disable-next-line react/jsx-no-undef
                // <DashboardEmptyState
                //   content={{
                //     title: '',
                //     desc: 'Nothing to Show at this time',
                //     img: ``,
                //   }}
                //   textAlign={{ base: `center` }}
                //   showImage={false}
                // />
            )}
        </Container>
    );
};

export interface TwoColumnLayoutProps {
    C1: React.ReactNode;
    C2: React.ReactNode;
}

export const TwoColumnLayout = ({ C1, C2 }: TwoColumnLayoutProps) => {
    const { pathname } = useLocation();

    return (
        <Grid
            // h="200px"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(12, 1fr)"
            gap={4}
        >
            {/* <GridItem colSpan={{ base: 12, xl: 8 }}>{C1}</GridItem> */}
            <GridItem colSpan={{ base: 12, xl: pathname === `/explore/product/cart` ? 12 : 8 }}>{C1}</GridItem>
            <GridItem colSpan={{ base: 12, xl: 4 }}>{C2}</GridItem>
        </Grid>
    );
};

const ProductSummaryAndPreview = ({ product }: productProp) => {
    const coverPhoto = product?.cover_photos?.map((photo: string, index: number) => {
        return (
            <SwiperSlide key={index}>
                <Box borderRadius={`8px`} overflow={`hidden`} height={`248px`}>
                    <Image w={`100%`} h={`100%`} src={photo} alt="img" objectFit={`contain`} objectPosition={`center`} />
                </Box>
            </SwiperSlide>
        );
    });

    const features = product?.highlights?.map((highlight: string, index: number) => {
        return (
            <ListItem key={index} display={`flex`} alignItems={`flex-start`} gap={2}>
                <Icon fontSize={`1.5rem`} icon={`gg:check`} />
                <Text>{highlight}</Text>
            </ListItem>
        );
    });

    return (
        <>
            <Swiper
                // spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
            >
                {coverPhoto}
            </Swiper>
            {/* =================================================== */}
            <Box borderRadius={`8px`} border={`1px solid #CFCFD0`} p={5} my={4}>
                <Text as={`h4`} fontWeight={600} color={`grey.800`}>
                    {product?.title}
                </Text>
                <Flex alignItems={{ base: `flex-start`, xl: `center` }} flexDir={{ base: `column`, xl: `row` }} gap={{ base: 5, xl: 10 }}>
                    <Flex gap={2} alignItems={`center`}>
                        <Avatar size={`sm`} name={product?.publisher} src={product?.publisher_avatar} />
                        <Text fontWeight={`500`}>{product?.publisher}</Text>
                    </Flex>
                    <Flex alignItems={`baseline`} gap={2}>
                        <StarRatings rating={3} starDimension="22px" starRatedColor="#F6C21C" numberOfStars={5} starSpacing="3px" name="rating" />
                        <Text fontWeight={`500`}>24 ratings</Text>
                    </Flex>
                </Flex>
            </Box>
            {/* =================================================== */}
            <Box borderRadius={`8px`} border={`1px solid #CFCFD0`} p={5} my={4}>
                {/* <Box>
                    <Text fontWeight={600}>What you’ll get</Text>
                    <Box my={5}>
                        <Divider />
                    </Box>
                    <Box>
                        <List color={`grey.700`} as={Stack} gap={3}>
                            {features}
                        </List>
                    </Box>
                </Box> */}
                <Box my={10}>
                    <Text fontWeight={600}>Features</Text>
                    <Box my={5}>
                        <Divider />
                    </Box>
                    <Box>
                        <List color={`grey.700`} as={Stack} gap={3}>
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

const ProductSideNav = ({ product }: productProp) => {
    const formatCurrency = useCurrency();
    return (
        <Card maxW="sm">
            <CardBody>
                <Flex bg={`purple.100`} justifyContent={`space-between`} p={2} borderRadius={`4px`}>
                    <Text fontWeight={500}>Sold</Text>
                    <Text>20</Text>
                </Flex>
                <Box my={4}>
                    <Text color={`grey.800`} fontSize={`22px`} fontWeight={600}>
                        {formatCurrency(product?.price)}
                    </Text>
                </Box>
                <Box>
                    <Flex flexDir={`column`} w={`100%`} gap={4}>
                        <SharedButton
                            text={"Add to cart"}
                            width={`100%`}
                            height={"38px"}
                            bgColor={"purple.200"}
                            textColor={"white"}
                            borderRadius={"4px"}
                            fontSize={{ base: `sm`, xl: `md` }}
                            btnExtras={{
                                disabled: true,
                            }}
                        />
                        <Link to={`/explore/product/buy`}>
                            <SharedButton
                                btnExtras={{
                                    border: "1px solid #6D5DD3",
                                    disabled: true,
                                }}
                                text={"Buy Now"}
                                width={`100%`}
                                height={"38px"}
                                bgColor={"white"}
                                textColor={"purple.200"}
                                borderRadius={"4px"}
                                fontSize={{ base: `sm`, xl: `md` }}
                            />
                        </Link>
                    </Flex>
                </Box>
                <Box my={10}>
                    <Text fontWeight={600}>The product includes</Text>
                    <Divider my={3} />
                    <Stack gap={4}>
                        <Flex color={`grey.500`} fontSize={`sm`} alignItems={`center`} justifyContent={`space-between`}>
                            <Text>Format</Text>
                            <Text>PDF</Text>
                        </Flex>
                        <Flex color={`grey.500`} fontSize={`sm`} alignItems={`center`} justifyContent={`space-between`}>
                            <Text>File size</Text>
                            <Text>3.8MB</Text>
                        </Flex>
                        <Flex color={`grey.500`} fontSize={`sm`} alignItems={`center`} justifyContent={`space-between`}>
                            <Text>Articles</Text>
                            <Text>7</Text>
                        </Flex>
                        <Flex color={`grey.500`} fontSize={`sm`} alignItems={`center`} justifyContent={`space-between`}>
                            <Text>Downloadable recourses</Text>
                            <Text>{product?.data?.length}</Text>
                        </Flex>
                    </Stack>
                </Box>
                <Flex fontWeight={600} alignItems={`center`} gap={5}>
                    <Link
                        state={{
                            product: {
                                link: `http://localhost:4200/${product?.title}`,
                                data: product,
                            },
                        }}
                        to={`/dashboard/products/new#share`}
                    >
                        Share
                    </Link>
                    <Text>Give as a gift</Text>
                </Flex>
            </CardBody>
        </Card>
    );
};
// http://localhost:4200/dashboard/products/new#preview
