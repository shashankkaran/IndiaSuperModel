import React, { useState } from 'react'
import './bam.css'
import QR from '../../img/QR.jpeg';
import ImgUpload from './ImgUpload';
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
// import { getFirestore } from 'firebase/firestore'
import GoogleForm from './GoogleForm';
function BecomeModel() {


    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [school, setSchool] = useState("");
    const [fathername, setFathername] = useState("");
    const [fatheroccupation, setFatheroccupation] = useState("");
    const [fathermob, setFathermob] = useState("");
    const [mothername, setMothername] = useState("");
    const [motheroccupation, setMotheroccupation] = useState("");
    const [mothermob, setMothermob] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [complexion, setComplexion] = useState("");
    const [futuregoal, setFuturegoal] = useState("");
    const [futureexplain, setFutureexplain] = useState("");
    const [auditionlocation, setAuditionlocation] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const docRef = addDoc(collection(db, "users"), {
                name: name,
                mobile: mobile,
                age: age,
                gender: gender,
                address: address,
                city: city,
                pincode: pincode,
                country: country,
                email: email,
                school: school,
                fathername: fathername,
                fatheroccupation: fatheroccupation,
                fathermob: fathermob,
                mothername: mothername,
                motheroccupation: motheroccupation,
                mothermob: mothermob,
                height: height,
                weight: weight,
                complexion: complexion,
                futuregoal: futuregoal,
                futureexplain: futureexplain,
                auditionlocation: auditionlocation,

            });
            alert("Succesfully Submitted . Your Reference ID is", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setName("");
        setMobile("");
        setAge("");
        setGender("");
        setAddress("");
        setCity("");
        setPincode("");
        setCountry("");
        setEmail("");
        setSchool("");
        setFathername("");
        setFatheroccupation("");
        setFathermob("");
        setMothername("");
        setMotheroccupation("");
        setMothermob("");
        setHeight("");
        setWeight("");
        setComplexion("");
        setFuturegoal("");
        setFutureexplain("");
        setAuditionlocation("");


    };







    return (
        <div>
           

            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <GoogleForm/>
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-#FBBF24">BECOME A MODEL</h1>
                        <h5 class="lg:w-2/3 mx-auto leading-relaxed text-white text-base">We understand that it can be very daunting and confusing to know where and how to get started in modelling.Northeast India Super Models can help,we are here to demystify the routes into the industry and to help get you to the position where you can confidently apply to a professional agencies for freelance castings.<br /> Northeast India Super Models can advise you on your model potential,the types of modelling you are suited to and if modelling is something you are serious about, help you to create and build your personal professional model portfolio </h5>
                        <img width="50%" alt="testimonial" class="w-150 h-150 mb-8 object-cover object-center  inline-block border-2 border-gray-200 bg-gray-100 ml-auto mr-auto mt-5" src={QR} />

                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <ImgUpload />
                        <form onSubmit={handleSubmit}>
                            <div class="flex flex-wrap -m-2">

                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                        <input required type="text" id="name" name="name" value={name} onChange={(e) => { setName(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="mobile" class="leading-7 text-sm text-gray-600">Mobile</label>
                                        <input required type="number" id="mobile" name="mobile" value={mobile} onChange={(e) => { setMobile(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="age" class="leading-7 text-sm text-gray-600">Age</label>
                                        <input required type="number" id="age" name="age" value={age} onChange={(e) => { setAge(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>

                                </div>


                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="gender" class="leading-7 text-sm text-gray-600">Gender</label><br />
                                        <select required value={gender}
                                            onChange={(e) => {
                                                const selectedGender = e.target.value;
                                                setGender(selectedGender)
                                            }
                                            }
                                            class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="gender" name="gender" >
                                            <option selected value="select">Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>


                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="address" class="leading-7 text-sm text-gray-600">Address</label>
                                        <textarea required id="address" name="address" value={address} onChange={(e) => { setAddress(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="city" class="leading-7 text-sm text-gray-600">City</label>
                                        <input required type="text" id="city" name="city" value={city} onChange={(e) => { setCity(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="pincode" class="leading-7 text-sm text-gray-600">Pincode</label>
                                        <input required type="text" id="pincode" name="pincode" value={pincode} onChange={(e) => { setPincode(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="country" class="leading-7 text-sm text-gray-600">Country</label>
                                        <input required type="text" id="country" name="country" value={country} onChange={(e) => { setCountry(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>


                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                        <input required type="text" id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="school" class="leading-7 text-sm text-gray-600">School/College Name</label>
                                        <input required type="text" id="school" name="school" value={school} onChange={(e) => { setSchool(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="Father's Name" class="leading-7 text-sm text-gray-600">Father's Name</label>
                                        <input required type="text" id="Father's Name" name="Father's Name" value={fathername} onChange={(e) => { setFathername(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="fatheroccupation" class="leading-7 text-sm text-gray-600">Father's Occupation</label>
                                        <input required type="text" id="fatheroccupation" name="fatheroccupation" value={fatheroccupation} onChange={(e) => { setFatheroccupation(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="fathermob" class="leading-7 text-sm text-gray-600">Father's Mobile no.</label>
                                        <input required type="number" id="fathermob" name="fathermob" value={fathermob} onChange={(e) => { setFathermob(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>


                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="Mother's Name" class="leading-7 text-sm text-gray-600">Mother's Name</label>
                                        <input required type="text" id="Mother's Name" name="Mother's Name" value={mothername} onChange={(e) => { setMothername(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="motheroccupation" class="leading-7 text-sm text-gray-600">Mother's Occupation</label>
                                        <input required type="text" id="motheroccupation" name="motheroccupation" value={motheroccupation} onChange={(e) => { setMotheroccupation(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="mothermob" class="leading-7 text-sm text-gray-600">Mother's Mobile no.</label>
                                        <input required type="number" id="fathermob" name="fathermob" value={mothermob} onChange={(e) => { setMothermob(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="height" class="leading-7 text-sm text-gray-600">Height (Centimeters)</label>
                                        <input required type="text" id="height" name="height" value={height} onChange={(e) => { setHeight(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>

                                </div>



                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="Weight" class="leading-7 text-sm text-gray-600">Weight (Kilograms)</label>
                                        <input required type="number" id="Weight" name="Weight" value={weight} onChange={(e) => { setWeight(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>



                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="Complexion" class="leading-7 text-sm text-gray-600">Complexion</label>
                                        <input required placeholder="e.g : Fair" type="text" id="Complexion" name="Complexion" value={complexion} onChange={(e) => { setComplexion(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="futureGoal" class="leading-7 text-sm text-gray-600">If you get an opportunity to enter into media, which medium you give preference</label><br />
                                        <select value={futuregoal} onChange={(e) => { setFuturegoal(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="futureGoal" name="futureGoal" >
                                            <option selected value="select">Select</option>
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
                                        <input type="text" id="futureExplain" name="futureExplain" value={futureexplain} onChange={(e) => { setFutureexplain(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>


                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="audition" class="leading-7 text-sm text-gray-600">Preferred City of Audition</label><br />
                                        <select value={auditionlocation} onChange={(e) => { setAuditionlocation(e.target.value) }} class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="audition" name="audition" >
                                            <option selected value="select">Select</option>
                                            <option value="Kolkata">Kolkata</option>
                                            <option value="Mumbai">Mumbai</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Goa">Goa</option>

                                        </select>
                                    </div>
                                </div>



                                <div class="p-2 w-full">
                                    <button class="input flex mx-auto text-white border-0 py-2 px-8 focus:outline-none rounded text-lg">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default BecomeModel
