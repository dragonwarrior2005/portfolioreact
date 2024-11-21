import React from 'react'
import "./footer.css"
import { Container } from 'react-bootstrap'
import AOS from 'aos'

export const Footer = () => {
    AOS.init({
        duration: 1000, // Animation duration
        easing: "ease-out-cubic", // Easing function
        once: false, // Whether animation should happen only once while scrolling down
      });
  return (
    <section id='footer'>
        <Container>
            <h2 data-aos="flip-up">Contact Me</h2>
            <div className="info" data-aos="flip-down">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">taysir.rahman@gmail.com</a>

            </div>
            
        </Container>
    </section>
  )
}
