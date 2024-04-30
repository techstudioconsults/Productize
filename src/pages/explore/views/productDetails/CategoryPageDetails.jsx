import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Container,
    Flex,
    Grid,
    GridItem,
    Stack,
    Tag,
    Text,
} from '@chakra-ui/react';
import ProductNavbar from './ProductNavbar';
import { useLocation, useParams } from 'react-router-dom';
import { Divider } from 'rsuite';
import { Icon } from '@iconify/react';
import { ExploreTrending, staticProducts } from '../../components/ExploreTrending';
import { TwoColumnLayout } from '@productize/ui';
import Card from '../../components/cards/Card';

export const CategoryPageDetails = () => {
    const location = useLocation();
    const { mainCategory } = useParams();
    const queryParams = new URLSearchParams(location.search);
    const tagLabel = queryParams.get('tag');

    const renderStaticCards = staticProducts?.map((product) => (
        <GridItem colSpan={{ base: 12, md: 4 }}>
            <Card
                key={product?.slug}
                staticProduct={product}
                productID={product?.slug}
                image={product?.thumbnail}
                heading={product?.title}
                price={product?.price}
                publisher={product?.publisher}
            />
        </GridItem>
    ));

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <>
            <ProductNavbar isAuth={false} />
            <Divider m={0} />
            <Container px={{ base: 4, sm: 8, xl: 0 }} maxW={`70rem`}>
                <Flex gap={10} alignItems={`center`} flexDir={{ base: `column`, md: `row` }}>
                    <Breadcrumb fontWeight={`semibold`}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">{capitalizeFirstLetter(tagLabel)}</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink mr={2} href="#">
                                {capitalizeFirstLetter(mainCategory)}
                            </BreadcrumbLink>
                            <Icon fontSize={`1.2rem`} icon="mdi:chevron-right" />
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Stack
                        flexDir={`row`}
                        w={`52rem`}
                        className={`hide_scrollbar`}
                        overflowX={`auto`}
                        gap={4}
                        maxW={`100%`}
                        overflowY={`hidden`}
                        whiteSpace={`nowrap`} // Prevents text wrapping
                    >
                        <Text py={2} px={3} border={`1px solid lightgrey`} borderRadius={4} display="inline-block">
                            Learning (2395)
                        </Text>
                        <Text py={2} px={3} border={`1px solid lightgrey`} borderRadius={4} display="inline-block">
                            Learning (2395)
                        </Text>
                        <Text py={2} px={3} border={`1px solid lightgrey`} borderRadius={4} display="inline-block">
                            Learning (2395)
                        </Text>
                        <Text py={2} px={3} border={`1px solid lightgrey`} borderRadius={4} display="inline-block">
                            Learning (2395)
                        </Text>
                        <Text py={2} px={3} border={`1px solid lightgrey`} borderRadius={4} display="inline-block">
                            Learning (2395)
                        </Text>
                        <Text py={2} px={3} border={`1px solid lightgrey`} borderRadius={4} display="inline-block">
                            Learning (2395)
                        </Text>
                        <Text py={2} px={3} border={`1px solid lightgrey`} borderRadius={4} display="inline-block">
                            Learning (2395)
                        </Text>
                    </Stack>
                </Flex>
            </Container>
            <Divider m={0} />
            <Container px={{ base: 4, sm: 8, xl: 0 }} maxW={`70rem`}>
                <Box>
                    <Text as={`h4`}>{capitalizeFirstLetter(mainCategory)}</Text>
                </Box>
            </Container>
            <Container my={{ base: `3rem`, lg: `5rem` }} px={{ base: 4, sm: 8, xl: 0 }} maxW={`70rem`}>
                <ExploreTrending title={`Best Sellers`} />
            </Container>
            <Container px={{ base: 4, sm: 8, xl: 0 }} maxW={`70rem`}>
                {/* <TwoColumnLayout C1={`layout one`} C2={`layout 2`} /> */}
                <Grid
                    // h="200px"
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(12, 1fr)"
                    gap={4}
                >
                    {/* <GridItem colSpan={{ base: 12, xl: 8 }}>{C1}</GridItem> */}
                    <GridItem colSpan={{ base: 12, md: 5, xl: 4 }}>
                        <Flex mb={5} fontWeight={`semibold`} alignItems={`flex-end`} justifyContent={`space-between`}>
                            <Text fontSize={`xl`}>Filter</Text>
                            <Text fontSize={`sm`}>Clear</Text>
                        </Flex>
                        <Accordion allowToggle>
                            <AccordionItem py={2}>
                                <AccordionButton p={0}>
                                    <Box as="span" flex="1" textAlign="left">
                                        Showing
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem py={2}>
                                <AccordionButton p={0}>
                                    <Box as="span" flex="1" textAlign="left">
                                        Sort By
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem py={2}>
                                <AccordionButton p={0}>
                                    <Box as="span" flex="1" textAlign="left">
                                        Rating
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem py={2}>
                                <AccordionButton p={0}>
                                    <Box as="span" flex="1" textAlign="left">
                                        Price
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 7, xl: 8 }}>
                        <Flex fontWeight={`semibold`} alignItems={`center`} justifyContent={`space-between`} mb={10}>
                            <Text as={`h5`}>All {capitalizeFirstLetter(mainCategory)} Products</Text>
                            <Text>{staticProducts?.length} results</Text>
                        </Flex>
                        <Grid gap={4} templateColumns="repeat(12, 1fr)">
                            {renderStaticCards}
                        </Grid>
                    </GridItem>
                </Grid>
            </Container>
        </>
    );
};
