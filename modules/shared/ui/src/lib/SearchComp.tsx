import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Icon } from './Icon';
import search from '@icons/Property_2_Search_vjopxj.svg';

interface searchProps {
    color?: string;
    width?: string;
    size?: string;
}

export const SearchComp = ({ color, width, size }: searchProps) => {
    return (
        <InputGroup size={size}>
            <InputLeftElement pointerEvents="none" fontSize="1.2em" children={<Icon icon={search} name={'search'} />} />
            <Input disabled border={`none`} placeholder={'Search'} _placeholder={{ color: '#01010140' }} maxW={width} bgColor={color} />
        </InputGroup>
    );
};
