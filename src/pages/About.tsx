import Navbar from '../Components/navbar'
import Footer from '../Components/footer'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const About = () => {


  return (


    <div className="main">
      <Navbar />

      {/* 
  For swiper, use a map method to create a slide for each part of an array of objects (headshots and descriptions)
  look into documentation for ISACTIVE boolean
  use this boolean to get the aesthetics you want
*/}
      <div className='swiper-container'>
        <h2>Meet Our Staff</h2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><img src="christian headshot.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="christian headshot.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="christian headshot.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="christian headshot.jpg" alt="" /></SwiperSlide>
        </Swiper>
      </div>

      <Footer />
    </div>
  )
}

export default About