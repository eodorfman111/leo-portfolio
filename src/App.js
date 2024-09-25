// src/App.js
import React, { Suspense, lazy, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeContext, ThemeProviderContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';


const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience'));
const Contact = lazy(() => import('./pages/Contact'));


const lightTheme = {
  body: '#f0f8ff',
  text: '#333',
  navBg: '#89CFF0', 
  navText: '#fff',
  linkHover: '#ff7f50',
  gradient: 'linear-gradient(135deg, #1e90ff 0%, #ff6347 100%)', 
};

const darkTheme = {
  body: '#121212',
  text: '#f4f4f4',
  navBg: '#1f1f1f',
  navText: '#f4f4f4',
  linkHover: '#ff7f50',
  gradient: 'linear-gradient(135deg, #000000 0%, #1e90ff 100%)', 
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.gradient};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: 'Poppins', sans-serif;
    transition: background 0.5s, color 0.5s;
    overflow-x: hidden; 
    height: 100%;
    width: 100%;
  }

  
  #root,
  body,
  html {
    height: 100%;
    width: 100%;
  }
`;


const Main = styled.main`
  padding-top: 80px;
  padding-bottom: 80px; 
  width: 100%;
  min-height: calc(100vh - 160px); 
`;

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Helmet>
        <title>Leo Dorfman | Portfolio</title>
        <meta
          name="description"
          content="Leo Dorfman's professional portfolio showcasing skills, projects, and experiences."
        />
        <meta
          name="keywords"
          content="Leo Dorfman, Portfolio, Computer Science, Projects, Skills"
        />
        <meta name="author" content="Leo Dorfman" />
      </Helmet>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

const App = () => (
  <ThemeProviderContext>
    <AppContent />
  </ThemeProviderContext>
);

export default App;
