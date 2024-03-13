import {AvatarBadge, Box, Avatar, Link} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import {selectCart} from "@productize/redux";
import {useSelector} from "react-redux";
import {Link as RouterLink} from "react-router-dom";

export const Cart = () => {
    const cart = useSelector(selectCart);
    return (
        <Box>
            <Link as={RouterLink} to={`/explore/product/cart`}>
                <Avatar color={`black`} bgColor={`transparent`}
                        icon={<Icon fontSize={`1.5rem`} icon={`ion:cart-sharp`}/>} size={`sm`}>
                    <Box display={cart.totalProductQuantity ? `block` : `none`}>
                        <AvatarBadge fontSize={`10px`} color={`grey.100`} boxSize={`1.5rem`} bg="purple.200">
                            {cart.totalProductQuantity}
                        </AvatarBadge>
                    </Box>
                </Avatar>
            </Link>
        </Box>
    );
};
