import React from 'react'
import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar"
import x4 from "../../img/x4.gif";
import x3 from "../../img/x3.jpg";
import x2 from "../../img/x2.jpg";
import x1 from "../../img/x1.jpg";
import csel1 from "../../img/csel1.jpg";
import csel2 from "../../img/csel2.jpg";
import csel3 from "../../img/csel3.jpg";
import './home.css';




function Home() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    useEffect(() => {
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    }, [])
  
  
  
    return (
      <div className="App">
  
       
        <a href="https://instagram.com/northeast_india_supermodel?utm_medium=copy_link"><div id="parallax" style={{ transform: `translateY(${offsetY * 0.2}px)` }} className='con con1'></div></a>
  
  
        <div style={{ transform: `translateY(${offsetY * -0.4}px)` }} className='con con2'>
  
          <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">WE OFFER</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We understand that our role is to cause , create, initiate and BRING TO LIFE YOUR DESIRED IMPRESSION. Over the yrars, we have formed relationships with a diverse and vast clientele.we now create solutions and trends</p>
              </div>
              <div class="flex flex-wrap -m-4">
  
  
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={x2} />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-white mb-3">The 400 Blows</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={x2} />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-white mb-3">The 400 Blows</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
  
  
  
  
  
  
  
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={x2} />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-white mb-3">The 400 Blows</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={x3} />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-white mb-3">Neptune</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={x4} />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-white mb-3">Holden Caulfield</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={x1} />
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
  
  
  
        <div style={{ transform: `translateY(${offsetY * -0.1}px)` }} className='con con3'>
  
  
          <div  style={{ transform: `translateY(${offsetY * -0.05}px)` }} id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img width="600vh" class="d-block csel" src={csel1} alt="First slide" />
              </div>
              <div class="carousel-item">
                <img  width="600vh" class="d-block csel" src={csel2} alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img  width="600vh" class="d-block csel" src={csel3} alt="Third slide" />
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
  
  
  
  
        <div className='con con4'>Div4</div>
  
  
      </div>
    );
}

export default Home
