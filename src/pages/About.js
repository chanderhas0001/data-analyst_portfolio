import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 120px 0 60px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const Section = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const ProfileSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const ProfileInfo = styled.div``;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.white};
`;

const Bio = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ContactDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.lg};
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.textLight};

  i {
    color: ${props => props.theme.colors.primary};
    font-size: 1.2rem;
  }
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const EducationCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.card};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.lg};
  border-left: 4px solid ${props => props.theme.colors.primary};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
  }
`;

const SchoolName = styled.h3`
  color: ${props => props.theme.colors.white};
  font-size: 1.5rem;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const Degree = styled.h4`
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const Duration = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 1rem;
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const CGPA = styled.p`
  color: ${props => props.theme.colors.accent};
  font-weight: 600;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${props => props.theme.spacing.md};
`;

const SkillCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.card};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  text-align: center;
  border: 1px solid ${props => props.theme.colors.primary}40;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${props => props.theme.colors.primary};
    transform: scaleY(0);
    transition: transform 0.3s ease;
    transform-origin: bottom;
  }

  &:hover::before {
    transform: scaleY(1);
  }
`;

const SkillName = styled.h4`
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.sm};
  position: relative;
  z-index: 1;
`;

const LanguagesList = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: center;
  margin-top: ${props => props.theme.spacing.md};
`;

const LanguageTag = styled(motion.div)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: 500;
`;

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      school: 'K.R. MANGALAM UNIVERSITY',
      degree: 'Master of Computer Application',
      duration: 'Sept 2024 - Present',
      cgpa: '7.8/10',
      courses: 'Data Structures and Algorithms, Data Analytics and Visualization, Data Mining'
    },
    {
      school: 'MAHARAJA AGARSEN HIMALYAN GARHWAL UNIVERSITY',
      degree: 'Bachelor of Computer Application',
      duration: 'Aug 2020 - July 2023',
      cgpa: '6.5/10',
      courses: 'Computer Fundamental, Web Technologies, Database Management System'
    },
    {
      school: 'BAL BHARTI SR. SEC. SCHOOL',
      degree: 'Higher Secondary Education',
      duration: 'Mar 2019 - Feb 2020',
      cgpa: '7.4/10',
      courses: 'Physics, Chemistry, Mathematics'
    }
  ];

  const skills = [
    'Python',
    'SQL',
    'JavaScript',
    'MySQL Server',
    'Excel',
    'Data Structures',
    'Data Analysis',
    'Data Visualization',
    'Statistics',
    'Communication'
  ];

  const contactInfo = {
    phone: '+91 7206809424',
    email: 'ashuyaduvanshi720680@gmail.com',
    location: 'Rewari, Haryana',
    linkedin: 'https://www.linkedin.com/in/chanderhas-7a2339284/',
    github: 'https://github.com/chanderhas0001'
  };

  return (
    <AboutContainer>
      <Content>
        <ProfileSection>
          <ProfileInfo>
            <Title
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </Title>
            <Bio
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Currently pursuing MCA at K.R. Mangalam university with a strong interest in data analysis. 
              Proficient in Python, SQL, and Excel, and have a good understanding of data manipulation, 
              statistical analysis, and visualization. Eager to apply academic knowledge and develop 
              practical skills in a data-driven role. Actively seeking opportunities to learn and grow 
              in the field of data analysis.
            </Bio>
            <ContactDetails>
              <ContactItem
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <i className="fas fa-phone"></i>
                <span>{contactInfo.phone}</span>
              </ContactItem>
              <ContactItem
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <i className="fas fa-envelope"></i>
                <span>{contactInfo.email}</span>
              </ContactItem>
              <ContactItem
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <i className="fas fa-map-marker-alt"></i>
                <span>{contactInfo.location}</span>
              </ContactItem>
            </ContactDetails>
          </ProfileInfo>
        </ProfileSection>

        <Section ref={ref}>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Education
          </Title>
          <EducationGrid>
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <SchoolName>{edu.school}</SchoolName>
                <Degree>{edu.degree}</Degree>
                <Duration>{edu.duration}</Duration>
                {edu.cgpa && <CGPA>GPA: {edu.cgpa}</CGPA>}
                {edu.courses && <p>Coursework: {edu.courses}</p>}
              </EducationCard>
            ))}
          </EducationGrid>
        </Section>

        <Section>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </Title>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <SkillName>{skill}</SkillName>
              </SkillCard>
            ))}
          </SkillsGrid>
        </Section>
      </Content>
    </AboutContainer>
  );
};

export default About; 