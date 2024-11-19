import React from 'react'
import { Container } from 'react-bootstrap'
import './Aboutme.css'
import AOS from "aos";

export const Aboutme = () => {
    AOS.init({
        duration: 700, // Animation duration
        easing: "ease-out-cubic", // Easing function
        once: false, // Whether animation should happen only once while scrolling down
      });
  return (
    <section id='aboutme' data-aos="fade-up">
        <Container>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laudantium perspiciatis at, aspernatur similique sint quidem voluptas laborum minima veritatis aperiam quis unde! Eaque, quasi veniam laudantium sed nulla accusamus.</p>
        </Container>
    </section>
  )
}
