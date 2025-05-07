import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 120px 0 60px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  color: ${props => props.theme.colors.text};
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.white};
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.textLight};
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  font-size: 1.5rem;
  transition: ${props => props.theme.transitions.default};
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    background-color: transparent;
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
`;

const ContactForm = styled(motion.form)`
  background-color: rgba(76, 175, 80, 0.1);
  padding: ${props => props.theme.spacing.xl};
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(76, 175, 80, 0.2);
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.text};
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 2px solid ${props => props.theme.colors.card};
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  font-size: 1rem;
  transition: ${props => props.theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const TextArea = styled(motion.textarea)`
  width: 100%;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 2px solid ${props => props.theme.colors.card};
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: ${props => props.theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled(motion.div)`
  margin-top: ${props => props.theme.spacing.md};
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  background-color: ${props => props.success ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)'};
  color: ${props => props.success ? '#4CAF50' : '#F44336'};
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.text};
`;

const Contact = () => {
  const [status, setStatus] = useState({ message: '', success: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      );

      setStatus({
        message: 'Message sent successfully! I will get back to you soon.',
        success: true
      });
      form.current.reset();
    } catch (error) {
      setStatus({
        message: 'Failed to send message. Please try again later.',
        success: false
      });
    }

    setIsSubmitting(false);
  };

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

  return (
    <ContactContainer>
      <Content>
        <ContactInfo>
          <Title
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            Get In Touch
          </Title>
          <Description
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            I'm currently looking for opportunities in the field of data analysis.
            Feel free to reach out if you have any questions or would like to connect!
          </Description>
          <SocialLinks
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <SocialLink 
              href="https://github.com/chanderhas0001" 
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <i className="fab fa-github"></i>
            </SocialLink>
            <SocialLink 
              href="https://www.linkedin.com/in/chanderhas-7a2339284/" 
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <i className="fab fa-linkedin"></i>
            </SocialLink>
          </SocialLinks>

          <div style={{ marginTop: '30px' }}>
            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <i className="fas fa-phone"></i>
              <span>+91 7206809424</span>
            </ContactItem>
            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <i className="fas fa-envelope"></i>
              <span>ashuyaduvanshi720680@gmail.com</span>
            </ContactItem>
            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <i className="fas fa-map-marker-alt"></i>
              <span>Rewari, Haryana</span>
            </ContactItem>
          </div>
        </ContactInfo>

        <ContactForm
          ref={form}
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="user_name"
              required
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="user_email"
              required
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <TextArea
              name="message"
              required
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
            />
          </FormGroup>
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
          {status.message && (
            <StatusMessage
              success={status.success}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {status.message}
            </StatusMessage>
          )}
        </ContactForm>
      </Content>
    </ContactContainer>
  );
};

export default Contact; 