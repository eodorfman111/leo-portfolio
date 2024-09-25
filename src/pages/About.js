// src/pages/About.js
import React from 'react';
import styled from 'styled-components';
import leoImage from '../assets/leo.png'; 

const AboutSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 600px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const ContentContainer = styled.div`
  flex: 2;
  min-width: 300px;
  color: ${({ theme }) => theme.text};
`;

const Heading = styled.h2`
  color: #ff7f50; /* Coral color */
  margin-bottom: 1rem;
  text-align: left;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SubHeading = styled.h3`
  color: #ff7f50; /* Coral color */
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  color: ${({ theme }) => theme.text};
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const About = () => (
  <AboutSection>
    <ImageContainer>
      <ProfileImage src={leoImage} alt="Leo Dorfman" />
    </ImageContainer>
    <ContentContainer>
      <Heading>About Me</Heading>
      <Paragraph>
        Hello! I'm Leo Dorfman, originally from Miami, Florida. I began my journey at the New World School of the Arts, where I honed my skills in singing. However, a spark of curiosity led me to the world of technology. Encouraged by my brother and sister, who share a deep passion for computer science, I embarked on a path that seamlessly blends creativity with technical prowess.
      </Paragraph>
      <Paragraph>
        Fast forward a few years, and I'm now a dedicated Computer Science student at the University of Florida, crafting my own portfolio and diving deep into software development. My experiences have equipped me with a strong foundation in various programming languages and development methodologies.
      </Paragraph>
      <Paragraph>
        Looking ahead, I aspire to create impactful startups or contribute to innovative projects at leading tech companies as a Software Engineer. I am eager to leverage my skills to solve real-world problems and drive technological advancements.
      </Paragraph>
      <SubHeading>Education</SubHeading>
      <List>
        <li>
          <strong>Bachelor of Science in Computer Science</strong>, University of Florida (Expected: June 2027) - GPA: 4.00/4.00
        </li>
        <li>
          <strong>New World School of the Arts</strong>, Miami, FL (August 2019 – June 2023) - GPA: 5.00/5.00
        </li>
      </List>
      <SubHeading>Skills</SubHeading>
      <List>
        <li><strong>Programming Languages:</strong> Python, C++, Java, C, JavaScript (React.js)</li>
        <li><strong>Software Development:</strong> Agile Methodologies, Containerization (Docker), CI/CD Pipelines</li>
        <li><strong>Tools & Technologies:</strong> Git, GitHub, CMake, Firebase, REST APIs</li>
        <li><strong>Protocols:</strong> I2C, SPI</li>
        <li><strong>Languages:</strong> English (Fluent), Spanish (Intermediate)</li>
      </List>
    </ContentContainer>
  </AboutSection>
);

export default About;
