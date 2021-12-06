import React, { useState, useEffect, useRef } from 'react'
import './imgUpload.css';



function ImgUpload(props) {


    const [file, setFile] = useState();

    const [previewUrl, setpreviewUrl] = useState();


    const filePickerRef = useRef();



    useEffect(() => {
        if (!file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setpreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }, [file]);



    function pickedHandler(event) {
        let pickedFile;
        if (event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            setFile(pickedFile);
            props.setData((prev)=>{
                return{...prev,image:pickedFile};
            });
        }
    }

    function pickedImageHandler() {
        filePickerRef.current.click();
    }





    return (
        <div>


            <div class="p-2 w-full">
                <div class="relative">
                    <label for="upload Screenshot" class="leading-7 text-sm text-gray-600">Upload Screenshot of Payment</label>
                    <input
                        type="file"
                        id={props.id}
                        ref={filePickerRef}
                        style={{ display: 'none' }}
                        name="upload Screenshot"
                        accept=".jpg,.png,.jpeg"
                        onChange={pickedHandler}
                        class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <div className={`image-upload ${props.center && "ml-auto mr-auto"}`}>
                        <div className="image-upload__preview ml-auto mr-auto">
                            {previewUrl && <img src={previewUrl} alt="preview" />}
                            {!previewUrl && (
                                <div className="center">
                                    <button className="image-upload-button" type="button" onClick={pickedImageHandler}>+Add</button>
                                </div>
                            )}
                           
                        </div>
                        <div>
                                {previewUrl && (
                                    <div className="center ">
                                        <button className="image-upload-button" type="button" onClick={pickedImageHandler}>Edit</button>
                                    </div>
                                )}
                            </div>


                    </div>

                </div>



            </div>


        </div>
    )
}

export default ImgUpload
