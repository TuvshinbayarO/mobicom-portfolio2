import React, {useState, useEffect, CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import A from './Assets/A.jpeg';
import {FaFacebookF, FaInstagram, FaTwitter, FaGlobe, FaCheckCircle} from 'react-icons/fa'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Logo from './Assets/bg.jpg'
import load from './Assets/logo.png'
import Sliders from "./Component/Slider";
import { ParticlesBackground } from "./Component/ParticlesBackground";

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <div className="w-full h-full overflow-x-hidden bg-mobicom-gray">
       
      {
        loading ? (<div className='h-screen flex justify-center items-center'> <BeatLoader color={'#cd1932'} loading={loading} size={20} /></div>) : ( 
      <div>
      {/* <ParticlesBackground /> */}
      <div style={{backgroundImage: `url(${Logo})`, backgroundPosition: 'center' ,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen px-2'>
          <div className='w-full flex justify-center items-center'>
            <div className='h-full'>
              <h1 className='sm:text-5xl italic font-bold text-white'>Б. Баярмаа</h1>
              <p className='italic sm:text-2xl font-bold text-white'>Мэдээллийн Технологи Эрхэлсэн Дэд Захирал</p>
              <div className='pt-32'>
              <a href="/" className="outline outline-offset-2 outline-1 outline-red-600 hover:bg-red-600 hover:text-white text-white rounded-full font-semibold p-2 sm:p-4 transition-all duration-300">Миний тухай</a>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center space-x-2">
          <div className='flex justify-center items-center w-full'>
            <img alt='profile' className='rounded-full' src={A} />
          </div>
          <div className='flex flex-col space-y-4 text-white'>
            <FaFacebookF className="hover:scale-125 transition-all duration-300" />
            <FaInstagram className="hover:scale-125 transition-all duration-300" />
            <FaTwitter className="hover:scale-125 transition-all duration-300" />
          </div>
          </div>
        </div>
      </div>
      </div>
      <div className='container mx-auto pt-20'>
        <div className='flex justify-between items-center flex-wrap'>
          <div className='flex justify-center items-center space-x-2 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl p-5 rounded-lg'>
            <FaGlobe className='text-5xl' />
            <div className=''>
              <p className='text-2xl font-bold'>Social Marketing</p>
              <p className=' text-gray-600'>It is a long established fact that a reader</p>
            </div>
          </div>
          <div className='flex justify-center items-center space-x-2 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl p-5 rounded-lg'>
            <FaGlobe className='text-5xl' />
            <div className=''>
              <p className='text-2xl font-bold'>Social Marketing</p>
              <p className=' text-gray-600'>It is a long established fact that a reader</p>
            </div>
          </div>
          <div className='flex justify-center items-center space-x-2 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl p-5 rounded-lg'>
            <FaGlobe className='text-5xl' />
            <div className=''>
              <p className='text-2xl font-bold'>Social Marketing</p>
              <p className=' text-gray-600'>It is a long established fact that a reader</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto pt-20'>
        <div className='flex justify-center flex-col sm:flex-row items-center'>
          <div className='flex justify-center items-center w-1/2'>
            <img alt="profile" className='rounded-xl' src={A} />
          </div>
          <div className='w-full px-2 sm:w-1/2'>
            <div className=''>
              <p className='text-2xl text-gray-500 font-semibold'>About me</p>
              <p className='text-3xl w-80 font-bold pt-10'>I'm Professional Digital Marketing having 10 Years Of Experience</p>
              <p className='w-full sm:w-[65%] font-semibold pt-10 text-gray-500'>We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales. Give us a call. </p>
              <div className='flex space-x-2 pt-10 items-center'>
                <FaCheckCircle />
                <p> We provide a revolutionary level of transparency. </p>
              </div>
              <div className='flex space-x-2 pt-2 items-center'>
                <FaCheckCircle />
                <p> We provide a revolutionary level of transparency. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 sm:pt-0" >
      <div className='container mx-auto pt-20'>
        <div className='flex justify-center items-center space-x-0 px-2 sm:space-x-10 flex-col sm:flex-row lg:flex-col lg:space-x-0 xl:flex-row xl:space-x-10'>
          <div className=''>
            <div className='flex space-x-0 space-y-2 sm:space-y-0 sm:space-x-2 flex-col sm:flex-row justify-center items-center'>
              <div className='w-64 h-72 bg-red-500 text-white transition-all duration-300 rounded-xl hover:-translate-y-2 flex flex-col justify-center items-center'>
                <FaFacebookF className='text-5xl' />
                <div className='pt-2'>
                  <h1 className='font-bold text-4xl pl-3'>Data analysis</h1>
                  <p className='text-xl pl-3'>Target your ideal search phrases and get found at the</p>
                </div>
              </div>
              <div className='w-64 h-72 bg-red-500 text-white hover:-translate-y-2 transition-all duration-300 rounded-xl flex flex-col justify-center items-center'>
              <FaFacebookF className='text-5xl' />
                <div className='pt-2'>
                  <h1 className='font-bold text-4xl pl-3'>Data analysis</h1>
                  <p className='text-xl pl-3'>Target your ideal search phrases and get found at the</p>
                </div>
              </div>
            </div>
            <div className='pt-3 flex space-x-0 space-y-2 sm:space-y-0 sm:space-x-2 flex-col sm:flex-row justify-center items-center'>
              <div className='w-64 h-72 bg-red-500 text-white hover:-translate-y-2 transition-all duration-300 rounded-xl flex flex-col justify-center items-center'>
              <FaFacebookF className='text-5xl' />
                <div className='pt-2'>
                  <h1 className='font-bold text-4xl pl-3'>Data analysis</h1>
                  <p className='text-xl pl-3'>Target your ideal search phrases and get found at the</p>
                </div>
              </div>
              <div className='w-64 h-72 bg-red-500 text-white hover:-translate-y-2 transition-all duration-300 rounded-xl flex flex-col justify-center items-center'>
              <FaFacebookF className='text-5xl' />
                <div className='pt-2'>
                  <h1 className='font-bold text-4xl pl-3'>Data analysis</h1>
                  <p className='text-xl pl-3'>Target your ideal search phrases and get found at the</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full sm:w-1/2 flex justify-center items-center pt-2 sm:pt-0 lg:pt-5'>
            <iframe className="rounded-xl" width="629" height="380" src="https://www.youtube.com/embed/pqd5Za-8yps" title="Level up – Б.Баярмаа: Менежментийн арга барилтай холбоотой 9 зөвлөгөө" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      </div>
      <Sliders />
      </div>
      )}
      
    </div>
  );
}

export default App;

// style={{backgroundImage: `url(${Grpa})`, backgroundPosition: 'center' ,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
