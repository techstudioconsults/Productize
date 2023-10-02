import { Button } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

/* eslint-disable-next-line */

export interface BtnExtras {
  border?: string;
  leftIcon?: string | any;
  rightIcon?: string | any;
  type?: string | any;
  isLoading?: boolean;
  loadingText?: string;
  hasError?: boolean;
  errorText?: string;
  isSuccess?: boolean;
  successText?: string;
  disabled?: boolean;
  onClick?: () => void;
}
export interface ButtonProps {
  text: string;
  width: string | object;
  height: string;
  bgColor: string;
  textColor: string;
  borderRadius: string;
  fontSize: object;
  btnExtras?: BtnExtras;
}

export function SharedButton({
  text,
  width,
  height,
  bgColor,
  textColor,
  borderRadius,
  fontSize,
  btnExtras,
}: ButtonProps) {
  return (
    <Button
      onClick={btnExtras?.onClick}
      loadingText={btnExtras?.loadingText}
      isLoading={btnExtras?.isLoading}
      leftIcon={<Icon fontSize={`1rem`} icon={btnExtras?.leftIcon} />}
      rightIcon={<Icon fontSize={`1rem`} icon={btnExtras?.rightIcon} />}
      fontWeight={500}
      fontSize={fontSize}
      w={width}
      h={height}
      bgColor={bgColor}
      color={textColor}
      borderRadius={borderRadius}
      border={btnExtras?.border}
      type={btnExtras?.type}
      disabled={btnExtras?.disabled}
    >
      {text}
    </Button>
  );
}

// export default SharedButton;
