import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_PATH = 'http://localhost/diaverum_challenge/API/index.php';

// const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('on submit');
// }


const Form = () => {
    // const [currentFile, setCurrentFile] = useState<File>();
    // const [content, setContent] = useState('');
    let fileReader;
    const handleFileRead = (e) => {
        // setContent(fileReader.result);
        //
        // console.log(content);
        // // … do something with the 'content' …
        //onload function which reads file data and do task
        let fileContent = e.target.result;
        const allLines = fileContent.split(/\r\n|\n/);
        const finalLines = allLines.filter(line => line.lastIndexOf('#') === -1 ? true : false);
        finalLines.forEach(line => {
            const eachlineArr = line.split('|');
            console.log(eachlineArr);
        });
    };


    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        const file = e.target.files[0];
        fileReader.readAsText(file);
        // const files = e.target.files;
        // if (files) {
        //     setCurrentFile(files[0]);
        // }
    }

    // const onSubmit = () => {
    //     const data = new FormData();
    //     data.append('file', currentFile, currentFile.name);
    //     // const data = {name: 'tao is me', email: 'my@email.com'};
    //     axios.post(API_PATH, data)
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

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

export default Form;