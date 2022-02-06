import React, { useState, useEffect, useRef } from 'react'
import $ from 'jquery';
import { storage, db } from '../../firebase';
import { ref, getDownloadURL, uploadBytesResumable, listAll } from "firebase/storage";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Title from './Title'
// import images from 'swiper/core/images';



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
function Portfolio() {


    useEffect(() => {
        getImage();
    }, [])

    const [imageArray, setImageArray] = useState([]);
    // var dir_name = ''
    const [progress, setProgress] = useState(0)
    const HandleUpload = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        // dir_name = file.name;
        uploadFiles(file);
    };
    const uploadFiles = (file) => {
        if (!file) return;
        const storageRef = ref(storage, `/PortfolioImages/${file.name}`);
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

    const checkSize = () => {
        let input = document.getElementById('input');
        // let span = document.getElementById('sizespan');
        // let button = document.getElementsByClassName('.butt');
        let files = input.files;
        // document.querySelector('#sizespan').style.visibility='none';

        if (files[0].size > 5024 * 1024) {


            document.querySelector('.butt').style.visibility = 'hidden';
            // document.getElementById('butt2').style.visibility = 'hidden';
            alert("File Size Exceeded 5MB")
            return;
        }
        else {
            document.querySelector('.butt').style.visibility = 'visible';
            // document.getElementById('butt2').style.visibility = 'visible';

        }

    }




    let arr = [];

    function getImage(e) {

        // Create a reference under which you want to list
        const listRef = ref(storage, 'PortfolioImages/');


        // Find all the prefixes and items.
        listAll(listRef)
            .then((res) => {

                res.prefixes.forEach((folderRef) => {
                    // All the prefixes under listRef.
                    // console.log(folderRef)
                    // You may call listAll() recursively

                });



                res.items.forEach((itemRef) => {

                    // All the items under listRef.
                    // console.log(itemRef.fullPath)
                    const ImageRef = ref(storage, `${itemRef.fullPath}`);

                    getDownloadURL(ImageRef)
                        .then((url) => {
                            // myMap.set(itemRef.name, url);
                            let fullName = itemRef.name;
                            let lenth = fullName.length;
                            let part = fullName.substr(0, lenth - 4);
                            let obj = { name: part, src: url };
                            setImageArray(prevState => {
                                return [...prevState, obj];
                            })
                        })

                });
                setImageArray(arr);
                // console.log(myMap);
                // return myMap;


            }).catch((error) => {
                console.log("err2" + error)
                // Uh-oh, an error occurred!
            });

    }



    console.log(arr)


    function authen() {

        let person = prompt("Please enter Password", "Brown Munde");
       
        if (person == "admin@123" || person == "revna@123") {


           
        } else {
            alert('try again');
         authen();
        }


    }


    window.addEventListener('load', (event) => {
       authen();
      });
    return (

    
        < div class='container center' >
           
            <form onSubmit={HandleUpload}>
                <label for="file" class="leading-7 text-sm text-gray-600">Upload Portfolio Images Here
                    <br />
                    {/* <span style={{color:'red'}}> File name should be YourName_DateofBirth (Example : AnkitaKumari 16 Nov)</span> */}
                </label>
                <br />
                <input id="input" type="file" onChange={checkSize} accept='.png,.jpg' name="img" className="input center pl-0 mb-2 pb-0" />
                <button type='submit' className="butt">Upload
                </button>
                <br />

            </form>


            <Box class="pb-4" sx={{ width: '100%' }}>
                <LinearProgressWithLabel value={progress} />
            </Box>
            <button class="input p-1" onClick={getImage}>Get Images</button>





            <section class="text-gray-400 body-font bg-gray-900">
              
                <div class="container px-5 py-24 mx-auto">

                    <div class="flex flex-wrap -m-1">
                        {/* <div class="xl:w-1/4 md:w-1/2 p-4"> */}
                        {/* <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg"> */}
                        {
                            //  console.log(imageArray[0])
                        }
                        {imageArray.map(data => {
                            return <div class="xl:w-1/3 md:w-1/2 p-4"> <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg"><img class="pb-0" src={data.src} /> <br /> <p>{data.name}</p>  </div> </div>

                        })
                        }

                        {/* </div> */}
                        {/* </div> */}

                    </div>
                </div>
            </section>




        </div >
    )
}

export default Portfolio
