"use client"

import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {useGnreStore} from "@/stores/gnreStore";

const MyDropzone: React.FC<{ onDrop: (files: File[]) => void }> = ({ onDrop }) => {
    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div
            {...getRootProps()}
            className="flex flex-col items-center justify-center w-full h-32 p-4 border-2 border-dashed border-gray-300 rounded-md cursor-pointer"
        >
            <input {...getInputProps()} />
            <p>Drag n drop some files here, or click to select files</p>
        </div>
    );
};

const GenerateGNREPage: React.FC = () => {
    const { testXML } = useGnreStore();

    const handleDrop = (acceptedFiles: File[]) => {
        console.log(acceptedFiles);
        testXML(acceptedFiles);
    };

    return (
        <div className="relative flex flex-col items-center w-4/5 p-4 mx-auto my-10">
            <div className="w-full mb-4">
                <Card>
                    <CardHeader>
                        <CardTitle>File Upload</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <MyDropzone onDrop={handleDrop} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default GenerateGNREPage;