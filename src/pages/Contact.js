// src/pages/Contact.js
import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';
import instagramLogo from '../assets/instagram.png';

const ContactSection = styled.section`
  
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  color: #ff7f50;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #;
  font-weight: 600;
`;

const Input = styled(Field)`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
`;

const TextArea = styled(Field)`

  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  height: 150px;
  font-family: 'Poppins', sans-serif;
`;

const ErrorText = styled.div`
  color: #ff4d4f;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const SubmitButton = styled.button`
  background-color: #ff7f50;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e66c3a;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ContactDetails = styled.div`
  margin-top: 2rem;
  text-align: center;
  color: #fff;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  display: inline-block;
  width: 32px;
  height: 32px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: ${({ theme }) => (theme.theme === 'dark' ? 'invert(1)' : 'none')};
    transition: filter 0.3s;
  }

  &:hover img {
    filter: brightness(0.8);
  }
`;

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Your name is required'),
    email: Yup.string().email('Invalid email address').required('Your email is required'),
    message: Yup.string().required('Please enter a message'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    alert('Thank you for your message!');
    resetForm();
  };

  return (
    <ContactSection>
      <Heading>Contact</Heading>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <StyledForm>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" />
          <ErrorMessage name="name" component={ErrorText} />

          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" />
          <ErrorMessage name="email" component={ErrorText} />

          <Label htmlFor="message">Message</Label>
          <TextArea as="textarea" id="message" name="message" />
          <ErrorMessage name="message" component={ErrorText} />

          <SubmitButton type="submit">Send Message</SubmitButton>
        </StyledForm>
      </Formik>
      <ContactDetails>
        <SocialLinks>
          <SocialIcon href="https://github.com/eodorfman111" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/leo-dorfman" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/leo.dorf" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" />
          </SocialIcon>
        </SocialLinks>
      </ContactDetails>
    </ContactSection>
  );
};

export default Contact;
