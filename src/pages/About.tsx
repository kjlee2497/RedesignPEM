import Navbar from '../Components/navbar'
import Footer from '../Components/footer'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import StaffCarousal from '../Components/StaffCarousal';


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
        <StaffCarousal />

      </div>

      <Footer />
    </div>
  )
}

export default About