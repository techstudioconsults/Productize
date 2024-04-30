/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import Card from './cards/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

export interface slideProps {
    title: string;
}

export const staticProducts = [
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
    // const swiper = useSwiper();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Assuming mobile screen size width is less than 768px

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Update isMobile state based on window width
        };

        window.addEventListener('resize', handleResize); // Listen for window resize events

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup the event listener
        };
    }, []); // Empty dependency array to run effect only once on component mount

    // Render product cards
    const renderStaticCards = staticProducts?.map((product: any) => (
        <SwiperSlide key={product?.slug}>
            <Card
                // key={product?.slug}
                // staticProduct={product}
                // width={`257px`}
                productID={product?.slug}
                image={product?.thumbnail}
                heading={product?.title}
                price={product?.price}
                publisher={product?.publisher}
            />
        </SwiperSlide>
    ));

    return (
        <Flex>
            <Container p={0} maxW={`70rem`}>
                <Flex mb={5} justifyContent={`space-between`} alignItems={`center`}>
                    <Text as={`h4`}>{title}</Text>
                </Flex>

                <Swiper
                    spaceBetween={25}
                    slidesPerView={isMobile ? 1 : 4} // Change slidesPerView based on screen size
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                >
                    {renderStaticCards}
                    <Box py={5}></Box>
                </Swiper>
            </Container>
        </Flex>
    );
};
