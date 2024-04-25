import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from './Navbar';
import Places from './Places';
import Footer from './Footer';
import BlogsComp from './BlogComp';
import Img1 from '../Images/travel-cover2 (1).jpg'
import Testimonial from './Testimonial';


const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className=''>
      <Navbar /> 

      <Slider {...settings}>
        <div className=' 2xl:container 2xl:mx-auto mt-[70px]'>
          <div className='relative'>
            <img src="https://poonawallafincorp.com/pfca/assets/blog_banner/blog_banner-banner-image-best-places-for-solo-travel-in-india.jpg" alt="" />
          </div>
          <div className='absolute top-[170px] md:w-[500px] md:block hidden md:ml-10 text-white text-[20px] lg:text-[23px]'>
            <p>Making Memories Everyday; Discovering Mermaids; Discovering Haunted Spots; Running Out of Locations; Travelling With Snacks; Discovering Adventure Ideas ...</p>
            <p className='mt-[30px] lg:block hidden'>Happiness Is Traveling. You'll be happy to be back. Collect Moment. Exploring The World In Comfort. Beauty, Charm, And Adventure.</p>
          </div>
        </div>

        <div className='2xl:container 2xl:mx-auto mt-[70px]'>
          <div className='relative'>
            <img src="https://watermark.lovepik.com/photo/50058/1781.jpg_wh1200.jpg" width={1260} className='lg:h-[450px] md:h-[280px] h-[180px]' alt="" />
          </div>
        </div>

        <div className='2xl:container 2xl:mx-auto mt-[70px]'>
          <div className='relative'>
            <img src="https://wallpapers.com/images/hd/travel-hd-axhrsecphqby11wk.jpg" width={1260} className='lg:h-[450px] md:h-[280px] h-[180px]' alt="" />
          </div>

        </div>
       </Slider>

      <Places />

      <div className='mx-auto xl:w-[1300px]  ' >
        <img src="https://travel-tcj.netlify.app/assets/cover-women-kQ9VNO1p.jpg" alt=""  />
      </div>

      <BlogsComp />

      <div className='container mx-auto mb-9 px-3'>
 
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div>
            <img  src="https://travel-tcj.netlify.app/assets/travelbox-FS0sd5Ll.png" alt="" className='max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover ' /> 
          </div>
          
          <div className='mt-[60px] px-1 md:px-8'>
            <h1 className='text-3xl md:text-4xl font-bold'>Explore all corners of the world with us</h1>

            <p className='text-gray-500 text-sm tracking-wide leading-8 text-justify'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis doloremque in mollitia dicta deleniti molestiae itaque nostrum
            </p>

            <div className='grid grid-cols-2 gap-5'>
              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path></svg>

                  <p>Flight</p>
                </div>
                
                <div className='flex items-center gap-4'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z"></path>
                  </svg>

                  <p>Hotel</p>
                </div>
              </div>
              
              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 96c-81.5 0-163 33.6-221.5 88.3-3.3 3-3.4 8.1-.3 11.4l26.7 27.9c3.1 3.3 8.3 3.4 11.6.3 23.3-21.6 49.9-38.8 79.3-51 33-13.8 68.1-20.7 104.3-20.7s71.3 7 104.3 20.7c29.4 12.3 56 29.4 79.3 51 3.3 3.1 8.5 3 11.6-.3l26.7-27.9c3.1-3.2 3-8.3-.3-11.4C419 129.6 337.5 96 256 96z"></path><path d="M113.2 277.5l28.6 28.3c3.1 3 8 3.2 11.2.3 28.3-25.1 64.6-38.9 102.9-38.9s74.6 13.7 102.9 38.9c3.2 2.9 8.1 2.7 11.2-.3l28.6-28.3c3.3-3.3 3.2-8.6-.3-11.7-37.5-33.9-87.6-54.6-142.5-54.6s-105 20.7-142.5 54.6c-3.3 3.1-3.4 8.4-.1 11.7zM256 324.2c-23.4 0-44.6 9.8-59.4 25.5-3 3.2-2.9 8.1.2 11.2l53.4 52.7c3.2 3.2 8.4 3.2 11.6 0l53.4-52.7c3.1-3.1 3.2-8 .2-11.2-14.8-15.6-36-25.5-59.4-25.5z"></path></svg>

                  <p>WiFi</p>
                </div>

                <div className='flex items-center gap-4'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yello-100 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M384 352H184.36l-41 35-41-35H16v24c0 30.59 21.13 55.51 47.26 56 2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55 8.85-10.69 14.73-24.35 17.16-39.47 13.88-.25 26.35-7.4 35-18.63A61.26 61.26 0 00384 376zm-279-32l38.33 28.19L182 320h202v-8a40.07 40.07 0 00-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0016 312v8h89z"></path><path d="M463.08 96h-74.59l8.92-35.66L442 45l-10-29-62 20-14.49 60H208v32h18.75l1.86 16H236c39 0 73.66 10.9 100.12 31.52A121.9 121.9 0 01371 218.07a124.16 124.16 0 0110.73 32.65 72 72 0 0127.89 90.9A96 96 0 01416 376c0 22.34-7.6 43.63-21.4 59.95a80 80 0 01-31.83 22.95 109.21 109.21 0 01-18.53 33c-1.18 1.42-2.39 2.81-3.63 4.15H416c16 0 23-8 25-23l36.4-345H496V96z"></path></svg>

                  <p>Foods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className=' mx-auto xl:w-[1300px] '>
         <img src={Img1} alt=""  />
      </div>

      <Testimonial/>

      <Footer/>
    </div>
  )
}

export default Home
