import Footer from '../Components/footer'
import Infoboard from '../Components/infoboard'
import Motto from '../Components/motto'
import Navbar from '../Components/navbar'
import WhoWeAre from '../Components/whoWeAre'
import '../App.css'


function Home() {


  return (
    <div className='main'>

      <Navbar />
      <div>
        <video className='bannerVid' autoPlay loop muted>
          <source src='/bannervid.mp4' />

        </video>
        <div className='bannerContent'>
          <div className='tagLine1'>
            <span className='tagGod'>Loving God, </span>
            <span className='tagOther'>each other,</span>
          </div>
          <span className='tagWorld'>and the world.</span>
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
