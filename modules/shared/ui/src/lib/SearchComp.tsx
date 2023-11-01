import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Icon } from './Icon';

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
        children={
          <Icon
            icon={`https://res.cloudinary.com/dkszgtapy/image/upload/v1696088263/productize/Productize-iconset/Property_2_Search_vjopxj.svg`}
            name={'search'}
          />
        }
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
