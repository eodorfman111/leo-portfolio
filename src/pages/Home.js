// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background-color: ${({ theme }) => theme.body};
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const Home = () => (
  <HomeContainer
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Title>Welcome to Leo Dorfman's Portfolio</Title>
    <Subtitle>Passionate Computer Science student showcasing skills and projects.</Subtitle>
  </HomeContainer>
);

export default Home;
