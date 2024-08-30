const Navbar = () => {



  return (
    <div className='body'>
      <div className='navbar'>
        <img className='navbarLogo' src="/pem-logo.png" alt="pem logo" />
        <a href="/" className='navbarLinks'>Home</a>
        <a href="/about" className='navbarLinks'>About</a>
        <a href="/ministries" className='navbarLinks'>Community</a>
        <a href="/contact" className='navbarLinks'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar