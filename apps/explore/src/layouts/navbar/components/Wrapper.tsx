import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import navData from './navData';

interface NavList {
  id: number;
  li: string;
  path: string;
}

const Wrapper: React.FC = () => {
  const listData = navData.map((list: NavList) => {
    return (
      <Box key={list.id}>
        <NavLink to={list.path}>{list.li}</NavLink>
      </Box>
    );
  });

  return (
    <Flex
      fontSize={{ lg: 'sm' }}
      fontWeight={{ lg: 'medium' }}
      lineHeight={{ lg: 5 }}
      whiteSpace={'nowrap'}
      gap={{ lg: '2.47rem' }}
      mt={{ lg: '2.38rem' }}
      mb={{ lg: '.75rem' }}
    >
      {listData}
    </Flex>
  );
};

export default Wrapper;

// const isList4 = list.id === 4;
// const listStyle: React.CSSProperties = {
//   color: isList4 ? `#000` : undefined,
//   backgroundColor: isList4 ? `#fff` : undefined,
//   border: isList4 ? `1px solid #1E2323` : undefined,
//   borderRadius: isList4 ? `24px` : undefined,
//   padding: isList4 ? `.625rem 1.25rem` : undefined,
//   display: isList4 ? 'flex' : undefined,
//   marginLeft: isList4 ? `-.938rem` : undefined,
//   marginRight: isList4 ? `-.938rem` : undefined,
//   alignItems: isList4 ? `center` : undefined,
//   marginTop: isList4 ? `-.75rem` : undefined,
//   boxShadow: isList4 ? `2px 2px 0px 0.5px #0E0A2D` : undefined,
