import React from 'react';
import logo from '../../img/logo.png';
import "./nav.css";

import logo2 from '../../img/logo2.png';
import $ from 'jquery'
import { NavLink as Link } from 'react-router-dom'
import { Contrast } from '@mui/icons-material';
function Navbar() {



  return (
    <div>

      <header class="nav body-font">
        <div class="container top-box mx-auto flex-wrap p-0 flex-col md:flex-row items-center">

          <nav class="navbar navbar-expand-lg navbar-light bg-#111827">
            <a class="brand flex title-font font-medium items-center text-white mr-5 mb-4 md:mb-0">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 14c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm11-2c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-6-6h-6v2h2.586l-1.84 1.827c-.788-.52-1.73-.827-2.746-.827-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5c0-1.022-.31-1.97-.836-2.762l1.836-1.824v2.586h2v-6z"/></svg> */}
              <img  style={{ position: 'relative', zIndex: '1' , filter:'contrast(2)'}} width="80" height="80" viewBox="0 0 100 100" src={logo2} />

              <span style={{ textAlign: 'center', color: '#FBBF24' }} class="ml-4 text-xl"><Link to="/"><img width="100" height="100" viewBox="0 0 100 100" src={logo}/></Link></span>

            </a>

            <button class="navbar-toggler ml-auto mr-auto " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
              <svg fill="#FCD34D" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-14v-2h14v2zm0 2h-14v2h14v-2zm0 4h-14v2h14v-2zm3-11v16h-20v-16h20zm2-6h-24v24h24v-24z" /></svg>

            </button>
            <br />
            <div style={{ position: 'relative', zIndex: '1' }} class="collapse navbar-collapse" id="navbarSupportedContent">
              <a class="link nav-link ml-auto mr-auto hover:text-yellow-400"><Link to='/'> Home</Link> </a>
              <a class="link nav-link ml-auto mr-auto  hover:text-yellow-400">  <Link to='/about'>About Us</Link></a>
              <a class="link nav-link ml-auto mr-auto hover:text-yellow-400"><Link to='/we-offer'>We Offer</Link></a>
              <a class="link nav-link ml-auto mr-auto hover:text-yellow-400"><Link to='/portfolio'>Portfolio</Link></a>
              <a class="link nav-link ml-auto mr-auto hover:text-yellow-400"> <Link to='/become-a-model'>Become a Model</Link></a>
              <a class="link nav-link ml-auto mr-auto hover:text-yellow-400"><Link to='/testimonial'>Testimonials</Link></a>
            </div>
            <br />

            <div class="smm inline-flex items-center ml-auto mr-auto  border-0 py-1 px-3 focus:outline-none rounded text-base mb-4 md:mt-0">
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a href="https://www.facebook.com/Dreamland-Film-Production-House-103577562163706" class="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/dreamland_film_production" class="ml-3 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
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
