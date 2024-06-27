import { Box, Flex, Tag } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const tags = ['Digital Products', 'Skill Selling'];
// const tags = ['print on Demand', 'Skill Selling', 'Template Hub'];

const ProductTagNav: React.FC = () => {
    // const tags = useSelector(selectTags);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tagLabel = queryParams.get('tag');

    const listData = tags?.map((tag: string, index: number) => {
        return (
            <React.Fragment key={index}>
                {/* {index === 0 && <CategoryMenu tag={`Digital Products`} />} */}
                <NavLink to={`/explore/category?tag=${tag.toLowerCase()}`}>
                    <Tag fontWeight={`semibold`} fontSize={{ lg: 'md' }} bg={tagLabel === tag.toLowerCase() ? `grey.100` : `transparent`}>
                        {tag}
                    </Tag>
                </NavLink>
            </React.Fragment>
        );
    });

    return (
        <Flex
            align={{ lg: 'center' }}
            justify={{ lg: 'center' }}
            fontWeight={{ lg: 'medium' }}
            lineHeight={{ lg: 5 }}
            whiteSpace={'nowrap'}
            gap={{ lg: '5.47rem' }}
            mt={{ lg: '2.38rem' }}
            mb={{ lg: '.75rem' }}
        >
            <Box>
                <NavLink to={`/explore`}>
                    <Tag fontWeight={`semibold`} bg={tagLabel ? `transparent` : `grey.100`}>
                        All
                    </Tag>
                </NavLink>
            </Box>
            {listData}
        </Flex>
    );
};

export default ProductTagNav;

// const CategoryMenu = ({ tag }: any) => {
//     return (
//         <Menu>
//             <MenuButton>
//                 <Flex fontWeight={`semibold`} alignItems={`center`} gap={1}>
//                     <Text>{tag}</Text>
//                     <Icon fontSize={`1.2rem`} icon="mdi:chevron-down" />
//                 </Flex>
//             </MenuButton>
//             <MenuList>
//                 <MenuItem py={3} as={Link} justifyContent={`start`} to={`/explore/category/${`video`}?tag=${tag.toLowerCase()}`} state={{ tags: [] }}>
//                     Video
//                 </MenuItem>
//                 <MenuItem py={3} as={Link} justifyContent={`start`} to={`/explore/category/${`audio`}?tag=${tag.toLowerCase()}`} state={{ tags: [] }}>
//                     Audio
//                 </MenuItem>
//                 <MenuItem py={3} as={Link} justifyContent={`start`} to={`/explore/category/${`design`}?tag=${tag.toLowerCase()}`} state={{ tags: [] }}>
//                     Design
//                 </MenuItem>
//                 <MenuItem py={3} as={Link} justifyContent={`start`} to={`/explore/category/${`printing`}?tag=${tag.toLowerCase()}`} state={{ tags: [] }}>
//                     Printing
//                 </MenuItem>
//                 <MenuItem py={3} as={Link} justifyContent={`start`} to={`/explore/category/${`education`}?tag=${tag.toLowerCase()}`} state={{ tags: [] }}>
//                     Education
//                 </MenuItem>
//                 <MenuItem py={3} as={Link} justifyContent={`start`} to={`/explore/category/${`document`}?tag=${tag.toLowerCase()}`} state={{ tags: [] }}>
//                     Document
//                 </MenuItem>
//                 <MenuItem py={3} as={Link} justifyContent={`start`} to={`/explore/category/${`comics`}?tag=${tag.toLowerCase()}`} state={{ tags: [] }}>
//                     Comics
//                 </MenuItem>
//             </MenuList>
//         </Menu>
//     );
// };

// {
//     /* <NavLink to={`/explore?tag=${tag.toLowerCase()}`}> */
// }
// {
//     /* <NavLink to={`/explore/category?tags=${tag.toLowerCase()}`}>
//                     <Tag fontSize={{ lg: 'md' }} bg={tagLabel === tag.toLowerCase() ? `grey.100` : `transparent`}>
//                         {tag}
//                     </Tag>
//                 </NavLink> */
// }
