import React, { useCallback, useEffect, useState } from "react";
import DownloadCard from "../component/DownloadCard";
import { Box, Flex, Select, SimpleGrid } from "@chakra-ui/react";
import { useDownloadedProductsMutation } from "@productize-v1.0.0/modules/shared/redux";
import { DownloadLoader } from "@productize-v1.0.0/modules/shared/ui";
import NoDownload from "../empty-state/NoDownload";

const DownloadLists = () => {
    const [downloadList, downloadListStatus] = useDownloadedProductsMutation();
    const [downloadedProducts, setDownloadedProducts] = useState([]);

    const getDownloadedProducts = useCallback(async () => {
        try {
            const res = await downloadList(null).unwrap();
            console.log(res);
            setDownloadedProducts(res);
        } catch (error) {
            // setError(error.data.message);
            console.log(error);
        }
    }, [downloadList]);

    const downloadedProductsList = downloadedProducts.map((product) => {
        return <DownloadCard product={product} key={product.id} />;
    });

    useEffect(() => {
        getDownloadedProducts();
    }, [getDownloadedProducts]);

    if (downloadListStatus.isLoading) {
        return <DownloadLoader />;
    }

    if (!downloadedProducts?.length) {
        return <NoDownload />;
    }

    return (
        <>
            <Box my={10}>
                <Flex justifyContent={`flex-start`}>
                    <Box>
                        <Select isDisabled fontWeight={`bold`} placeholder="All Download">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </Box>
                </Flex>
            </Box>
            <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={{ base: 1, lg: 5 }}>
                {downloadedProductsList}
            </SimpleGrid>
        </>
    );
};

export default DownloadLists;
