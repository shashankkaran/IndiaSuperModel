import React from 'react'
import { useEffect, useState } from "react";
// import Navbar from "../navbar/Navbar"
import x6 from "../../img/m6.jpg";
import x5 from "../../img/m5.png";

import x4 from "../../img/m4.png";
import x3 from "../../img/m3.png";
import x2 from "../../img/m2.png";
import x1 from "../../img/m1.png";
import csel1 from "../../img/m1.jpeg";
import csel2 from "../../img/m2.jpg";
import csel3 from "../../img/m3.jpg";
import './home.css';
import Sliderr from '../slider/Sliderr';
import Aos from "aos";

function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])


  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 500,
    });
  }, []);
  const anime = ["fade-right", "fade-left", "flip-up", "flip-down"];


  return (
    <div className="App">


      <a href="https://instagram.com/northeast_india_supermodel?utm_medium=copy_link"><div id="parallax" style={{ transform: `translateY(${offsetY * 0.0}px)` }} className='con con1'></div></a>


      <div style={{ transform: `translateY(${offsetY * -0.0}px)` }} className='con con2'>

        <section class="text-gray-400 bg-gray-900 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div data-aos={anime[0]} class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 ">WE OFFER</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-white">We understand that our role is to cause,create,initiate and BRING TO LIFE YOUR DESIRED IMPRESSION. Over the years,we have formed relationships with a diverse and vast clientele. We now create solutions and trends</p>
            </div>
            <div class="flex flex-wrap -m-4">


              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img data-aos="zoom-in-right" alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={x1} />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">The 400 Blows</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-out" class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={x2} />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">The 400 Blows</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  </div>
                </div>
              </div>







              <div data-aos="zoom-in-left" class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={x3} />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">The 400 Blows</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in-right" class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={x4} />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">Neptune</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={x5} />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">Holden Caulfield</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in-left" class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={x6} />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">Alper Kamu</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>

   

      <div className='con con3'>
        

        <div data-aos="zoom-in"  id="carouselExampleControls" class="mt-5 mb-5 carousel slide" data-ride="carousel">
        <svg fill="yellow" xmlns="http://www.w3.org/2000/svg" width="320" height="200" viewBox="0 0 24 24"><path d="M3 16l-3-10 7.104 4 4.896-8 4.896 8 7.104-4-3 10h-18zm0 2v4h18v-4h-18z"/></svg>
         <h1 style={{textAlign:'center'}} class="mt-2 pb-4"> This Week Top 3 </h1>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block csel" src={csel1} alt="First slide" />

            </div>
            <div class="carousel-item">
              <img class="d-block csel" src={csel2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block csel" src={csel3} alt="Third slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>


      </div>




      <div className='con con4'><Sliderr /></div>


    </div>
  );
}

export default Home
