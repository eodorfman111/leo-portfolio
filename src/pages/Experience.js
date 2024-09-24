// src/pages/Experience.js
import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  background-color: ${({ theme }) => theme.body};
  padding: 2rem;
  border-radius: 8px;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  text-align: center;
`;

const ExperienceItem = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const RoleCompany = styled.h3`
  margin-top: 0;
  color: ${({ theme }) => theme.text};
`;

const LocationDuration = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.text};
`;

const Responsibilities = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const Experience = () => {
  const experiences = [
    {
      role: 'Math Tutor',
      company: 'Mathnasium',
      location: 'North Miami, FL',
      duration: 'August 2022 – August 2023',
      responsibilities: [
        'Instructed 15+ students, improving math performance and test scores.',
        'Adapted teaching methods to identify and resolve learning barriers.',
      ],
    },
    {
      role: 'Team Captain, UF Beach Volleyball A Team',
      company: 'University of Florida',
      location: 'Gainesville, FL',
      duration: 'August 2023 – Present',
      responsibilities: [
        'Managed team logistics and event coordination, improving participation by 15%.',
        'Led a team of 25 members, enhancing team performance through problem-solving.',
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <ExperienceSection>
      <Heading>Experience</Heading>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index}>
          <RoleCompany>
            {exp.role} at {exp.company}
          </RoleCompany>
          <LocationDuration>
            {exp.location} | {exp.duration}
          </LocationDuration>
          <Responsibilities>
            {exp.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </Responsibilities>
        </ExperienceItem>
      ))}
    </ExperienceSection>
  );
};

export default Experience;
