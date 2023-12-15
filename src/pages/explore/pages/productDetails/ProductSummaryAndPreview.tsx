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
import { Avatar, Box, Divider, Flex, Image, List, ListItem, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { selectSingleProduct_EXTERNAL } from "@productize-v1.0.0/modules/shared/redux";
import { useSelector } from "react-redux";

const ProductSummaryAndPreview = () => {
    const product = useSelector(selectSingleProduct_EXTERNAL);

    const coverPhoto = product?.cover_photos?.map((photo: string, index: number) => {
        return (
            <SwiperSlide key={index}>
                <Box borderRadius={`8px`} overflow={`hidden`} height={`248px`}>
                    <Image src={photo} alt="img" objectFit={`cover`} objectPosition={`center`} />
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
                {/* <SwiperSlide>
                    <Box borderRadius={`8px`} overflow={`hidden`} height={`248px`}>
                        <Image src={product?.thumbnail} alt="img" />
                    </Box>
                </SwiperSlide> */}
            </Swiper>
            {/* =================================================== */}
            <Box borderRadius={`8px`} border={`1px solid #CFCFD0`} p={5} my={4}>
                <Text as={`h4`} fontWeight={600} color={`grey.800`}>
                    {product?.title}
                </Text>
                <Flex alignItems={{ base: `flex-start`, xl: `center` }} flexDir={{ base: `column`, xl: `row` }} gap={{ base: 5, xl: 10 }}>
                    <Flex gap={2} alignItems={`center`}>
                        <Avatar size={`sm`} name={product?.publisher} src="https://bit.ly/code-beast" />
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
                <Box>
                    <Text fontWeight={600}>What you’ll get</Text>
                    <Box my={5}>
                        <Divider />
                    </Box>
                    <Box>
                        {/* <List color={`grey.700`} as={Stack} gap={3}>
                            <ListItem display={`flex`} alignItems={`flex-start`} gap={2}>
                                <Icon fontSize={`1.5rem`} icon={`gg:check`} />
                                <Text>5,400+ Icons (1,350+ icons × 4 styles).</Text>
                            </ListItem>
                            <ListItem display={`flex`} alignItems={`flex-start`} gap={2}>
                                <Icon fontSize={`1.5rem`} icon={`gg:check`} />
                                <Text>7 formats (Figma, Adobe XD, IconJar, AI, EPS, SVG, PNG).</Text>
                            </ListItem>
                            <ListItem display={`flex`} alignItems={`flex-start`} gap={2}>
                                <Icon fontSize={`1.5rem`} icon={`gg:check`} />
                                <Text>54 Styles (Light, Regular, Filled, Duotone).</Text>
                            </ListItem>
                            <ListItem display={`flex`} alignItems={`flex-start`} gap={2}>
                                <Icon fontSize={`1.5rem`} icon={`gg:check`} />
                                <Text>29 Popular categories.</Text>
                            </ListItem>
                        </List> */}
                    </Box>
                </Box>
                <Box my={10}>
                    <Text fontWeight={600}>Features</Text>
                    <Box my={5}>
                        <Divider />
                    </Box>
                    <Box>
                        <List color={`grey.700`} as={Stack} gap={3}>
                            {features}
                            {/* <ListItem display={`flex`} alignItems={`flex-start`} gap={2}>
                                <Icon fontSize={`1.5rem`} icon={`gg:check`} />
                                <Text>24 x 24px Pixel grid.</Text>
                            </ListItem>
                            <ListItem display={`flex`} alignItems={`flex-start`} gap={2}>
                                <Icon fontSize={`1.5rem`} icon={`gg:check`} />
                                <Text>Very organized library.</Text>
                            </ListItem>
                            <ListItem display={`flex`} alignItems={`flex-start`} gap={2}>
                                <Icon fontSize={`1.5rem`} icon={`gg:check`} />
                                <Text>Clean & smooth icons.</Text>
                            </ListItem>
                            <ListItem display={`flex`} alignItems={`flex-start`} gap={2}>
                                <Icon fontSize={`1.5rem`} icon={`gg:check`} />
                                <Text>Lifetime free updates.</Text>
                            </ListItem> */}
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

export default ProductSummaryAndPreview;
