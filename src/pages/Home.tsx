import { lazy } from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer'
const Infoboard = lazy(() => import('../Components/infoboard'));
const Motto = lazy(() => import('../Components/motto'));
const WhoWeAre = lazy(() => import('../Components/whoWeAre'));
import '../App.css'
import MinistriesBoard from '../Components/MinistriesBoard';


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
      <div className='whoWeAre fade-in'>
            <div className='whoWeAreContent'>
                <h2 className='whoWeAreText'>WHO WE ARE</h2>
                <p className="whoWeAreText">
                    There is one word that has made us different from any other church, <br />
                    and that is “PEMily.”  Whether you come from a Christian background <br />
                    or you’re skeptical about the church, we believe that you have a home <br />
                    and family at PEM. We invite you to worship with us and to feel the <br />
                    love of our Father, to know the grace of Jesus Christ, and to experience  <br />
                    the fellowship of the Holy Spirit.
                </p>
            </div>
        </div>

      <MinistriesBoard />
      <Footer />
    </div>
  )
}

export default Home
