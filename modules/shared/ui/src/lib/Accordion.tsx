/* eslint-disable @typescript-eslint/no-explicit-any */
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Center } from '@chakra-ui/react';
import { useGetFAQMutation } from '@productize/redux';
import { SpinnerComponentSmall } from '@productize/ui';
import { useCallback, useEffect, useState } from 'react';

export const AccordionComponent = () => {
    const [getFAQ] = useGetFAQMutation();
    const [FAQ, setFAQ] = useState([]);
    const [FAQLoading, setFAQLoading] = useState(true);

    const getData = useCallback(async () => {
        const res = await getFAQ(null).unwrap();
        console.log(res);

        if (res.data) {
            setFAQ(res.data);
            setFAQLoading(false);
        }
    }, [getFAQ]);

    useEffect(() => {
        getData();
    }, [getData]);

    const faqDisplay = FAQ?.map((Q: any) => {
        return (
            <AccordionItem key={Q?.id} data-id={`2`} py={3}>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            {Q?.question}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{Q?.answer}</AccordionPanel>
            </AccordionItem>
        );
    });

    if (FAQLoading) {
        return (
            <Center>
                <SpinnerComponentSmall />
            </Center>
        );
    }

    return <Accordion allowMultiple>{faqDisplay}</Accordion>;
};
