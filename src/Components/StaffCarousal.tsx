import { staffType } from "../types";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const StaffCarousal = () => {

    const pemStaff: Array<staffType> = [
        {
            name: 'Don Lee',
            position: 'Lead Pastor',
            pic: '/PEMStaff/don-hs.jpg'
        },
        {
            name: 'Jong Dae Lee',
            position: 'Young Adult Pastor',
            pic: '/PEMStaff/dae-hs.jpg',
        },
        {
            name: 'Diana Lee',
            position: `Children's Pastor`,
            pic: '/PEMStaff/di-hs.jpg',
        },
        {
            name: 'Danny Hahn',
            position: 'College Pastor',
            pic: '/PEMStaff/danny-hs.jpg',
        },
        {
            name: 'Christian Yi',
            position: 'Worship Director',
            pic: '/PEMStaff/christian-hs.jpg',
        },
        {
            name: 'Don Lee',
            position: 'Lead Pastor',
            pic: '/PEMStaff/don-hs.jpg'
        },
        {
            name: 'Jong Dae Lee',
            position: 'Young Adult Pastor',
            pic: '/PEMStaff/dae-hs.jpg',
        },
        {
            name: 'Diana Lee',
            position: `Children's Pastor`,
            pic: '/PEMStaff/di-hs.jpg',
        },
        {
            name: 'Danny Hahn',
            position: 'College Pastor',
            pic: '/PEMStaff/danny-hs.jpg',
        },
        {
            name: 'Christian Yi',
            position: 'Worship Director',
            pic: '/PEMStaff/christian-hs.jpg',
        },
    ];



    return (
        <div className='carousal-container'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                centeredSlides={true}
                spaceBetween={0}
                initialSlide={0}
                slidesPerView={5}
                navigation
                loop={true}
                freeMode={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                {/* 
  <img className="carousalImg" src={staff.pic} alt="staff picture" />

                */}

                {pemStaff.map((staff: staffType) => (
                    <SwiperSlide>
                        {({ isActive, isNext, isPrev }) => (
                                isActive ?
                                    <div className="carousal-slide">
                                        <img className="carousalImg slideActive" src={staff.pic} alt="staff picture" />
                                        <h2>{staff.name}</h2>
                                        <h3>{staff.position}</h3>
                                    </div>
                                    :
                                    (isPrev || isNext ? 
                                        <img className="carousalImg carousal-next" src={staff.pic} alt="staff picture" />
                                        :
                                        <img className="carousalImg" src={staff.pic} alt="staff picture" />
                                    )
                        )}
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    )
}

export default StaffCarousal