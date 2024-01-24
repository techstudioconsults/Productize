import { Box, Flex, Tag } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import navData from "../../../utils/navData";
import { selectTags, useGetProductTagsMutation } from "@productize-v1.0.0/modules/shared/redux";
import { useSelector } from "react-redux";

interface NavList {
    id: number;
    li: string;
    path: string;
}

const ProductTagNav: React.FC = () => {
    const tags = useSelector(selectTags);

    const listData = tags?.map((tag: string) => {
        return (
            <Box key={tag}>
                <NavLink to={``}>
                    <Tag bg={`transparent`}>{tag}</Tag>
                </NavLink>
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
            <Box>
                <NavLink to={``}>
                    <Tag>All</Tag>
                </NavLink>
            </Box>
            {listData}
        </Flex>
    );
};

export default ProductTagNav;
