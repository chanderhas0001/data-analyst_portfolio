import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${props => props.theme.colors.background}E6;
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const LogoIcon = styled.span`
  margin-right: 8px;
  font-size: 1.2rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(motion(Link))`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.transitions.default};
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &.active {
    color: ${props => props.theme.colors.primary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.colors.background};
    padding: 2rem;
    gap: 1rem;
    transform-origin: top;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuVariants = {
    closed: {
      scaleY: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      scaleY: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <LogoIcon>🌱</LogoIcon>
          Chanderhas
        </Logo>
        <NavLinks>
          <NavLink 
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            whileHover={{ y: -2 }}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
            whileHover={{ y: -2 }}
          >
            About
          </NavLink>
          <NavLink 
            to="/projects"
            className={location.pathname === '/projects' ? 'active' : ''}
            whileHover={{ y: -2 }}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
            whileHover={{ y: -2 }}
          >
            Contact
          </NavLink>
        </NavLinks>
        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          ☰
        </MobileMenuButton>
        <MobileMenu
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
        >
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 