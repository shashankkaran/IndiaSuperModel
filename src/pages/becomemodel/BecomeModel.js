import React from 'react'
import './bam.css'
function BecomeModel() {
    return (
        <div>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-#FBBF24">BECOME A MODEL</h1>
                        <h5 class="lg:w-2/3 mx-auto leading-relaxed text-white text-base">We understand that it can be very daunting and confusing to know where and how to get started in modelling.Northeast India Super Models can help,we are here to demystify the routes into the industry and to help get you to the position where you can confidently apply to a professional agencies for freelance castings.<br /> Northeast India Super Models can advise you on your model potential,the types of modelling you are suited to and if modelling is something you are serious about, help you to create and build your personal professional model portfolio </h5>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="mobile" class="leading-7 text-sm text-gray-600">Mobile</label>
                                    <input type="text" id="mobile" name="mobile" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="gender" class="leading-7 text-sm text-gray-600">Gender</label>
                                    <input type="text" id="gender" name="gender" class=" w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" disabled placeholder="Female" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="age" class="leading-7 text-sm text-gray-600">Age</label>
                                    <input type="text" id="age" name="age" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="city" class="leading-7 text-sm text-gray-600">City</label>
                                    <input type="text" id="city" name="city" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>


                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="pincode" class="leading-7 text-sm text-gray-600">Pincode</label>
                                    <input type="pincode" id="pincode" name="pincode" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="address" class="leading-7 text-sm text-gray-600">Address</label>
                                    <textarea id="message" name="message" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <button class="input flex mx-auto text-white border-0 py-2 px-8 focus:outline-none rounded text-lg">Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BecomeModel
