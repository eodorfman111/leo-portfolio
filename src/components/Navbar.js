// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const Nav = styled.nav`
  background: ${({ theme }) => theme.navBg};
  padding: 1.5rem 2rem; /* Increased padding for taller navbar */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed; /* Fixed position to stay on top */
  top: 0;
  width: 100%;
  z-index: 1000;
  height: 80px; /* Fixed height */
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space between nav links and toggle */
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.navBg};
    position: absolute;
    top: 80px;
    left: ${({ open }) => (open ? '0' : '-100%')};
    width: 100%;
    transition: left 0.3s ease-in-out;
  }
`;

const NavItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.navText};
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s, border-bottom 0.3s;

  &.active {
    color: ${({ theme }) => theme.linkHover};
    border-bottom: 2px solid ${({ theme }) => theme.linkHover};
  }

  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.navText};
  transition: color 0.3s;
  background: rgba(255, 255, 255, 0.3);
  padding: 0.5rem;
  border-radius: 20px;

  &:hover {
    color: ${({ theme }) => theme.linkHover};
    background: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
  }
`;

const ToggleLabel = styled.span`
  margin-left: 0.5rem;
  font-size: 1rem;
  user-select: none;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.navText};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Brand = styled.div`
  h1 {
    color: ${({ theme }) => theme.navText};
    margin: 0;
    font-size: 1.5rem;
  }
`;

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = React.useState(false);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <Nav>
      <Brand>
        <StyledNavLink exact="true" to="/">
          <h1>Leo Dorfman</h1>
        </StyledNavLink>
      </Brand>
      <MobileMenuButton onClick={handleMenuToggle}>
        {open ? '✖️' : '☰'}
      </MobileMenuButton>
      <NavLinks open={open}>
        <NavItem>
          <StyledNavLink exact="true" to="/" onClick={() => setOpen(false)}>
            Home
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/about" onClick={() => setOpen(false)}>
            About
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/projects" onClick={() => setOpen(false)}>
            Projects
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/experience" onClick={() => setOpen(false)}>
            Experience
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </StyledNavLink>
        </NavItem>
      </NavLinks>
      <ToggleContainer onClick={handleToggleTheme}>
        {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
        <ToggleLabel>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</ToggleLabel>
      </ToggleContainer>
    </Nav>
  );
};

export default Navbar;
