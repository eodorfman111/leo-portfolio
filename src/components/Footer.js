// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';
import instagramLogo from '../assets/instagram.png';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.navBg}; 
  color: ${({ theme }) => theme.navText};
  text-align: center;
  padding: 1.5rem 2rem; 
  margin-top: 3.2rem;
  position: relative;
  width: 100%;
  bottom: 0;
`;

const SocialLinks = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  display: inline-block;
  width: 24px;
  height: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: ${({ theme }) => (theme.body === '#121212' ? 'invert(1)' : 'none')};
    transition: filter 0.3s;
  }

  &:hover img {
    filter: brightness(0.8);
  }
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>© {new Date().getFullYear()} Leo Dorfman</FooterText>
    <SocialLinks>
      <SocialIcon href="https://github.com/eodorfman111" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="GitHub" />
      </SocialIcon>
      <SocialIcon href="https://www.linkedin.com/in/leo-dorfman" target="_blank" rel="noopener noreferrer">
        <img src={linkedinLogo} alt="LinkedIn" />
      </SocialIcon>
      <SocialIcon href="https://www.instagram.com/leo.dorf" target="_blank" rel="noopener noreferrer">
        <img src={instagramLogo} alt="Instagram" />
      </SocialIcon>
    </SocialLinks>
  </FooterContainer>
);

export default Footer;
