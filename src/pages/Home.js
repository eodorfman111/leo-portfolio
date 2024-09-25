import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import leoImage from '../assets/leo.png';

const HomeContainer = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  width: 100%;
  padding: 2rem;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
`;

const LeoImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectsButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e5533d;
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
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </ImageContainer>
    </HomeContainer>
  );
};

export default Home;