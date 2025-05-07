import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Share+Tech+Mono&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    background: ${props => props.theme.gradients.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        linear-gradient(90deg, rgba(0, 255, 224, 0.1) 1px, transparent 1px) 0 0 / 20px 20px,
        linear-gradient(0deg, rgba(0, 255, 224, 0.1) 1px, transparent 1px) 0 0 / 20px 20px;
      pointer-events: none;
      z-index: -1;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-shadow: 0 0 10px ${props => props.theme.colors.glow};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: ${props => props.theme.transitions.default};
    position: relative;

    &:hover {
      color: ${props => props.theme.colors.primary};
      text-shadow: 0 0 10px ${props => props.theme.colors.glow};
    }
  }

  button {
    font-family: ${props => props.theme.fonts.main};
    cursor: pointer;
    border: none;
    outline: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: ${props => props.theme.transitions.default};

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadows.md};
    }
  }

  section {
    padding: ${props => props.theme.spacing.xl} 0;
    position: relative;
    overflow: hidden;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${props => props.theme.spacing.sm};
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: ${props => props.theme.spacing.lg};
    text-align: center;
    color: ${props => props.theme.colors.primary};
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${props => props.theme.gradients.primary};
      box-shadow: ${props => props.theme.shadows.sm};
    }
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
    
    &:hover {
      background: ${props => props.theme.colors.secondary};
    }
  }
`;

export default GlobalStyles; 