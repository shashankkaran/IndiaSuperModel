import React, { useState, useEffect, useRef } from 'react'
import './imgUpload.css';
import { getStorage, ref, getDownloadURL , uploadBytesResumable } from "firebase/storage";


function ImgUpload() {
    const [progress, setProgress] = useState(0)
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
// const storageRef = ref(storage);



    const HandleUpload =(e) => {
       e.preventDefault();
        const file = e.target.files;
       uploadFiles(file);
    
    };
const uploadFiles = (file) =>{
    // if(!file) return;
    const storageRef = ref(storage,`/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef,file);

    uploadTask.on("state_changed",(snapshot)=>{
        const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes)*100
            );
        setProgress(prog);

    
    },(err)=> console.log(err),
    () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
    }
    )

}

    return (
        <div>

     
               <input  type="file" onChange={HandleUpload} name="img" className="img"/>
            <h3>Uploaded {progress}</h3>
  

        </div>
    );
}

export default ImgUpload
