import { useState } from "react";

export const useCompressedFile = () => {
    const [compressedFiles, setCompressedFiles] = useState([]);
    // const [decompressedFiles, setDecompressedFiles] = useState([]);

    const compressFile = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function (event) {
                const arrayBuffer = event.target.result;
                const blob = new Blob([arrayBuffer], { type: file.type });

                const readerBase64 = new FileReader();
                readerBase64.onload = function (eventBase64) {
                    const base64data = eventBase64.target.result;

                    const fileData = {
                        name: file.name,
                        type: file.type,
                        content: base64data,
                    };
                    resolve(fileData);
                };
                readerBase64.onerror = function () {
                    reject(new Error("Error converting file to Base64."));
                };
                readerBase64.readAsDataURL(blob);
            };
            reader.onerror = function () {
                reject(new Error("Error reading file."));
            };
            reader.readAsArrayBuffer(file);
        });
    };

    const compressAndStoreFiles = async (files, name) => {
        const compressedData = await Promise.all(files.map(compressFile));
        setCompressedFiles(compressedData);
        localStorage.setItem(name, JSON.stringify(compressedData));
    };

    const decompressFile = (base64String, originalFileName) => {
        return new Promise((resolve, reject) => {
            const binaryString = window.atob(base64String?.split(",")[1]);
            const byteNumbers = new Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                byteNumbers[i] = binaryString.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray]);
            const fileName = originalFileName || "decompressed_file";

            const reader = new FileReader();
            reader.onload = function (event) {
                const file = new File([event.target.result], fileName);
                resolve(file);
            };
            reader.onerror = function () {
                reject(new Error("Error reading file."));
            };
            reader.readAsArrayBuffer(blob);
        });
    };

    const decompressAndRetrieveFiles = async (base64Strings, originalFileNames) => {
        const decompressedData = await Promise.all(base64Strings.map((base64String, index) => decompressFile(base64String, originalFileNames[index])));
        return decompressedData;
    };

    return { compressedFiles, compressAndStoreFiles, decompressAndRetrieveFiles };
};
