import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.gradients.background};
`;

const AnimatedLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 0;
`;

const Line = styled(motion.div)`
  position: absolute;
  background: ${props => props.theme.colors.primary};
  opacity: 0.1;
  width: 2px;
  height: 100%;
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  z-index: 1;
  padding: 0 ${props => props.theme.spacing.md};
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.primary};
  text-shadow: 0 0 20px ${props => props.theme.colors.glow};
  position: relative;
  display: inline-block;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 2px;
    background: ${props => props.theme.gradients.primary};
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    left: -70px;
  }

  &::after {
    right: -70px;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 3rem;
    
    &::before, &::after {
      width: 30px;
    }

    &::before {
      left: -50px;
    }

    &::after {
      right: -50px;
    }
  }
`;

const Location = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: ${props => props.theme.fonts.mono};
`;

const TypingText = styled(motion.h2)`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.md};
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.fonts.mono};
  text-shadow: 0 0 10px ${props => props.theme.colors.glow};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 1em;
  background-color: ${props => props.theme.colors.primary};
  margin-left: 2px;
  animation: blink 1s infinite;
  box-shadow: 0 0 10px ${props => props.theme.colors.glow};

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.lg};
  max-width: 600px;
  margin: 0 auto ${props => props.theme.spacing.lg};
  font-family: ${props => props.theme.fonts.mono};
  padding: 0 ${props => props.theme.spacing.md};
`;

const FloatingButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2rem;
  background: ${props => props.theme.gradients.primary};
  color: ${props => props.theme.colors.white};
  border-radius: 5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  box-shadow: 0 0 20px ${props => props.theme.colors.glow};
  border: 1px solid ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.mono};
  
  &:hover {
    color: ${props => props.theme.colors.white};
    box-shadow: 0 0 30px ${props => props.theme.colors.glow};
  }
`;

const Home = () => {
  const [typingText, setTypingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Data Analysis Enthusiast";
  const typingSpeed = 100;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypingText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const lines = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: `${(i + 1) * 20}%`,
    delay: i * 0.2
  }));

  return (
    <HomeContainer>
      <AnimatedLines>
        {lines.map((line) => (
          <Line
            key={line.id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100%', opacity: 0.1 }}
            transition={{
              duration: 1,
              delay: line.delay,
              ease: "easeOut"
            }}
            style={{ left: line.x }}
          />
        ))}
      </AnimatedLines>
      <HeroContent
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title variants={itemVariants}>
          Chanderhas
        </Title>
        <Location variants={itemVariants}>
          Rewari, Haryana
        </Location>
        <TypingText variants={itemVariants}>
          {typingText}
          {currentIndex < fullText.length && <Cursor />}
        </TypingText>
        <Description variants={itemVariants}>
          Currently pursuing MCA at K.R. Mangalam university with a strong interest in data analysis. 
          Proficient in Python, SQL, and Excel, and have a good understanding of data manipulation, 
          statistical analysis, and visualization. Eager to apply academic knowledge and develop 
          practical skills in a data-driven role. Actively seeking opportunities to learn and grow 
          in the field of data analysis.
        </Description>
        <FloatingButton
          to="/contact"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </FloatingButton>
      </HeroContent>
    </HomeContainer>
  );
};

export default Home; 