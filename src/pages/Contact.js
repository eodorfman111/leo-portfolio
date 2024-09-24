// src/pages/Contact.js
import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactSection = styled.section`
  background-color: ${({ theme }) => theme.body};
  padding: 2rem;
  border-radius: 8px;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  text-align: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

const Input = styled(Field)`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled(Field)`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  height: 150px;
`;

const ErrorText = styled.div`
  color: red;
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #ff6347;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  align-self: flex-end;

  &:hover {
    background-color: #e5533d;
  }
`;

const ContactDetails = styled.div`
  margin-top: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.text};

  a {
    color: #ff6347;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().required('Required'),
  });

  const onSubmit = (values, { resetForm }) => {
    // Handle form submission (e.g., send data to Firebase or Netlify Forms)
    console.log('Form data', values);
    alert('Message sent!');
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
        <p>Email: <a href="mailto:leodorfman1@gmail.com">leodorfman1@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/leo-dorfman" target="_blank" rel="noopener noreferrer">linkedin.com/in/leo-dorfman</a></p>
        <p>GitHub: <a href="https://github.com/eodorfman111" target="_blank" rel="noopener noreferrer">github.com/eodorfman111</a></p>
      </ContactDetails>
    </ContactSection>
  );
};

export default Contact;
