// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Heading = styled.h2`
  color: #ff7f50;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const ProjectCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  width: 300px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  margin-top: 0;
  color: #333;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
`;

const ProjectDescription = styled.p`
  color: #555;
`;

const ProjectLink = styled.a`
  color: #ff7f50;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  const projects = [
    {
      name: 'VolleyMeet',
      description: 'A full-stack web application built with React.js and Firebase, facilitating event organization and real-time updates for beach volleyball enthusiasts.',
      link: 'https://volleymeet.netlify.app/',
    },
    {
      name: 'Brawl Stars Stats Application',
      description: 'A real-time stats application using Flask and the Brawl Stars API, providing players with up-to-date performance metrics and game insights.',
      link: 'https://shorturl.at/b9OeP',
    },
    
  ];

  return (
    <ProjectsSection>
      <Heading>Projects</Heading>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
