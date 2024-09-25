import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Heading = styled.h2`
  color: #ff7f50;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2.5rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-content: center;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.body};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h3`
  margin-top: 0;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text};
  flex-grow: 1;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  color: #ff7f50;
  font-weight: bold;
  text-decoration: none;
  align-self: flex-start;

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
    // Add more projects here
  ];

  return (
    <ProjectsSection>
      <Heading>Projects</Heading>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
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