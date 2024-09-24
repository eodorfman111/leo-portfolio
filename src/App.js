// src/App.js
import React, { Suspense, lazy, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeContext, ThemeProviderContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience'));
const Contact = lazy(() => import('./pages/Contact'));

// Define light and dark themes
const lightTheme = {
  body: '#f4f4f4',
  text: '#333',
  navBg: '#333',
  navText: '#fff',
  linkHover: '#ff6347',
};

const darkTheme = {
  body: '#121212',
  text: '#f4f4f4',
  navBg: '#1f1f1f',
  navText: '#f4f4f4',
  linkHover: '#ff6347',
};

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    transition: background-color 0.3s, color 0.3s;
  }
`;

// Toggle Button for Dark Mode
const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.navText};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }
`;

// Main content wrapper
const Main = styled.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 4rem; /* To prevent content from being hidden behind footer */
`;

const AppContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Helmet>
        <title>Leo Dorfman | Portfolio</title>
        <meta name="description" content="Leo Dorfman's professional portfolio showcasing skills, projects, and experiences." />
        <meta name="keywords" content="Leo Dorfman, Portfolio, Computer Science, Projects, Skills" />
        <meta name="author" content="Leo Dorfman" />
      </Helmet>
      <GlobalStyle />
      <Router>
        <Navbar />
        <ToggleButton onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </ToggleButton>
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
