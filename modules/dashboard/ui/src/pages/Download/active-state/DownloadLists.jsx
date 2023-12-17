import React from "react";
import DownloadCard from "../component/DownloadCard";
import { SimpleGrid } from "@chakra-ui/react";

const DownloadLists = () => {
    return (
        <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={{ base: 1, lg: 5 }}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => {
                return <DownloadCard key={card} />;
            })}
        </SimpleGrid>
    );
};

export default DownloadLists;
