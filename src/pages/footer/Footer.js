import React from 'react'
import '../becomemodel/bam.css'
import './footer.css'
import logo from '../../img/logo.png'
import logo2 from '../../img/logo2.png'
import $ from 'jquery'

import {  NavLink as Link }  from 'react-router-dom'
function Footer() {




    return (
        <div>
<footer  class="text-gray-600 bg-gray-800 body-font">
  <hr style={{'background-color':'yellow'}}/>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact Us</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">+91 70746 02135</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">+91 93390 73045</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">6th Mile Tadong Gangtok Sikkim 737102</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Email:connect@dreamland<br/>filmproductionhouse.com</a>
          </li>
          <li>
            {/* <a class="text-gray-600 hover:text-gray-800">Fourth Link</a> */}
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Quick Links</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800"><Link to='/'>Home</Link></a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800"><Link to='/about'>About Us</Link></a>
          </li>
          <li>
            {/* <a class="text-gray-600 hover:text-gray-800"><Link to='we-offer'>We Offer</Link></a> */}
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800"><Link to="portfolio">Portfolio</Link></a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Quick Links</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800"><Link to='become-a-model'>Become a Model</Link></a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800"><Link to='testimonial'>Testimonials</Link></a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Blogs</a>
          </li>
          <li>
            {/* <a class="text-gray-600 hover:text-gray-800"><Link to='portfolio-admin'>Admin</Link></a> */}
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label for="footer-field" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="text" id="footer-field" name="footer-field" class="input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button class="input lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mt-3">Subscribe</button>
        </div>
        <p class="text-gray-500 text-sm mt-2 md:text-left text-center">
          <br class="lg:block hidden "/>Subscribe to our newsletter for latest updates
        </p>
      </div>
    </div>
  </div>
  <div class="bg-gray-900 pt-0">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img class="img p-1" width="10%" src={logo2}/>
       <img class="img p-1 " width="10%" src={logo}/>
      
      <p style={{fontSize:'smaller',textAlign:'center'}} class="text-sm pl-2 text-gray-500 sm:ml-5 sm:mt-0 mt-4"> © 2021 northeast india supermodel
        {/* <a href="/" rel="noopener noreferrer" class="text-gray-600 ml-1" ></a> */}
      </p>
      </a>
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
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              
        </a>
      </span>
    </div>
  </div>
</footer>
        </div>
    )
}

export default Footer
