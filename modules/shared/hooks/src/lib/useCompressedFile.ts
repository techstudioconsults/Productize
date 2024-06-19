import { useState, useCallback } from 'react';

interface CompressedFile {
    name: string;
    type: string;
    content: string;
}

export const useCompressedFile = () => {
    const [compressedFiles, setCompressedFiles] = useState<CompressedFile[]>([]);

    const compressFile = useCallback((file: File): Promise<CompressedFile> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = function (event) {
                const arrayBuffer = event.target?.result;
                if (!arrayBuffer) {
                    reject(new Error('Error reading file.'));
                    return;
                }
                const blob = new Blob([arrayBuffer], { type: file.type });

                const readerBase64 = new FileReader();
                readerBase64.onload = function (eventBase64) {
                    const base64data = eventBase64.target?.result as string;

                    const fileData: CompressedFile = {
                        name: file.name,
                        type: file.type,
                        content: base64data,
                    };
                    resolve(fileData);
                };
                readerBase64.onerror = () => reject(new Error('Error converting file to Base64.'));
                readerBase64.readAsDataURL(blob);
            };

            reader.onerror = () => reject(new Error('Error reading file.'));
            reader.readAsArrayBuffer(file);
        });
    }, []);

    const compressAndStoreFiles = useCallback(
        async (files: File[], name: string) => {
            try {
                const compressedData = await Promise.all(files.map(compressFile));
                setCompressedFiles(compressedData);
                localStorage.setItem(name, JSON.stringify(compressedData));
            } catch (error) {
                console.error('Error compressing files:', error);
            }
        },
        [compressFile]
    );

    const decompressFile = useCallback((base64String: string, originalFileName: string): Promise<File> => {
        return new Promise((resolve, reject) => {
            const binaryString = window.atob(base64String.split(',')[1]);
            const byteNumbers = new Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                byteNumbers[i] = binaryString.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray]);
            const fileName = originalFileName || 'decompressed_file';

            const reader = new FileReader();
            reader.onload = function (event) {
                const result = event.target?.result;
                if (!result) {
                    reject(new Error('Error reading file.'));
                    return;
                }
                const file = new File([result as ArrayBuffer], fileName);
                resolve(file);
            };
            reader.onerror = () => reject(new Error('Error reading file.'));
            reader.readAsArrayBuffer(blob);
        });
    }, []);

    const decompressAndRetrieveFiles = useCallback(
        async (base64Strings: string[], originalFileNames: string[]): Promise<File[]> => {
            try {
                const decompressedData = await Promise.all(base64Strings.map((base64String, index) => decompressFile(base64String, originalFileNames[index])));
                return decompressedData;
            } catch (error) {
                console.error('Error decompressing files:', error);
                throw error;
            }
        },
        [decompressFile]
    );

    return { compressedFiles, compressAndStoreFiles, decompressAndRetrieveFiles };
};
