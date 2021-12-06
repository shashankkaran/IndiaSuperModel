import React,{useState} from 'react'
import './bam.css'
import QR from '../../img/QR.jpeg';
import ImgUpload from './ImgUpload';

// import Firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import 'firebase/compat/firestore';
import {  addDoc } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";

function BecomeModel() {
    const firebaseConfig = {
        apiKey: "AIzaSyDfitOt6f-eKIoCuJKVucAUdU1wTeeU_K0",
        authDomain: "northeastindiasupermodel-63133.firebaseapp.com",
        projectId: "northeastindiasupermodel-63133",
        storageBucket: "northeastindiasupermodel-63133.appspot.com",
        messagingSenderId: "103151269694",
        appId: "1:103151269694:web:c0dd41d47bb9d89daa5e6f",
        measurementId: "G-173WLVEPFH"
      };
      
     const app = initializeApp(firebaseConfig);
      
const db = getFirestore(app);
const storage = getStorage();

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


const [data,setData]=useState({
    name:"",
    mobile:"",
    age:"",
    gender:"",
    address:"",
    city:"",
    pincode:"",
    country:"",
    email:"",
    school:"",
    fathername:"",
    fatheroccupation:"",
    fathermobile:"",
    mothername:"",
    motheroccupation:"",
    mothermobile:"",
    height:"",
    weight:"",
    image:null,

});

function HandleChange(e){
    e.preventDefault();
    const {name,value}=e.target;
    setData((prev)=>{
        return {...prev,[name]:value};
    });
}

function RegisterUser(e){

    e.preventDefault();
    const uploadTask=storage.ref("Users"+data.image).put(data.image);
    uploadTask.on(
        "state_changed",
        (snapshot)=>{
            let progress;
            progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log(progress);
        },
        (err)=>{
            console.log(err);

        },
        ()=>{
            storage.ref("Users")
            .child(data.image.name)
            .getDownloadURL()
            .then((imageUrl)=>{
                db.collection("UserData")
                .doc(data.name)
                .set({
                    name:data.name,
                   
                    mobile:data.mobile,
                    age:data.age,
                    gender:data.gender,
                    address:data.address,
                    city:data.city,
                    pincode:data.pincode,
                    country:data.country,
                    email:data.email,
                    school:data.school,
                    fathername:data.fathername,
                    fatheroccupation:data.fatheroccupation,
                    fathermobile:data.fathermobile,
                    mothername:data.mothername,
                    motheroccupation:data.motheroccupation,
                    mothermobile:data.mothermobile,
                    height:data.height,
                    weight:data.weight,
                    image:imageUrl,
                })
                .then(()=>{
                    setData({
                        name:"",
                        mobile:"",
                        age:"",
                        gender:"",
                        address:"",
                        city:"",
                        pincode:"",
                        country:"",
                        email:"",
                        school:"",
                        fathername:"",
                        fatheroccupation:"",
                        fathermobile:"",
                        mothername:"",
                        motheroccupation:"",
                        mothermobile:"",
                        height:"",
                        weight:"",
                        image:null,
                    })
                })

            })
        }
    )

}


    return (
        <div>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-#FBBF24">BECOME A MODEL</h1>
                        <h5 class="lg:w-2/3 mx-auto leading-relaxed text-white text-base">We understand that it can be very daunting and confusing to know where and how to get started in modelling.Northeast India Super Models can help,we are here to demystify the routes into the industry and to help get you to the position where you can confidently apply to a professional agencies for freelance castings.<br /> Northeast India Super Models can advise you on your model potential,the types of modelling you are suited to and if modelling is something you are serious about, help you to create and build your personal professional model portfolio </h5>
                        <img alt="testimonial" class="w-150 h-150 mb-8 object-cover object-center  inline-block border-2 border-gray-200 bg-gray-100" src={QR} />
                            
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="name" onChange={HandleChange} value={data.name} class="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="mobile" onChange={HandleChange} value={data.mobile} class="leading-7 text-sm text-gray-600">Mobile</label>
                                    <input type="text" id="mobile" name="mobile" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="age" onChange={HandleChange} value={data.age} class="leading-7 text-sm text-gray-600">Age</label>
                                    <input type="text" id="age" name="age" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>

                            </div>


                            <div class="p-2 w-1/2">
                                <div class="relative">
                                <label for="gender" class="leading-7 text-sm text-gray-600">Gender</label><br/>
                                <select onChange={HandleChange} value={data.gender} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="gender" name="gender" >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                </div>
                            </div>
{/* 


                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="ethnicity" class="leading-7 text-sm text-gray-600">Ethnicity</label>
                                    <input type="text" id="ethnicity" name="ethnicity" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>

                            </div> */}



                         

                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="address" class="leading-7 text-sm text-gray-600">Address</label>
                                    <textarea id="address" onChange={HandleChange} value={data.address} name="address" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="city" class="leading-7 text-sm text-gray-600">City</label>
                                    <input type="text" id="city" onChange={HandleChange} value={data.city} name="city" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="pincode" class="leading-7 text-sm text-gray-600">Pincode</label>
                                    <input type="pincode" id="pincode" onChange={HandleChange} value={data.pincode} name="pincode" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="country" class="leading-7 text-sm text-gray-600">Country</label>
                                    <input type="text" id="country" onChange={HandleChange} value={data.country} name="country" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>


                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="text" id="email" onChange={HandleChange} value={data.email} name="email" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="school" class="leading-7 text-sm text-gray-600">School/College Name</label>
                                    <input type="text" id="school" onChange={HandleChange} value={data.school} name="school" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                 
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="Father's Name" class="leading-7 text-sm text-gray-600">Father's Name</label>
                                    <input type="text" id="Father's Name" onChange={HandleChange} value={data.fathername} name="Father's Name" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="fatheroccupation" class="leading-7 text-sm text-gray-600">Father's Occupation</label>
                                    <input type="text" id="fatheroccupation" onChange={HandleChange} value={data.fatheroccupation} name="fatheroccupation" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="fathermob" class="leading-7 text-sm text-gray-600">Father's Mobile no.</label>
                                    <input type="text" id="fathermob" onChange={HandleChange} value={data.fathermobile} name="fathermob" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>


                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="Mother's Name" class="leading-7 text-sm text-gray-600">Mother's Name</label>
                                    <input type="text" id="Mother's Name" onChange={HandleChange} value={data.mothername} name="Mother's Name" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="motheroccupation" class="leading-7 text-sm text-gray-600">Mother's Occupation</label>
                                    <input type="text" id="motheroccupation" onChange={HandleChange} value={data.motheroccupation} name="motheroccupation" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="mothermob" class="leading-7 text-sm text-gray-600">Mother's Mobile no.</label>
                                    <input type="text" id="fathermob" onChange={HandleChange} value={data.mothermobile} name="fathermob" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="height" class="leading-7 text-sm text-gray-600">Height</label>
                                    <input type="text" id="height" onChange={HandleChange} value={data.height} name="height" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>

                            </div>

                          
                          
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="Weight" class="leading-7 text-sm text-gray-600">Weight</label>
                                    <input type="text" id="Weight" onChange={HandleChange} value={data.weight} name="Weight" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>



                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="Complexion" class="leading-7 text-sm text-gray-600">Complexion</label>
                                    <input type="text" id="Complexion" onChange={HandleChange} value={data.complexion} name="Complexion" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div class="p-2 w-full">
                                <div class="relative">
                                <label for="futureGoal" class="leading-7 text-sm text-gray-600">If you get an opportunity to enter into media, which medium you give preference</label><br/>
                                <select onChange={HandleChange} value={data.futuregoal} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="futureGoal" name="futureGoal" >
                                    <option value="movies">Movies</option>
                                    <option value="serial">T.V Serial</option>
                                    <option value="Rampmodeling">Ramp Modeling</option>
                                    <option value="stillModeling">Still Modeling</option>
                                    
                                </select>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="futureExplain" class="leading-7 text-sm text-gray-600">Explain Why</label>
                                    <input type="text" id="futureExplain" onChange={HandleChange} value={data.futureexplain} name="futureExplain" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>


                            <div class="p-2 w-full">
                                <div class="relative">
                                <label for="audition" class="leading-7 text-sm text-gray-600">Preferred City of Audition</label><br/>
                                <select onChange={HandleChange} value={data.auditionlocation} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="audition" name="audition" >
                                    <option value="Kolkata">Kolkata</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Goa">Goa</option>
                                    
                                </select>
                                </div>
                            </div>
                <ImgUpload/>


                            <div class="p-2 w-full">
                                <button onClick={RegisterUser} class="input flex mx-auto text-white border-0 py-2 px-8 focus:outline-none rounded text-lg">Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BecomeModel
