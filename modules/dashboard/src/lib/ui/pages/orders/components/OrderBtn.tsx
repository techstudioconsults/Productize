import { Button } from "@chakra-ui/react";

interface OrderBtnProps {
    title: string;
    color: string;
    borderColor: string;
    leftIcon: JSX.Element | null;
    rightIcon?: JSX.Element | null;
    fontSize?: string;
}

const OrderBtn: React.FC<OrderBtnProps> = ({ title, color, borderColor, leftIcon, rightIcon, fontSize }) => {
    return (
        <Button
            leftIcon={leftIcon ? leftIcon : undefined}
            rightIcon={rightIcon ? rightIcon : undefined}
            variant="outline"
            width="fit-content"
            height="40px"
            color={color}
            borderColor={borderColor}
            border="1px"
            rounded="4px"
            fontWeight="normal"
            fontSize={fontSize}
        >
            {title}
        </Button>
    );
};

export default OrderBtn;
