import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_PATH = 'http://localhost/diaverum_challenge/API/index.php';

// const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('on submit');
// }


const FileProcess = () => {
    const fileReader = new FileReader();
    const [currentFile, setCurrentFile] = useState<File>(null);
    const [content, setContent] = useState([]);
    const handleFileRead = (e) => {
        // setContent(fileReader.result);
        //
        // console.log(content);
        // // … do something with the 'content' …
        //onload function which reads file data and do task
        let fileContent = e.target.result;
        const allLines = fileContent.split(/\r\n|\n/);
        const finalLines = allLines.filter(line => line.lastIndexOf('#') === -1 ? true : false);
        const fileData = [];
        finalLines.forEach(line => {
            fileData.push(line.split('|'));
        });
        setContent([...content, fileData ]);
        console.log(content);
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
            {content}
        </div>
    );
}

export default FileProcess;