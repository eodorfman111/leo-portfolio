// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.navBg};
  color: ${({ theme }) => theme.navText};
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
`;

const FooterLink = styled.a`
  color: #ff6347;
  margin: 0 0.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <FooterContainer>
    © {new Date().getFullYear()} Leo Dorfman | 
    <FooterLink href="https://www.linkedin.com/in/leo-dorfman" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink> | 
    <FooterLink href="https://github.com/eodorfman111" target="_blank" rel="noopener noreferrer">GitHub</FooterLink>
  </FooterContainer>
);

export default Footer;
