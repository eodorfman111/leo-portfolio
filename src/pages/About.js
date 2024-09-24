// src/pages/About.js
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: ${({ theme }) => theme.body};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const SubHeading = styled.h3`
  color: ${({ theme }) => theme.text};
  margin-top: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  color: ${({ theme }) => theme.text};

  li {
    margin-bottom: 0.5rem;
  }
`;

const About = () => (
  <AboutSection>
    <Heading>About Me</Heading>
    <p>
      Hello! I'm Leo Dorfman, a Computer Science student at the University of Florida with a passion for software development and project management.
    </p>
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
  </AboutSection>
);

export default About;
