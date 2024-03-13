import { Box, Card, CardBody, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

import { ReactNode } from 'react';

interface cardProps {
    title: string;
    value: string | number | ReactNode;
    bgImg?: string;
    showIcon: boolean;
    bmt?: number;
    tmy?: number;
}

export const DataWidgetCard = ({ title, value, bgImg, showIcon, bmt, tmy }: cardProps) => {
    return (
        <Card borderRadius={`8px`} variant={`outline`} bgImage={bgImg} bgPosition={`right`} bgSize={`cover`} bgRepeat={`no-repeat`}>
            <CardBody>
                <Box display={showIcon ? `block` : `none`} fontSize={`32px`}>
                    <Icon icon={`mdi:naira`} />
                </Box>
                <Box mt={bmt}>
                    <Text>{title}</Text>
                    <Text my={tmy} as={`h5`}>
                        {value}
                    </Text>
                </Box>
            </CardBody>
        </Card>
    );
};
