import "./home.css";
import TypeAnimation from 'react-type-animation';
import {tada } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import React from "react";
import {Row, Col, Image} from 'react-bootstrap';
import CardData from "./card/card";
import projects from "./projects.js";
import profile from "./images/profile.jpeg";
import Footer from "./footer/Footer";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail, SiCplusplus, SiJirasoftware} from "react-icons/si";
import {FaPython, FaSwift, FaHtml5} from "react-icons/fa";
import {motion} from  "framer-motion";
import { useInView } from "react-intersection-observer";
import background from "./images/background.png";

const styles = {
    tada: {
      animation: 'x 1s',
      animationName: Radium.keyframes(tada, 'tada')
    }
  }


function Home() {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
    return (
        
        <div className="home">
    
            <div className="intro p-5 d-flex flex-column bg-danger text-light align-items-center">
              
            <StyleRoot>
                <div style={styles.tada}>
                  <h1 className="name display-1 mt-5">Sergio Acosta</h1>
            </div>
            </StyleRoot>
            <Image style={{width: 200, padding: 20}} src={profile} roundedCircle /> 

            <div className="p-5">
            <TypeAnimation
      cursor={true}
      sequence={['Hi My name is Sergio Acosta', 1000, 'Thank you for visiting my website', 1000]}
      wrapper="h2"
    />
         </div>
            </div>
            <div className="p-2 bg-dark text-light ">
                                
                    
            <motion.div ref={titleRef} animate={{ scale: titleInView ? 1 : 0 }} transition={{ duration: 0.5 }} className="row m-2 p-3 border border-light">

                <div className="col-md-6">
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
        </div>
        <div className="profile-img col-md-6">
        
        </div>

                </motion.div>
                
                <div className="p-4">
                  <h1>Technical Skills</h1>
                  <h2 className="pb-4">Languages</h2>
                  <FaPython size="5rem"></FaPython>

                  <FaSwift size="5rem"></FaSwift>
                  <FaHtml5 size="5rem"></FaHtml5>
                  <SiCplusplus size="5rem"></SiCplusplus>
<h2 className="pt-4 pb-4">Software</h2>
<SiJirasoftware size="5rem"></SiJirasoftware>
<a href="https://university.atlassian.com/student/award/Z4s4XciHRXrADQwXP3XbA57h"  className="link-danger">Jira Fundamentals Badge</a>
                </div>
              <h1 className="p-4">My Projects</h1>
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
            
            <div class="p-5 mb-2 bg-dark text-light">
 
     
                
                <div className="links align-items-center">
          <p>Looking to get in touch?</p>
          <a href="https://github.com/sergio2000">
            <GoMarkGithub size="2.5rem" color="#8CC0DE" />
          </a>
          <a href="https://www.linkedin.com/in/sergioacosta16/">
            <FaLinkedin size="2.5rem" color="#8CC0DE" />
          </a>
          <a href="https://github.com/sergio2000">
            <FaTwitter size="2.5rem" color="#8CC0DE" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:sergioacosta184@gmail.com"
          >
            <SiGmail size="2.5rem" color="#8CC0DE" />
          </a>
        </div>
            </div>
            
               <Footer></Footer> 
        </div>
    );
}
export default Home;