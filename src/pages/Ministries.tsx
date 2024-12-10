import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import MinistriesBoard from '../Components/MinistriesBoard'

const Ministries = () => {
  return (
    <div>
      <Navbar />

      <div className="ministries-banner fade-in">
        <div className='ministriesLogo'>
        <img src="banner icon 2.png" alt="ministries icon" />
        <h1>Ministries</h1>
        <span>
          <p>Come as you are and</p>
          <p className="belong">belong</p>
        </span>
        </div>
      </div>

      <div className='ministries-content fade-in'>
        <div className="houseChurch">
          <h2>House Church</h2>
          <p>
            House Church is PEM’s formation of smaller groups and communities that are just as important as our larger Sunday gatherings. It is comprised of people in varying stages of faith and belief, devoted to the development of Christ-likeness within one another. No group is the same, and we celebrate the unique qualities, of every group as each are encouraged to reflect and pursue their own visions and missions. The model is taken from the early churches in Acts 2:42-47. As we gather in homes and break bread with one another, we share our stories, study the Word of God and walk out our faith.
            <br />
            <br />
            Our ultimate goal and vision is to love God, love one another and love the world as a community, working through all the brokenness and imperfections in each other’s lives. House Church is meant to be more than a weekly meeting. We see each house church as a family unit, which works through the messiness of life together, learns to love God and His truth, and invites the unchurched into our inner circles.
            <br />
            <br />
            We believe we are to be servants, just as Jesus served us on the cross. Every House Church is aimed to serve one another, the church, our community, and ‘the least of these’ (Matthew 25:31-46). In that way we can be missionaries as the Holy Spirit empowers and equips us to proclaim the good news of Jesus to each other, and to the world. Being part of a House church reminds us that we are not alone in these endeavors, but that we have brothers and sisters around us that go with us.
            <br />
            <br />
            Our House Churches are divided into three types: Family, Young Adult (Post-College), and Emmaus (College). We invite you to get more information and hopefully join one of our House Churches!
          </p>

          <MinistriesBoard />

        </div>
      </div>
      <Footer />
    </div>)
}

export default Ministries