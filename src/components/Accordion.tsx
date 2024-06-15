import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Center } from '@chakra-ui/react';
import { useGetFAQMutation } from '@productize/redux';
import { SpinnerComponentSmall } from '@productize/ui';
import { useCallback, useEffect, useState } from 'react';

export const AccordionComponent = () => {
    const [getFAQ] = useGetFAQMutation();
    const [FAQ, setFAQ] = useState();
    const [FAQLoading, setFAQLoading] = useState(true);

    const getData = useCallback(async () => {
        const res = await getFAQ(null).unwrap();

        if (res.data) {
            setFAQ(res.data);
            setFAQLoading(false);
        }
    }, [getFAQ]);

    useEffect(() => {
        getData();
    }, [getData]);

    if (FAQLoading) {
        return (
            <Center>
                <SpinnerComponentSmall />
            </Center>
        );
    }

    return (
        // <Box border={`1px solid red`}>
        <Accordion allowMultiple>
            <AccordionItem py={3}>
                <h2>
                    <AccordionButton data-btn={`1`}>
                        <Box as="span" flex="1" textAlign="left">
                            Do I have to subscribe on productize?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel data-id={`1`} pb={4}>
                    Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere,
                    blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem data-id={`2`} py={3}>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            When can I withdraw from my wallet
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere,
                    blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem data-id={`3`} py={3}>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            What online payments are accepted?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere,
                    blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem data-id={`4`} py={3}>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            Can I sell without creating an account?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere,
                    blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem data-id={`5`} py={3}>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            Is Productize delivery standard?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere,
                    blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem data-id={`6`} py={3}>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            When can I withdraw from my wallet
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
        // </Box>
    );
};
