import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import navData from "../../../utils/navData";

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
            align={{ lg: "center" }}
            justify={{ lg: "space-between" }}
            fontSize={{ lg: "sm" }}
            fontWeight={{ lg: "medium" }}
            lineHeight={{ lg: 5 }}
            whiteSpace={"nowrap"}
            gap={{ lg: "2.47rem" }}
            mt={{ lg: "2.38rem" }}
            mb={{ lg: ".75rem" }}
        >
            {listData}
        </Flex>
    );
};

export default Wrapper;
