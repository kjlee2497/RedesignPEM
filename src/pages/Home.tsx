import { lazy } from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer'
const Infoboard = lazy(() => import('../Components/infoboard'));
const Motto = lazy(() => import('../Components/motto'));
const WhoWeAre = lazy(() => import('../Components/whoWeAre'));
import '../App.css'


function Home() {


  return (
    <div className='main'>

      <Navbar />
      <div>
        <video className='bannerVid fade-in' autoPlay loop muted>
          <source src='/bannervid.mp4' />

        </video>
        <div className='bannerContent fade-in'>
          <div className='tagLine'>
            <span className='tagGod'>Loving God, </span>
            <span className='tagOther'>each other,</span>
          </div>
          <span className='tagWorld tagLine'>and the world.</span>
          <div className='tagButtons'>
            <button className='button'>Join In Person</button>
            <button className='button'>Join Online</button>
          </div>
        </div>
      </div>

      <Motto />
      <WhoWeAre />
      <Infoboard />
      <Footer />
    </div>
  )
}

export default Home
