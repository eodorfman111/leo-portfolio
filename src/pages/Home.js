// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import leoImage from '../assets/leo.png'; 

const HomeContainer = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%; /* Full height from Main */
  width: 100%;  /* Full width from Main */
  text-align: center;
  flex-direction: row; /* Default to row */
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 1rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const LeoImage = styled(motion.img)`
  width: 600px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #f0f0f0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const ProjectsButton = styled(motion.button)`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #ff6347; /* Tomato color */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e5533d;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleSeeProjects = () => {
    navigate('/projects');
  };

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <TextContainer>
        <Title>Welcome to Leo Dorfman's Portfolio</Title>
        <Subtitle>Enthusiastic Computer Science student skilled in C++, JavaScript (React.js), and Agile methodologies.</Subtitle>
        <ProjectsButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSeeProjects}
        >
          See Projects
        </ProjectsButton>
      </TextContainer>
      <ImageContainer>
        <LeoImage 
          src={leoImage} 
          alt="Leo Dorfman" 
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </ImageContainer>
    </HomeContainer>
  );
};

export default Home;
