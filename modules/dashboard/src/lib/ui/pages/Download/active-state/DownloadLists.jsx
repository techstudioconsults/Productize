import React, { useCallback, useEffect, useState } from "react";
import DownloadCard from "../component/DownloadCard";
import { SimpleGrid } from "@chakra-ui/react";
import { useDownloadedProductsMutation } from "@productize-v1.0.0/modules/shared/redux";

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

    return (
        <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={{ base: 1, lg: 5 }}>
            {downloadedProductsList}
        </SimpleGrid>
    );
};

export default DownloadLists;
