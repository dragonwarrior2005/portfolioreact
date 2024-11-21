import React from 'react'
import { Container } from 'react-bootstrap'
import './project.css'
import Card from 'react-bootstrap/Card';
import AOS from "aos";



const Projects = () => {
    AOS.init({
        duration: 700, // Animation duration
        easing: "ease-out-cubic", // Easing function
        once: false, // Whether animation should happen only once while scrolling down
      });
  return (
    <section id='projects'>
        <Container>
            <h2 data-aos ="flip-down">My Projects</h2>
            <div className="coffee" data-aos ="fade-left" data-aos-duration ="1000"> 
            <Card style={{ width: '36rem' }} className='card'>
            <a href="https://github.com/dragonwarrior2005/coffee" target='blank'>
            <Card.Img variant="top" src="https://i.postimg.cc/LXQqzKNn/coffee.png" /> </a>
                <Card.Body>
                     <Card.Title>Coffee</Card.Title>
                   
                    </Card.Body>
                    </Card>
                
            </div>
            <div className="counter" data-aos ="fade-right" data-aos-duration ="1000">
            <Card style={{ width: '36rem' }} className='card'>
            <a href="https://github.com/dragonwarrior2005/counter" target='blank'>
            <Card.Img variant="top" src="https://i.postimg.cc/Y2f2Kw1g/counter.webp" /> </a>
                <Card.Body>
                     <Card.Title>Counter Program</Card.Title>
                   
                    </Card.Body>
                    </Card>
                
            </div>
            <div className="loading" data-aos ="fade-left" data-aos-duration ="1000">
            <Card style={{ width: '36rem' }} className='card'>
            <a href="#" target='blank'>
            <Card.Img variant="top" src="https://i.postimg.cc/FH1hLdwg/coming.png" /> </a>
                <Card.Body>
                     <Card.Title>Coming Soon</Card.Title>
                   
                    </Card.Body>
                    </Card>
                
            </div>
        </Container>
    </section>
  )
}

export default Projects