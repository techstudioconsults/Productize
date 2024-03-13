import {Flex, Image, Center, Link, Box} from '@chakra-ui/react';
import {Link as RouterLink, useLocation} from 'react-router-dom';

import Links from './NavigationLinks';
import {useCallback, useEffect, useState} from 'react';
import {AvatarComp, SharedButton, Sidenav} from '@productize/ui';

export const Navbar = ({isAuth}: any) => {
    const [isScroll, setScroll] = useState(false);
    const [linkColor, setLinkColor] = useState(`white`);
    const [bgColor, setBgColor] = useState(`white`);
    const {pathname} = useLocation();

    const switchMenuColor = useCallback(() => {
        switch (pathname) {
            case `/`:
                setLinkColor(`grey.100`);
                setBgColor(`purple.200`);
                break;
            case `/features`:
                setLinkColor(`coral.300`);
                setBgColor(`green.100`);
                break;
            case `/pricing`:
                setLinkColor(`yellow.300`);
                setBgColor(`yellow.100`);
                break;
            default:
                setLinkColor(`black.300`);
                setBgColor(`white`);
                break;
        }
    }, [pathname]);

    useEffect(() => {
        switchMenuColor();
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
    }, [switchMenuColor]);

    return (
        <Box pos={`fixed`} top={0} w={`100%`} zIndex={999} backdropFilter={`blur(5px)`}
             bgColor={isScroll ? bgColor : ``}>
            <Flex className="cc-container" justifyContent={`space-between`} alignItems={`center`} height={`5rem`}
                  paddingInline={{base: 4, xl: 0}}>
                <Center gap={4}>
                    <Sidenav links={<Links linkColor={linkColor} isMobile={true}/>}/>
                    <Link as={RouterLink} to={`/`} role={"link"}>
                        <Image
                            alt="logo"
                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`}
                        />
                    </Link>
                </Center>
                <Links linkColor={linkColor} isMobile={false}/>
                <Flex display={{base: `none`, lg: `flex`}} gap={2}>
                    {isAuth ? (
                        <AvatarComp linkColor={linkColor} isScroll={isScroll}/>
                    ) : (
                        <>
                            <Link as={RouterLink} to={`/auth/login`}>
                                <SharedButton
                                    fontSize={{base: `sm`, md: `md`}}
                                    text={'Login'}
                                    width={'160px'}
                                    height={'48px'}
                                    bgColor={'transparent'}
                                    textColor={linkColor}
                                    borderRadius={'4px'}
                                />
                            </Link>
                            <Link as={RouterLink} to={`/auth`}>
                                <SharedButton
                                    fontSize={{base: `sm`, md: `md`}}
                                    text={'Get Started'}
                                    width={'160px'}
                                    height={'48px'}
                                    bgColor={'yellow.200'}
                                    textColor={linkColor}
                                    borderRadius={'4px'}
                                />
                            </Link>
                        </>
                    )}
                </Flex>
                <Box display={{lg: `none`}}>
                    {isAuth ? (
                        <AvatarComp linkColor={linkColor} isScroll={isScroll}/>
                    ) : (
                        <Link as={RouterLink} to={`/auth/login`}>
                            <SharedButton
                                fontSize={{base: `sm`, md: `md`}}
                                text={'Login'}
                                width={'fit-content'}
                                height={'48px'}
                                bgColor={linkColor === `grey.100` ? `grey:100` : `purple.200`}
                                textColor={bgColor === `purple.200` ? `purple.200` : `grey.100`}
                                borderRadius={'4px'}
                            />
                        </Link>
                    )}
                </Box>
            </Flex>
        </Box>
    );
};

export default Navbar;
