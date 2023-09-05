import { Button } from '@chakra-ui/react';

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
}: ButtonProps) {
  return (
    <Button
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

export default SharedButton;
