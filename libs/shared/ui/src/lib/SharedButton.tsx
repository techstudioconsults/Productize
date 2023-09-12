import { Button } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

/* eslint-disable-next-line */
export interface ButtonProps {
  text: string;
  width: string | object;
  height: string;
  bgColor: string;
  textColor: string;
  borderRadius: string;
  fontSize: object;
  border?: string;
  leftIcon?: string | any;
  rightIcon?: string | any;
}

export function SharedButton({
  text,
  width,
  height,
  bgColor,
  textColor,
  borderRadius,
  fontSize,
  border,
  leftIcon,
  rightIcon,
}: ButtonProps) {
  return (
    <Button
      leftIcon={<Icon fontSize={`1.5rem`} icon={leftIcon} />}
      rightIcon={<Icon fontSize={`1.5rem`} icon={rightIcon} />}
      fontWeight={500}
      fontSize={fontSize}
      w={width}
      h={height}
      bgColor={bgColor}
      color={textColor}
      borderRadius={borderRadius}
      border={border}
    >
      {text}
    </Button>
  );
}

// export default SharedButton;
