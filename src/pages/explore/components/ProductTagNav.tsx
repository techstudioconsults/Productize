import { Box, Flex, Tag } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTags } from '@productize/redux';

const ProductTagNav: React.FC = () => {
    const tags = useSelector(selectTags);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tagLabel = queryParams.get('tag');

    const listData = tags?.map((tag: string) => {
        return (
            <Box key={tag}>
                <NavLink to={`/explore?tag=${tag.toLowerCase()}`}>
                    <Tag bg={tagLabel === tag.toLowerCase() ? `grey.100` : `transparent`}>{tag}</Tag>
                </NavLink>
            </Box>
        );
    });

    return (
        <Flex
            align={{ lg: 'center' }}
            justify={{ lg: 'space-between' }}
            fontSize={{ lg: 'sm' }}
            fontWeight={{ lg: 'medium' }}
            lineHeight={{ lg: 5 }}
            whiteSpace={'nowrap'}
            gap={{ lg: '2.47rem' }}
            mt={{ lg: '2.38rem' }}
            mb={{ lg: '.75rem' }}
        >
            <Box>
                <NavLink to={`/explore`}>
                    <Tag bg={tagLabel ? `transparent` : `grey.100`}>All</Tag>
                </NavLink>
            </Box>
            {listData}
        </Flex>
    );
};

export default ProductTagNav;
