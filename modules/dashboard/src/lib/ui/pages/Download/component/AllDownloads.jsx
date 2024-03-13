import { useCallback, useEffect, useState } from "react";
import DownloadCard from "./DownloadCard";
import NoDownload from "../empty-state/NoDownload";
import { SimpleGrid } from "@chakra-ui/react";
import { useDownloadedProductsMutation } from "@productize/redux";
import { DownloadLoader } from "@productize/ui";

const AllDownloads = () => {
    const [downloadList, downloadListStatus] = useDownloadedProductsMutation();
    const [downloadedProducts, setDownloadedProducts] = useState([]);

    const getDownloadedProducts = useCallback(async () => {
        try {
            const res = await downloadList(null).unwrap();
            console.log(res);
            setDownloadedProducts(res);
        } catch (error) {
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
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xxl: 4 }} spacing={{ base: 2, sm: 5 }}>
            {downloadedProductsList}
        </SimpleGrid>
    );
};

export default AllDownloads;
