import { Button } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface ButtonProps {
  text: string;
  width: string;
  height: string;
  bgColor: string;
  textColor: string;
  borderRadius: string;
  fontSize: object;
}

export function SharedButton({
  text,
  width,
  height,
  bgColor,
  textColor,
  borderRadius,
  fontSize,
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
    >
      {text}
    </Button>
  );
}

export default SharedButton;
