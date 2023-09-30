import { Center, Image } from '@chakra-ui/react';

interface iconProps {
  icon: string;
  name: string;
  size?: string | object | number;
}

export const Icon = ({ icon, name, size }: iconProps) => {
  return (
    <Center boxSize={size || `24px`}>
      <Image boxSize={size || `24px`} src={icon} alt={name} />
    </Center>
  );
};
