import React, { useState, useEffect } from 'react';
import DataList from './dataList';
import { fields, ItemType } from './types';

const FileProcess = () => {
    const fileReader = new FileReader();
    const [currentFile, setCurrentFile] = useState<File>(null);
    const [ content, setContent ] = useState<ItemType[]|{}[]>([]);
    const handleFileRead = (e) => {
        let fileContent = e.target.result;
        const allLines = fileContent.split(/\r\n|\n/);
        const finalLines = allLines.filter(line => line.lastIndexOf('#', 0) === -1 ? true : false);
        finalLines.shift();
        const fileData = [];
        finalLines.forEach(line => {
            fileData.push(line.split('|'));
        });
        let fileDataList: ItemType[]|{}[];
        fileDataList = fileData.map(item => {
            let fileObject:ItemType|{} = {};
            fields.forEach((key, idx) => fileObject[key] = item[idx]);

            return fileObject;
        });
        setContent([...content, ...fileDataList]);
    };


    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            setCurrentFile(files[0]);
        }
    }

    const onSubmit = () => {
        fileReader.readAsText(currentFile);
        fileReader.onloadend = handleFileRead;

    }

    return (
        <div>
            <label className='btn'>
                <input type='file' onChange={selectFile} />
            </label>
            <button
                className='btn btn-success'
                disabled={!currentFile}
                onClick={onSubmit}
            >
                Upload
            </button>
            <DataList content={content} />
        </div>
    );
}

export default FileProcess;