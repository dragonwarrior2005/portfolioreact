import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Hero.css"
import Slider from 'react-slick'
import AOS from "aos";

export const Hero = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 1000,
        arrows: false,
        cssEase: "linear"
      };
      AOS.init({
        duration: 700, // Animation duration
        easing: "ease-out-cubic", // Easing function
        once: false, // Whether animation should happen only once while scrolling down
      });
      
  return (
    <section id="home">
        <Container>
            <Row>
                <Col lg={6} className='introduction' >
                <div className="intro" data-aos="fade-up-right">
                    <h1>Hi, I am <span>Taysir</span></h1>
                    <p>A speedcuber, scenic photographer and future front end developer</p>
                </div>
                </Col>
                <Col lg={6} data-aos="fade-down-left">
                
                <Slider {...settings}> 
                <div className="picture" >
                <img src="https://i.postimg.cc/RZWV19Qr/myself1.jpg" alt="" />     
                </div>
                <div className="picture">
                    <img src="https://i.postimg.cc/MHzrx6Kv/myself3.jpg" alt="" />
                </div>

                </Slider>
                
                </Col>
            </Row>
       </Container>
    </section>
  )
}
