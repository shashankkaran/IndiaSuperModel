import React, { useState, useEffect, useRef } from 'react'
import './imgUpload.css';


function ImgUpload() {


    const upload =(e)=>{
       
        const file = e.target.files;
        console.warn(file);
    
    };


    return (
        <div>

     
               <input  type="file" onChange={(e)=>this.upload(e)} name="img" className="img"/>
            
  

        </div>
    );
}

export default ImgUpload
