import React, { useState, useEffect, useRef } from 'react'
import './imgUpload.css';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../firebase';

function ImgUpload() {
    const [progress, setProgress] = useState(0)
    // Get a reference to the storage service, which is used to create references in your storage bucket


    // Create a storage reference from our storage service
    // const storageRef = ref(storage);



    const HandleUpload = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFiles(file);

    };
    const uploadFiles = (file) => {
        if (!file) return;
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog);


        }, (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
            }
        )

    }

    return (
        <div>
            <form  onSubmit={HandleUpload}>
                <input type="file"  name="img" className="input" />
                <button type='submit' className="butt">Upload
                </button>
            </form>
                <h3 class="pb-5 pt-2 center">Uploaded {progress}</h3>

        </div>
    );
}

export default ImgUpload
