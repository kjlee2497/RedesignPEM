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
      <div className='about-container'>
        <h2>Meet Our Staff</h2>
        <StaffCarousal />
        <div className="beliefsContent">
        <h2>Beliefs</h2>
        <h3>
          We believe that Jesus is the main purpose and priority of life, and the lens through Whom we know and understand all things.
        </h3>
          We believe there is one God eternally existent as three Persons: God the Father, God the Son, and God the Holy Spirit. This tells us that for all of eternity, He has existed in communion, fellowship, and love with, and in, Himself. And because He is a God of love and community, He created this world as a place of love and community.
          <br />
          <br />
          But this world of love and community was broken when the first man and woman chose not to listen to their Creator, but displaced God from their hearts, and sinned. We lost the very thing we were created for – the intimate fellowship and community with our God – and would have lost it forever had not our Maker graciously intervened in our lives.
          <br />
          <br />

          Jesus Christ, the Second Person of the Trinity, is that intervention. In the incarnation, God became man and took upon a finite, human nature while still fully divine. He perfectly obeyed His Father and took our place and died on the cross, taking on the full wrath of God for our sins. Three days later, Jesus resurrected and defeated both the tomb and death.
          <br />
          <br />

          Romans 10:9 tells us that if we confess with our mouth that Jesus is Lord, and if you BELIEVE in your heart that God raised Him from the dead, you WILL be saved! That’s it! In Jesus Christ, we can have the very thing we lost in the beginning of Creation – the intimacy and fellowship and love of God, our Father.
          <br />
          <br />

          In fact, we not only gain all of this, but we gain something we did not have before: adoption. Family. A new status and identity. Through faith in Jesus Christ, you become both children of God and brothers and sisters with all those who also profess faith in Him. And it’s in this family that God blesses us with the Holy Spirit to participate and to perpetuate in the revealing of all the sons and daughters of God. We gain and new calling and a new family, all because of Jesus.
          <br />
          <br />

          This does not mean that we will be exempt from the lingering effects of sin in this world. No. We are called to stand together against the injustices of this world, to heal the sick and the broken, and to love and to invite all those who are lost in faith. But the Bible promises that one day, sin will be eradicated and God will bring a new Heaven and new Earth down to us. All those who put their faith in Jesus will rise up again in eternal life and we will forever share in the love and community of our triune God.
          <br />
          <br />

          This is the message of the Gospel – the Good News for this world. As Christians, we are commissioned to share this message with those both near and far so that others can come to know our God. It is a message full of grace, full of truth, and full of love, and we are excited at PEM to invite you into our PEMily and to worship with our God.
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About