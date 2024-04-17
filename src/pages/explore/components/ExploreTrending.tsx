/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';

// import { useSelector } from 'react-redux';
import Card from './cards/Card';
// import { selectTags } from '@productize/redux';
// import { useLocation } from 'react-router-dom';
import { SelectPicker } from 'rsuite';

export interface slideProps {
    title: string;
}

const staticProducts = [
    {
        title: 'The Shadow of the Wind',
        thumbnail: 'https://res.cloudinary.com/kingsleysolomon/image/upload/v1713336260/productize/SOTW_lhhrav.jpg',
        price: 14.99,
        publisher: 'Penguin Random House',
        slug: 'the-shadow-of-the-wind',
        highlights: [
            'Captivating mystery set in post-war Barcelona',
            'Intriguing discovery of a mysterious book',
            'Ensnared in a web of secrets and forbidden love',
        ],
        product_type: 'digital_product',
        cover_photos: ['https://res.cloudinary.com/kingsleysolomon/image/upload/v1713336260/productize/SOTW_lhhrav.jpg'],
        tags: ['Mystery', 'Historical Fiction'],
        description:
            '<h3>Overview</h3><p>The Shadow of the Wind is a captivating mystery novel set in post-war Barcelona. It follows the story of Daniel Sempere, a young boy who discovers a mysterious book by an obscure author named Julian Carax.</p>',
    },
    {
        title: 'The Night Circus',
        thumbnail: 'https://res.cloudinary.com/kingsleysolomon/image/upload/v1713336259/productize/TNC_qlosqs.jpg',
        price: 12.49,
        publisher: 'Anchor',
        slug: 'the-night-circus',
        highlights: ['Enchanting tale set in a magical circus', 'Mysterious competition between illusionists', 'Exploration of love, destiny, and imagination'],
        product_type: 'digital_product',
        cover_photos: ['https://res.cloudinary.com/kingsleysolomon/image/upload/v1713336259/productize/TNC_qlosqs.jpg'],
        tags: ['Fantasy', 'Romance'],
        description:
            '<h3>Overview</h3><p>Step into the enchanting world of The Night Circus, where a mysterious competition takes place between two young illusionists, Celia and Marco. Set against the backdrop of a magical circus that appears without warning, this spellbinding novel explores themes of love, destiny, and the power of imagination.</p>',
    },
    {
        title: 'The Name of the Wind',
        thumbnail: 'https://res.cloudinary.com/kingsleysolomon/image/upload/v1713336260/productize/TNOTW_uqiwil.jpg',
        price: 17.99,
        publisher: 'DAW Books',
        slug: 'the-name-of-the-wind',
        highlights: ['Epic fantasy journey of a gifted musician', 'Richly detailed world-building', 'Compelling tale of adventure and mystery'],
        product_type: 'digital_product',
        cover_photos: ['https://res.cloudinary.com/kingsleysolomon/image/upload/v1713336260/productize/TNOTW_uqiwil.jpg'],
        tags: ['Fantasy', 'Adventure'],
        description:
            "<h3>Overview</h3><p>The Name of the Wind is the first installment in Patrick Rothfuss's epic fantasy series, The Kingkiller Chronicle. It follows the journey of Kvothe, a gifted young musician and magician, as he recounts his life story to a scribe known as Chronicler.</p>",
    },
    {
        title: 'The Martian',
        thumbnail: 'https://res.cloudinary.com/kingsleysolomon/image/upload/v1713336260/productize/TM_icggk6.jpg',
        price: 10.99,
        publisher: 'Crown Publishing Group',
        slug: 'the-martian',
        highlights: [
            'Gripping survival story on the planet Mars',
            'Ingenious tale of resourcefulness and resilience',
            'Thrilling blend of humor, suspense, and science',
        ],
        product_type: 'digital_product',
        cover_photos: ['https://res.cloudinary.com/kingsleysolomon/image/upload/v1713336260/productize/TM_icggk6.jpg'],
        tags: ['Science Fiction', 'Adventure'],
        description:
            "<h3>Overview</h3><p>Follow astronaut Mark Watney as he fights for survival on the hostile planet of Mars in Andy Weir's gripping science fiction novel, The Martian. Stranded alone after a dust storm forces his crew to evacuate, Watney must rely on his ingenuity and resourcefulness to endure.</p>",
    },
];

export const ExploreTrending = ({ title }: slideProps) => {
    // const tags = useSelector(selectTags);
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const tag = queryParams.get('tag');

    // const tagData = [`All`, ...tags]?.map((item: string) => ({
    //     label: item,
    //     value: item,
    // }));

    // Render product cards
    const renderStaticCards = staticProducts?.map((product: any) => (
        <Card
            key={product?.slug}
            // staticProduct={product}
            productID={product?.slug}
            image={product?.thumbnail}
            heading={product?.title}
            price={product?.price}
            publisher={product?.publisher}
        />
    ));

    return (
        <Flex>
            <Container p={0} maxW={`70rem`}>
                <Flex mb={5} justifyContent={`space-between`} alignItems={`center`}>
                    <Text as={`h4`}>{title}</Text>
                    {/* <Box display={{ lg: `none` }}>
                        <SelectPicker searchable={false} style={{ width: `100%` }} placeholder={`Tags`} size="sm" data={tagData} />
                    </Box> */}
                </Flex>

                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} justifyContent={`space-between`} gap={`1.64rem`}>
                    {renderStaticCards}
                </SimpleGrid>
            </Container>
        </Flex>
    );
};
