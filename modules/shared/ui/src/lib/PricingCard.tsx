/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Flex, List, ListItem, Stack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { SharedButton } from './SharedButton';
import { CardLayout, CardProps } from './layouts/CardLayout';
import { usePlanUpgrade, useSetPaymentPlan } from '@productize/hooks';

export interface PricingCardProps {
    cardProps: CardProps;
    listItems: Array<string>;
    iconColor: string;
    amount: string | number;
    textColor: string;
    showButton?: boolean;
    btnText: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({ cardProps, listItems, iconColor, amount, btnText, textColor, showButton }) => {
    const { upgrade, upgradeStatus } = usePlanUpgrade();
    const isPremium = useSetPaymentPlan();

    const lists = listItems?.map((list, index) => (
        <ListItem key={index} display="flex" alignItems="flex-start" gap={2}>
            <Icon fontSize="1.5rem" color={iconColor} icon="gg:check" />
            <Text fontSize={{ base: 'xs', md: 'md' }} color={textColor}>
                {list}
            </Text>
        </ListItem>
    ));

    return (
        <CardLayout bgColor={cardProps.bgColor} width={cardProps.width} height={cardProps.height} borderRadius={cardProps.borderRadius}>
            <Flex flexDir="column" justifyContent="space-between" height="100%" py={10} px={{ base: 5, md: '36px' }}>
                <Box>
                    <Stack alignItems="center">
                        <Text fontSize="lg" color="coral.200">
                            Subscription Plan
                        </Text>
                        <Box mb={8}>
                            <Text as="h3" color={textColor} fontWeight={700}>
                                NGN {amount}
                                <Text fontSize="18px" fontWeight={200} color="grey.400" as="span">
                                    /Per Month
                                </Text>
                            </Text>
                        </Box>
                    </Stack>
                    <List spacing={{ base: 2, lg: 7 }} mb="3rem">
                        {lists}
                    </List>
                </Box>
                <Stack gap={3}>
                    <SharedButton
                        text={isPremium ? `Subscribed!` : btnText}
                        width="100%"
                        height="56px"
                        bgColor={isPremium ? `green.200` : 'purple.200'}
                        textColor="white"
                        borderRadius="4px"
                        fontSize={{ base: '16px', md: '24px' }}
                        btnExtras={{
                            isLoading: upgradeStatus.isLoading,
                            onClick: () => upgrade(),
                            disabled: isPremium,
                        }}
                    />
                </Stack>
            </Flex>
        </CardLayout>
    );
};
