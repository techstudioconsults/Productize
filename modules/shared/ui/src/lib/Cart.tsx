import { AvatarBadge, Box, Avatar, Link } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
import React, { memo } from 'react';
import { useCart } from '@productize/hooks';

export const Cart: React.FC = memo(() => {
    const cart = useCart();
    return (
        <Box>
            <Link as={RouterLink} to={`/explore/product/cart`}>
                <Avatar color="black" bgColor="transparent" icon={<Icon fontSize="1.5rem" icon="ion:cart-sharp" />} size="sm">
                    {cart.totalProductQuantity > 0 && (
                        <AvatarBadge fontSize="10px" color="grey.100" boxSize="1.5rem" bg="purple.200">
                            {cart.totalProductQuantity}
                        </AvatarBadge>
                    )}
                </Avatar>
            </Link>
        </Box>
    );
});

Cart.displayName = 'Cart';
