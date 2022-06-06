import "./home.css";
import Typical from "react-typical";
import { bounce, rollIn, tada } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import React from "react";
import {Row, Col, Image} from 'react-bootstrap';
import CardData from "./card/card";
import projects from "./projects.js";
import profile from "./images/profile.jpeg";
import Footer from "./footer/Footer";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {motion} from  "framer-motion";
import { useInView } from "react-intersection-observer";
import background from "./images/background.png";
const styles = {
    tada: {
      animation: 'x 1s',
      animationName: Radium.keyframes(tada, 'tada')
    }
  }

  var sectionStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: '1600px'
 }
function Home() {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
    return (
        
        <div className="home">
    
            <div style={sectionStyle} className="intro p-5 d-flex flex-column text-dark  align-items-center">
            <StyleRoot>
                <div style={styles.tada}>
            <Image style={{width: 300, padding: 20, }} src={profile} roundedCircle />            
            </div>
            </StyleRoot>
            </div>
            <div className="p-2 bg-dark text-dark ">
                <Row>
  {projects.map((data) => (
    <Col style={{padding: '20px',display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
     <CardData
     image={data.image}
     link={data.link}
project={data.project}
description={data.description}

    />
    </Col>
  ))}
</Row>


            </div>
            
            <div class="p-1 mb-2 bg-light text-dark">
 
                <motion.div ref={titleRef} animate={{ scale: titleInView ? 1 : 0 }} transition={{ duration: 0.5 }} className="about-text-container">
                <h1>About Me</h1>
        <p>
          Hello, welcome to my page! My name is Sergio Acosta and I am a current
          student at
          <a className="school" href="https://www.csusm.edu/">
            {" "}
            California State University San Marcos
          </a>
          .I am currently majoring in Computer Science & Information Systems
          and plan to finish my degree very soon. My dream career is to work as
          a software engineer. I really enjoying coding because I get to
          challenge myself to solve complex problems and have fun while doing
          it. I love being able to help others, so i hope that I can accomplish
          that wherever I bring my skills.
        </p>
                </motion.div>
                
                <div className="links">
          <p>Looking to get in touch?</p>
          <a href="https://github.com/sergio2000">
            <GoMarkGithub size="3rem" color="#8CC0DE" />
          </a>
          <a href="https://www.linkedin.com/in/sergioacosta16/">
            <FaLinkedin size="3rem" color="#8CC0DE" />
          </a>
          <a href="https://github.com/sergio2000">
            <FaTwitter size="3rem" color="#8CC0DE" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:sergioacosta184@gmail.com"
          >
            <SiGmail size="3rem" color="#8CC0DE" />
          </a>
        </div>
            </div>
            
               <Footer></Footer> 
        </div>
    );
}
export default Home;