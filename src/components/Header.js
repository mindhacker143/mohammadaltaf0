import React from 'react'

function Header() {
  return (
    
    <header>
    <a href="#" className="logo"><span>Mohd.</span> Altaf</a>
    <nav className="navbar">
        <a className="home-active-nav" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#service">Services</a>
        <a href="#">Projects</a>
        <a href="#">Experience</a>
        <a href="#contact">Contact</a>
    </nav>
    <div className="follow">
        <a href="https://www.facebook.com/mohammadaltaf000/" className="fab fa-facebook-f"></a>
        <a href="https://twitter.com/MohdAltaf00" className="fab fa-twitter"></a>
        <a href="https://www.instagram.com/mohd._.altaf/" className="fab fa-instagram"></a>
        <a href="https://www.linkedin.com/in/mohd-altaf-aa47a9228/" className="fab fa-linkedin"></a>
    </div>
</header>

  )
}

export default Header