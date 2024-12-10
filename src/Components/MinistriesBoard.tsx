import { ministryType } from "../types"

const MinistriesBoard = () => {

  const ministries: Array<ministryType> = [
    {
      name: 'Family',
      description: 'We recognize there is a huge need in the church of this generation to have spiritually healthy families that grow together. PEM wants to be a church that can host those environments of spiritual and communal growth. If you are a husband, wife, or parent desiring to find other families to walk with in faith at PEM, we invite you to be a part of our community of families. Our families meet regularly through our house churches and authentic friendships to fellowship and spur one another to trust Jesus more and more daily. We are always eager to welcome new families into our community so come meet us Sunday!',
      pic: '/family1.jpg'
    },
    {
      name: 'PEMkids',
      description: 'PEMkids is our children’s home for ages 2-11. We desire to create a nurturing, safe, and loving experience each Sunday. We treasure each child that comes through our doors and into our hearts! The goal of our ministry is to teach the children about God’s saving grace and the Gospel of Jesus Christ in an age-appropriate manner through songs, crafts, activities, and lessons that point to our Savior.',
      pic: '/PEMKids.jpg'
    },
    {
      name: 'Young Adult',
      description: 'The PEM young adult community seeks to serve others above ourselves by constantly combating the temptations of individualism and seeking to uplift the body of believers in community and finding our worth in Jesus. We see the great potential of being the hands and feet of PEM, by having an abundance of resources to serve the church and community. The Lord has blessed our ministry with a big and continually growing group of us who not yet have the worries of child-rearing and are no longer concerned about being old enough to have a drink. PEM ‘young’ adults are constantly searching for new opportunities for the Gospel to break through in our workplaces, neighborhoods and friend groups, learning to walk as a disciple of Christ and learning how to disciple each other.',
      pic: '/YA.jpg'
    },
    {
      name: 'Emmaus',
      description: 'Emmaus is PEM’s initiative to focus on Gospel-centered growth and community building on the college campus. Named after the Road to Emmaus (Luke 24), Emmaus aims to support students’ spiritual journeys amidst their varying walks of life. Whether just entering college or transitioning into young adulthood, we hope that Emmaus will serve as an accessible community that mutually strives to grow in our understanding of the Christian faith and spirituality in a college environment.',
      pic: '/Emmaus2.jpg'
    },
  ]

  return (
    <div className='ministry-board'>
      {ministries.map((ministry: ministryType) => (
        // change to hover description type card later
        <div className='ministry-card'>
          <img src={ministry.pic} alt="ministry picture" />
          <div className="overlay">
            <h1>{ministry.name}</h1>
            <p>{ministry.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MinistriesBoard