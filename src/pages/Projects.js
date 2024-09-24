// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  background-color: ${({ theme }) => theme.body};
  padding: 2rem;
  border-radius: 8px;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const ProjectCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 8px;
  width: 300px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  margin-top: 0;
  color: ${({ theme }) => theme.text};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text};
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.linkHover};
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  const projects = [
    {
      name: 'VolleyMeet',
      description: 'Full-stack web application using React.js and Firebase.',
      link: 'https://volleymeet.netlify.app/',
    },
    {
      name: 'Brawl Stars Stats Application',
      description: 'Real-time stats app using Flask and Brawl Stars API.',
      link: 'https://shorturl.at/b9OeP',
    },
    // Add more projects as needed
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
