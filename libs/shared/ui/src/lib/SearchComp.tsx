import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

interface searchProps {
  color?: string;
  width?: string;
  size?: string;
}

export const SearchComp = ({ color, width, size }: searchProps) => {
  return (
    <InputGroup size={size}>
      <InputLeftElement
        pointerEvents="none"
        fontSize="1.2em"
        children={<Icon icon={`majesticons:search-line`} />}
      />
      <Input
        border={`none`}
        placeholder={'Search'}
        _placeholder={{ color: '#01010140' }}
        w={width}
        bgColor={color}
      />
    </InputGroup>
  );
};
