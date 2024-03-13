import { Box, Flex, Image, List, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { SharedButton } from '@productize/ui';

export interface DualSectionLayoutProps {
    children: React.ReactNode;
    img: string;
    flexDirection: object;
    textSectionBgColor: string;
    imgSectionBgColor: string;
    justifyContent: object | string;
    imgPosition: string | object;
    imgFit: object;
    height: string | object;
}

export const DualSectionLayout = ({
    children,
    img,
    flexDirection,
    textSectionBgColor,
    imgSectionBgColor,
    justifyContent,
    imgPosition,
    imgFit,
    height,
}: DualSectionLayoutProps) => {
    return (
        <Flex height={height} flexDir={flexDirection}>
            <Flex justifyContent={justifyContent} bgColor={textSectionBgColor} flex={1}>
                {children}
            </Flex>
            <Flex
                display={{ sm: `none`, lg: `Flex` }}
                justifyContent={{ base: `center`, xl: `flex-end` }}
                overflow={`hidden`}
                bgColor={imgSectionBgColor}
                flex={1}
            >
                <Image objectFit={imgFit} objectPosition={imgPosition} src={img} alt="img" />
            </Flex>
        </Flex>
    );
};

export interface DualSectionLayoutListProps {
    title: string;
    subTitle: string;
    listItems: Array<string>;
    iconColor: string;
    shouldShowButton: boolean;
}

export const DualSectionLayoutList = ({ title, subTitle, listItems, iconColor, shouldShowButton }: DualSectionLayoutListProps) => {
    const lists = listItems?.map((list, index) => {
        return (
            <ListItem key={index} display={`flex`} alignItems={`flex-start`} gap={2}>
                <Icon fontSize={`1.3rem`} color={iconColor} icon={`mdi:star-four-points`} />
                <Text>{list}</Text>
            </ListItem>
        );
    });
    return (
        <Box>
            <Text as={`h1`} fontWeight={700} lineHeight={`shorter`}>
                {title}
            </Text>
            <Text as={`h5`} fontWeight={100} my={10}>
                {subTitle}
            </Text>
            <List spacing={3}>{lists}</List>
            <Box mt={10} display={shouldShowButton ? `block` : `none`}>
                <Link to={`/auth`}>
                    <SharedButton
                        text={'Get Started'}
                        width={{ base: `100%`, xl: '22.5rem' }}
                        height={'48px'}
                        bgColor={'yellow.200'}
                        textColor={'white'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, md: `md` }}
                    />
                </Link>
            </Box>
        </Box>
    );
};
