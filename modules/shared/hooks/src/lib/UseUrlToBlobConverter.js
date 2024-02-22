import { useCallback } from "react";

export const useUrlToBlobConverter = () => {
    const urlToBlob = async (url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        return blob;
    };

    const convertToFiles = useCallback(async (urls) => {
        const convertUrlToFile = async (url) => {
            const blob = await urlToBlob(url);
            return new File([blob], url.substring(url.lastIndexOf("/") + 1), { type: blob.type });
        };

        if (!urls) return [];
        if (typeof urls === "string") {
            const file = await convertUrlToFile(urls);
            return [file];
        } else if (Array.isArray(urls)) {
            const blobPromises = urls.map(convertUrlToFile);
            const blobFiles = await Promise.all(blobPromises);
            return blobFiles;
        } else {
            throw new Error("Invalid argument: urls must be a string or an array of strings.");
        }
    }, []);

    return convertToFiles;
};
