import { Box } from '@chakra-ui/react';
import React from 'react';
import navData from './navData';

interface NavList {
  id: number;
  li: string;
}

const Wrapper: React.FC = () => {
  const listData = navData.map((list: NavList) => {
    const isList4 = list.id === 4;
    const listStyle: React.CSSProperties = {
      color: isList4 ? `#000` : undefined,
      backgroundColor: isList4 ? `#fff` : undefined,
      border: isList4 ? `1px solid #1E2323` : undefined,
      borderRadius: isList4 ? `24px` : undefined,
      padding: isList4 ? `.625rem 1.25rem` : undefined,
      display: isList4 ? 'flex' : undefined,
      marginLeft: isList4 ? `-.938rem` : undefined,
      marginRight: isList4 ? `-.938rem` : undefined,
      alignItems: isList4 ? `center` : undefined,
      marginTop: isList4 ? `-.75rem` : undefined,
      boxShadow: isList4 ? `2px 2px 0px 0.5px #0E0A2D` : undefined,
    };

    return (
      <Box key={list.id} style={listStyle}>
        {list.li}
      </Box>
    );
  });

  return (
    <Box>
      <Box
        as='ul'
        display='flex'
        gap='28px'
        // paddingX='6rem'
        paddingTop='2.875rem'
        marginTop='-.75rem'
        whiteSpace='nowrap'
        fontSize='sm'
        cursor='pointer'
      >
        {listData}
      </Box>
    </Box>
  );
};

export default Wrapper;

