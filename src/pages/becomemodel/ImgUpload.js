import React, { useState, useEffect, useRef } from 'react'
import './imgUpload.css';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../firebase';

import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  

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
            <form onSubmit={HandleUpload}>
                <input type="file" name="img" className="input center pl-3 mb-2 pb-0" />
                <button type='submit' className="butt">Upload
                </button>
            </form>

            <Box class="pb-4" sx={{ width: '100%' }}>
                <LinearProgressWithLabel value={progress} />
            </Box>

        </div>
    );
}

export default ImgUpload
