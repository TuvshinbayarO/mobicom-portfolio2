import React from 'react'
import A from '../Assets/A.jpeg'
import Slider from "react-slick";

const Sliders = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

  return (
    <div className='container mx-auto py-10 sm:py-20'>
      <Slider {...settings}>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <img alt="profile" className="w-32 rounded-full" src={A} />
            </div>
            <div className='flex justify-center items-center'>
                <h3 className="text-2xl text-center font-bold">Мэдээллийн Технологи Эрхэлсэн Дэд Захирал</h3>
            </div>
            <div className="flex justify-center items-center text-center">
              <p className="w-full sm:w-1/2 text-gray-400 font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ducimus nisi culpa eveniet maxime officia tempore laudantium aut accusantium molestiae! Dolorem, quod consequuntur eum odio maxime ad asperiores qui quae.</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <img alt="profile" className="w-32 rounded-full" src={A} />
            </div>
            <div className='flex justify-center items-center'>
                <h3 className="text-2xl text-center font-bold">Мэдээллийн Технологи Эрхэлсэн Дэд Захирал</h3>
            </div>
            <div className="flex justify-center items-center text-center">
              <p className="w-full sm:w-1/2 text-gray-400 font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ducimus nisi culpa eveniet maxime officia tempore laudantium aut accusantium molestiae! Dolorem, quod consequuntur eum odio maxime ad asperiores qui quae.</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <img alt='Profile' className="w-32 rounded-full" src={A} />
            </div>
            <div className='flex justify-center items-center'>
                <h3 className="text-2xl text-center font-bold">Мэдээллийн Технологи Эрхэлсэн Дэд Захирал</h3>
            </div>
            <div className="flex justify-center items-center text-center">
              <p className="w-full sm:w-1/2 text-gray-400 font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ducimus nisi culpa eveniet maxime officia tempore laudantium aut accusantium molestiae! Dolorem, quod consequuntur eum odio maxime ad asperiores qui quae.</p>
            </div>
          </div>
        </Slider>
      </div>
  )
}

export default Sliders