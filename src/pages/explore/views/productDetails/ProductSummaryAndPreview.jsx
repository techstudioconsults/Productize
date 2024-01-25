import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import StarRatings from "react-star-ratings";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { Avatar, Box, Divider, Flex, Image, List, ListItem, Skeleton, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { selectSingleProduct_EXTERNAL } from "@productize-v1.0.0/modules/shared/redux";
import { useSelector } from "react-redux";

const ProductSummaryAndPreview = ({ status }) => {
    const product = useSelector(selectSingleProduct_EXTERNAL);

    const coverPhoto = product?.cover_photos?.map((photo, index) => {
        return (
            <SwiperSlide key={index}>
                <Box borderRadius={`8px`} overflow={`hidden`} height={`248px`}>
                    <Image src={photo} w={`100%`} h={`100%`} alt="img" objectFit={`cover`} objectPosition={`center`} />
                </Box>
            </SwiperSlide>
        );
    });

    const features = product?.highlights?.map((highlight, index) => {
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
                <Box borderRadius={`8px`} border={`1px solid #CFCFD0`} p={5} my={4}>
                    <Text as={`h4`} fontWeight={600} color={`grey.800`}>
                        {product?.title}
                    </Text>
                    <Flex alignItems={{ base: `flex-start`, xl: `center` }} flexDir={{ base: `column`, xl: `row` }} gap={{ base: 5, xl: 10 }}>
                        <Flex gap={2} alignItems={`center`}>
                            <Avatar size={`sm`} bg={`grey.300`} name={product?.publisher} src={product?.publisher_logo} />
                            <Text fontWeight={`500`}>By {product?.publisher}</Text>
                        </Flex>
                        {/* <Flex alignItems={`baseline`} gap={2}>
                            <StarRatings rating={3} starDimension="22px" starRatedColor="#F6C21C" numberOfStars={5} starSpacing="3px" name="rating" />
                            <Text fontWeight={`500`}>24 ratings</Text>
                        </Flex> */}
                    </Flex>
                </Box>
            </Skeleton>
            {/* =================================================== */}
            <Skeleton isLoaded={!status?.isLoading} borderRadius={8}>
                <Box borderRadius={`8px`} border={`1px solid #CFCFD0`} p={5} my={4}>
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
            </Skeleton>
        </>
    );
};

export default ProductSummaryAndPreview;
