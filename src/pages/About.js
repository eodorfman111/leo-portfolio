// src/pages/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import leoImage from '../assets/leosmile.png'; // Updated image path
import handImage from '../assets/hand.png'; // Ensure you have a 'hand.png' in src/assets

const AboutSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: -20rem 0rem;
  gap: 6rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  top: 0;
  position: relative; 

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const ImageContainer = styled.div`
  flex: 3;
  min-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 
`;

const ProfileImage = styled.img`
  width: 600px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative; 
  top: -200px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 200px;
    top: -10px;  
  }
`;


const HandImage = styled(motion.img)`
  width: 150px;
  height: auto;
  position: absolute;
  top: -20px; 
  right: 500px;
  transform-origin: bottom center; 
 
  @media (max-width: 768px) {
    right: -30px;
    width: 100px;
  }
`;

const ContentContainer = styled.div`
  flex: 2;
  min-width: 300px;
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
`;

const Heading = styled.h2`
  color: #ff7f50;  
  margin-bottom: 1rem;
  text-align: left;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  font-size: 2.5rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const About = () => (
  <AboutSection>
    <ImageContainer>
      <ProfileImage src={leoImage} alt="Leo Dorfman" />
      {}
      <HandImage
        src={handImage}
        alt="Waving Hand"
        animate={{
          rotate: [0, -20, 20, -20, 20, 0],
        }}
        transition={{
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut",
        }}
      />
    </ImageContainer>
    <ContentContainer>
      <Heading>About Me</Heading>
      <Paragraph>
        Hi there! I'm Leo Dorfman, from the sunny shores of Miami, Florida. My artistic journey began at the New World School of the Arts, where I immersed myself in the world of singing and performance. However, alongside my passion for the arts, I found myself increasingly drawn to the dynamic realm of technology.
      </Paragraph>
      <Paragraph>
        My venture into computer science was largely inspired by my siblings, whose enthusiasm for coding was contagious. With their encouragement, I began exploring online platforms like Codecademy and countless YouTube tutorials to build a strong foundation in programming. This self-driven learning path not only honed my technical skills but also ignited a deep-seated passion for creating impactful software solutions.
      </Paragraph>
      <Paragraph>
        Today, as a Computer Science student at the University of Florida, I'm channeling my creativity and technical acumen into developing this very portfolio. My goal is to blend artistic sensibilities with robust software engineering principles to craft applications that are both functional and aesthetically pleasing.
      </Paragraph>
      <Paragraph>
        Looking forward, I'm eager to either launch my own startup or contribute to innovative projects at leading tech companies. I aspire to leverage my skills to solve real-world problems, drive technological advancements, and make a meaningful impact in the tech industry.
      </Paragraph>
    </ContentContainer>
  </AboutSection>
);

export default About;
