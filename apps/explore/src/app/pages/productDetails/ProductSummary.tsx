import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import StarRatings from 'react-star-ratings';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import {
  Avatar,
  Box,
  Flex,
  Image,
  List,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';

const ProductSummary = () => {
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
        <SwiperSlide>
          <Box borderRadius={`8px`} overflow={`hidden`} height={`248px`}>
            <Image
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1693877355/productize/shot6_kgl5kg.png`}
              alt="img"
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box borderRadius={`8px`} overflow={`hidden`} height={`248px`}>
            <Image
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1693877355/productize/shot6_kgl5kg.png`}
              alt="img"
            />
          </Box>
        </SwiperSlide>
      </Swiper>
      {/* =================================================== */}
      <Box borderRadius={`8px`} border={`1px solid #CFCFD0`} p={5} my={4}>
        <Text fontSize={`30px`} fontWeight={600} color={`grey.800`}>
          UI Design Systems Mastery
        </Text>
        <Flex alignItems={`center`} gap={10}>
          <Flex gap={2} alignItems={`center`}>
            <Avatar
              size={`sm`}
              name="Christian Nwamba"
              src="https://bit.ly/code-beast"
            />
            <Text fontWeight={`500`}>Temilade Openiyi</Text>
          </Flex>
          <Flex alignItems={`baseline`} gap={2}>
            <StarRatings
              rating={3}
              starDimension="22px"
              starRatedColor="#F6C21C"
              numberOfStars={5}
              starSpacing="3px"
              name="rating"
            />
            <Text fontWeight={`500`}>24 ratings</Text>
          </Flex>
        </Flex>
      </Box>
      {/* =================================================== */}
      <Box borderRadius={`8px`} border={`1px solid #CFCFD0`} p={5} my={4}>
        <Box>
          <Text fontWeight={600}>What you’ll get</Text>
          <Box my={5}>
            <hr />
          </Box>
          <Box>
            <List color={`grey.700`} as={Stack} gap={3}>
              <ListItem display={`flex`} alignItems={`flex-start`} gap={2}>
                <Icon fontSize={`1.5rem`} icon={`gg:check`} />
                <Text>5,400+ Icons (1,350+ icons × 4 styles).</Text>
              </ListItem>
              <ListItem display={`flex`} alignItems={`flex-start`} gap={2}>
                <Icon fontSize={`1.5rem`} icon={`gg:check`} />
                <Text>
                  7 formats (Figma, Adobe XD, IconJar, AI, EPS, SVG, PNG).
                </Text>
              </ListItem>
              <ListItem display={`flex`} alignItems={`flex-start`} gap={2}>
                <Icon fontSize={`1.5rem`} icon={`gg:check`} />
                <Text>54 Styles (Light, Regular, Filled, Duotone).</Text>
              </ListItem>
              <ListItem display={`flex`} alignItems={`flex-start`} gap={2}>
                <Icon fontSize={`1.5rem`} icon={`gg:check`} />
                <Text>29 Popular categories.</Text>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box my={10}>
          <Text fontWeight={600}>Features</Text>
          <Box my={5}>
            <hr />
          </Box>
          <Box>
            <List color={`grey.700`} as={Stack} gap={3}>
              <ListItem display={`flex`} alignItems={`flex-start`} gap={2}>
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
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box my={10}>
          <Text fontWeight={600}>Description</Text>
          <Box my={5}>
            <hr />
          </Box>
          <Box>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              iusto, repellat esse harum ea iure. Repudiandae laboriosam
              adipisci ullam placeat reiciendis laborum? Quae ducimus corporis
              provident soluta accusamus libero nulla accusantium expedita saepe
              qui, autem, ut perferendis. Reiciendis minima, fugiat in totam et,
              explicabo temporibus error molestiae nam aliquid ipsum non iste
              harum nemo ipsa cupiditate dignissimos nobis? Voluptate tempora
              iure nesciunt beatae voluptatem iste similique, molestias
              mollitia, cupiditate officia dolores. Earum corporis, ut doloribus
              voluptate expedita, velit obcaecati eligendi tempore unde, quae
              ipsum! Praesentium culpa id sit corporis ullam nam, officia
              distinctio. Hic fugit odio atque vitae quis facilis.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductSummary;
