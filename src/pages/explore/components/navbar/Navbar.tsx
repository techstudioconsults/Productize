import { Flex, Image, Center, Link } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import Links from '../../../../../src/components/navbar/NavigationLinks';
import { useCallback, useEffect, useState } from 'react';
import { AvatarComp, SharedButton, Sidenav } from '@productize/ui';

export const Navbar = ({ isAuth }: any) => {
    const [isScroll, setScroll] = useState(false);
    const [linkColor, setLinkColor] = useState(`white`);
    const { pathname } = useLocation();

    const switchMenuColor = useCallback(() => {
        switch (pathname) {
            case `/`:
                setLinkColor(`grey.100`);
                break;
            default:
                setLinkColor(`yellow.300`);
                break;
        }
    }, [pathname]);
    useEffect(() => {
        switchMenuColor();
    }, [switchMenuColor]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 10) {
                setScroll(true);
            } else if (window.scrollY === 0) {
                setScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Flex className="cc-container" justifyContent={`space-between`} alignItems={`center`} height={`5rem`} paddingInline={{ base: 4, xl: 0 }}>
            <Center>
                <Link as={RouterLink} to={`/`}>
                    <Image alt="logo" src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`} />
                </Link>
            </Center>
            <Links linkColor={linkColor} isScroll={isScroll} isMobile={false} />
            <Flex display={{ base: `none`, xl: `flex` }} gap={2}>
                {isAuth ? (
                    <AvatarComp linkColor={linkColor} isScroll={isScroll} />
                ) : (
                    <>
                        <Link as={RouterLink} to={`/auth/login`}>
                            <SharedButton
                                fontSize={{ base: `sm`, md: `md` }}
                                text={'Login'}
                                width={'160px'}
                                height={'48px'}
                                bgColor={'transparent'}
                                textColor={isScroll ? 'black' : linkColor}
                                borderRadius={'4px'}
                            />
                        </Link>
                        <Link as={RouterLink} to={`/auth`}>
                            <SharedButton
                                fontSize={{ base: `sm`, md: `md` }}
                                text={'Get Started'}
                                width={'160px'}
                                height={'48px'}
                                bgColor={'yellow.200'}
                                textColor={isScroll ? 'black' : linkColor}
                                borderRadius={'4px'}
                            />
                        </Link>
                    </>
                )}
            </Flex>
            <Sidenav links={<Links isMobile={true} />} />
        </Flex>
    );
};
