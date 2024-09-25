import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import leoImage from '../assets/leosmile.png';
import handImage from '../assets/hand.png';

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex: 1;
    margin-right: 4rem;
    margin-bottom: 0;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const HandImage = styled(motion.img)`
  width: 60px;
  height: auto;
  position: absolute;
  top: 0;
  right: 0;
  transform-origin: bottom center;

  @media (min-width: 768px) {
    width: 80px;
  }
`;

const ContentContainer = styled.div`
  flex: 2;
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
`;

const Heading = styled.h2`
  color: #ff7f50;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const About = () => (
  <AboutSection>
    <ImageContainer>
      <ProfileImage src={leoImage} alt="Leo Dorfman" />
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