import { useCallback } from "react";

export const useUrlToBlobConverter = () => {
    const urlToBlob = async (url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        return blob;
    };

    const convertToFiles = useCallback(async (urls) => {
        if (!urls || !Array.isArray(urls)) return [];

        const blobPromises = urls.map(async (url) => {
            const blob = await urlToBlob(url);
            return new File([blob], url.substring(url.lastIndexOf("/") + 1), { type: blob.type });
        });

        const blobFiles = await Promise.all(blobPromises);
        return blobFiles;
    }, []);

    return convertToFiles;
};
