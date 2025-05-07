import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 120px 0 60px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.white};
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  background-color: ${props => props.theme.colors.card};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: ${props => props.theme.spacing.md};
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 4px solid ${props => props.theme.colors.primary};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    transform: translateY(-10px);
    border-color: ${props => props.theme.colors.secondary};
  }
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ProjectTechnologies = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.xs};
`;

const TechTag = styled.span`
  font-size: 0.8rem;
  background-color: ${props => props.theme.colors.primary}40;
  color: ${props => props.theme.colors.white};
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  border: 1px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    transform: scale(1.05);
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${props => props.theme.spacing.md};
`;

const ModalContent = styled(motion.div)`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.lg};
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border-left: 5px solid ${props => props.theme.colors.primary};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${props => props.theme.spacing.sm};
  right: ${props => props.theme.spacing.sm};
  background: none;
  border: none;
  color: ${props => props.theme.colors.white};
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const ModalDescription = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.6;
`;

const LinkButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border-radius: 5px;
  text-decoration: none;
  margin-right: ${props => props.theme.spacing.sm};
  font-weight: 500;
  transition: ${props => props.theme.transitions.default};
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-2px);
    background-color: transparent;
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
`;

const projects = [
  {
    id: 1,
    title: 'Email Spam Detection using Blockchain',
    shortDescription: 'Secure email verification using blockchain technology',
    fullDescription: 'Blockchain ensures email verification through a distributed network, reducing reliance on central servers. All email activities are recorded on an immutable ledger, making it easy to track and verify authenticity. By utilizing consensus mechanisms, blockchain can effectively block malicious or spam emails, enhancing security.',
    technologies: ['Solidity', 'Ethereum Blockchain'],
    githubLink: 'https://github.com/chanderhas0001'
  },
  {
    id: 2,
    title: 'Fake News Detection',
    shortDescription: 'NLP-based fake news detection system',
    fullDescription: 'NLP techniques analyze the linguistic patterns in news articles to detect inconsistencies or misleading language. Machine learning models are trained on labeled datasets to classify news as real or fake based on features extracted from the text. The project aims to ensure trustworthy news consumption by filtering out fake news, promoting accuracy and credibility.',
    technologies: ['Python', 'Jupyter Notebook', 'NLTK / spaCy', 'TfidfVectorizer / CountVectorizer'],
    githubLink: 'https://github.com/chanderhas0001'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <ProjectsContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </Title>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.shortDescription}</ProjectDescription>
                <ProjectTechnologies>
                  {project.technologies.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </ProjectTechnologies>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>

        <AnimatePresence>
          {selectedProject && (
            <Modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <ModalContent
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={e => e.stopPropagation()}
              >
                <CloseButton onClick={() => setSelectedProject(null)}>×</CloseButton>
                <ModalTitle>{selectedProject.title}</ModalTitle>
                <ModalDescription>{selectedProject.fullDescription}</ModalDescription>
                <div>
                  <strong>Technologies used:</strong> {selectedProject.technologies.join(', ')}
                </div>
                <div style={{ marginTop: '20px' }}>
                  <LinkButton href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                  </LinkButton>
                </div>
              </ModalContent>
            </Modal>
          )}
        </AnimatePresence>
      </Content>
    </ProjectsContainer>
  );
};

export default Projects; 