import { useCallback } from 'react';

export const useUrlToBlobConverter = () => {
    const urlToBlob = async (url: string): Promise<Blob> => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}`);
        }
        const blob = await response.blob();
        return blob;
    };

    const convertToFiles = useCallback(async (urls: string | string[]): Promise<File[]> => {
        const convertUrlToFile = async (url: string): Promise<File> => {
            const blob = await urlToBlob(url);
            return new File([blob], url.substring(url.lastIndexOf('/') + 1), { type: blob.type });
        };

        if (!urls) return [];
        if (typeof urls === 'string') {
            const file = await convertUrlToFile(urls);
            return [file];
        } else if (Array.isArray(urls)) {
            const filePromises = urls.map(convertUrlToFile);
            const files = await Promise.all(filePromises);
            return files;
        } else {
            throw new Error('Invalid argument: urls must be a string or an array of strings.');
        }
    }, []);

    return convertToFiles;
};
