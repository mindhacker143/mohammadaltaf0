import React from 'react'

function About() {
  return (
    <section className="about" id="about">

    <h1 className="heading"> about <span> me </span> </h1>
    <h1 className="row-1">
        <div className="image2">
           
        </div>
        <div className="content">
            <h3>Web Developer</h3>
            <p>I am a creative designer and developer, who aims to work with small businesses and marginalized communities 
                to bring their passions to life. I offer both design and development services of web applications or websites!
                I work on builds and maintenance for a variety of client sites for my job during the day, and at night
                 you can also find me doing some freelance work on the side taking on my clients' sites (made in a variety of site
                  builders/platforms), giving them a design-focused revamp,
                 and adding some custom features and functionality to make them shine! </p>
            <div className="box-container">
                <div className="box">
                    <p><span>Phone:</span> 7876637551</p>
                    <p><span>Language:</span> English</p>
                    <p><span>email:</span> mohammadaltaf9418@gmail.com</p>
                    <p><span>Country:</span> India</p>
                </div>
            </div>
            <a href="https://drive.google.com/file/d/1Bky4UZbh2hn1-OHha9oVyqHpD5DxX2GX/view?usp=sharing" className="btn">Download cv</a>
            <a href="#" className="btn">Hire me</a>
        </div>

    </h1>
</section>
  )
}

export default About