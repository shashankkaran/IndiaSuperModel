import React from 'react';
import logo from '../../img/logo.png';
import "./nav.css";
import { NavLink as Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>

      <header class="nav body-font">
        <div class="container top-box mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="brand flex title-font font-medium items-center text-white mr-5 mb-4 md:mb-0">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 14c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm11-2c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-6-6h-6v2h2.586l-1.84 1.827c-.788-.52-1.73-.827-2.746-.827-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5c0-1.022-.31-1.97-.836-2.762l1.836-1.824v2.586h2v-6z"/></svg> */}
            <img style={{}} width="80" height="80" viewBox="0 0 100 100" src={logo} />

            <span style={{textAlign:'center', color: '#FBBF24' }} class="ml-3 text-xl"><Link to="/">Northeast India <br class="break"/>SuperModel</Link></span>
          </a>
          <nav class="onav mb-5 md:ml-9 md:mr-auto flex flex-wrap items-center text-base justify-center">

            <a class="link mr-4 hover:text-yellow-400"><Link to='/'> Home</Link> </a>
            <a class="link mr-4 hover:text-yellow-400">  <Link to='/about'>About Us</Link></a>
            <a class="link mr-4 hover:text-yellow-400"><Link to='/we-offer'>We Offer</Link></a>
            <a class="link mr-4 hover:text-yellow-400"><Link to='/portfolio'>Portfolio</Link></a>
            <a class="link mr-4 hover:text-yellow-400"> <Link to='/become-a-model'>Become a Model</Link></a>
            <a class="link mr-4 hover:text-yellow-400"><Link to='/testimonial'>Testimonials</Link></a>



            <div class="smm inline-flex items-center  border-0 py-1 px-3 focus:outline-none rounded text-base mb-4 md:mt-0">
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a class="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>

            </div>
          </nav>

        </div>
      </header>
    </div>
  )
}

export default Navbar
