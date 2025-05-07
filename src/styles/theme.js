const theme = {
  colors: {
    primary: '#00FFE0',     // Neon cyan
    secondary: '#FF00FF',   // Neon magenta
    background: '#0A0A0A',  // Dark background
    text: '#FFFFFF',        // White text
    textLight: '#B0B0B0',   // Light gray
    white: '#FFFFFF',       // White
    black: '#000000',       // Black
    card: '#1A1A1A',        // Dark card background
    accent: '#FF2D95',      // Neon pink accent
    glow: 'rgba(0, 255, 224, 0.3)', // Neon glow effect
  },
  fonts: {
    main: "'Orbitron', sans-serif",
    mono: "'Share Tech Mono', monospace",
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  transitions: {
    default: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
  },
  spacing: {
    xxs: '0.25rem',
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '3rem',
    xl: '4rem',
  },
  shadows: {
    sm: '0 0 10px rgba(0, 255, 224, 0.3)',
    md: '0 0 20px rgba(0, 255, 224, 0.4)',
    lg: '0 0 30px rgba(0, 255, 224, 0.5)',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  gradients: {
    primary: 'linear-gradient(45deg, #00FFE0, #FF00FF)',
    secondary: 'linear-gradient(45deg, #FF00FF, #FF2D95)',
    background: 'linear-gradient(135deg, #0A0A0A, #1A1A1A)',
  },
  borders: {
    primary: '1px solid rgba(0, 255, 224, 0.3)',
    secondary: '1px solid rgba(255, 0, 255, 0.3)',
  },
};

export default theme; 