// src/components/Navbar.js
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const Nav = styled.nav`
  background: ${({ theme }) => theme.navBg};
  padding: 1rem;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Li = styled.li``;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.navText};
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s, border-bottom 0.3s;

  &.active {
    color: ${({ theme }) => theme.linkHover};
    border-bottom: 2px solid ${({ theme }) => theme.linkHover};
  }

  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }
`;

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <Nav>
      <Ul>
        <Li>
          <StyledNavLink exact="true" to="/">
            Home
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/about">
            About
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/projects">
            Projects
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/experience">
            Experience
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/contact">
            Contact
          </StyledNavLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
