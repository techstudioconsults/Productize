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
  type?: string | any;
  loadingText?: string;
  isLoading?: boolean;
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
  type,
  loadingText,
  isLoading,
}: ButtonProps) {
  return (
    <Button
      loadingText={loadingText}
      isLoading={isLoading}
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
      type={type}
    >
      {text}
    </Button>
  );
}

// export default SharedButton;
