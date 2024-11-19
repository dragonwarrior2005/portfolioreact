import React from 'react'
import { Container } from 'react-bootstrap'
import './photography.css'
import AOS from "aos";
import Slider from 'react-slick';


export const Photography = () => {
    
    AOS.init({
        duration: 700, // Animation duration
        easing: "ease-out-cubic", // Easing function
        once: false, // Whether animation should happen only once while scrolling down
      });
  return (
    <section id='photography'>
        <Container>
            <div className="photographyheading" data-aos = "flip-down">
            <h2>Photography</h2>
            </div>
            <div className="photographydescription" data-aos = "flip-up">
                <p>These are some of my <span>best clicks</span> so far
                </p>
            </div>
            <div className="clickbox">
                <div className="clicks"><img src="https://i.postimg.cc/vBG2W8Fb/click1.jpg" alt="" /></div>
                <div className="clicks"><img src="https://i.postimg.cc/vBG2W8Fb/click1.jpg" alt="" /></div>
                <div className="clicks"><img src="https://i.postimg.cc/vBG2W8Fb/click1.jpg" alt="" /></div>

            </div>
                
              
        </Container>
    </section>
  )
}
