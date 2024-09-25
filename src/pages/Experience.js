// src/pages/Experience.js
import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Heading = styled.h2`
  color: #ff7f50; 
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const ExperienceItem = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const RoleCompany = styled.h3`
  margin-top: 0;
  color: #333;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
`;

const LocationDuration = styled.p`
  font-style: italic;
  color: #555;
`;

const Responsibilities = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  color: #555;
`;

const Experience = () => {
  const experiences = [
    {
      role: 'Math Tutor',
      company: 'Mathnasium',
      location: 'North Miami, FL',
      duration: 'August 2022 – August 2023',
      responsibilities: [
        'Instructed 15+ students, enhancing their math skills and improving test scores.',
        'Adapted teaching methods to identify and overcome individual learning barriers.',
      ],
    },
    {
      role: 'Team Captain, UF Beach Volleyball A Team',
      company: 'University of Florida',
      location: 'Gainesville, FL',
      duration: 'August 2023 – Present',
      responsibilities: [
        'Managed team logistics and coordinated events, boosting participation by 15%.',
        'Led a team of 25 members, fostering collaboration and problem-solving to enhance performance.',
      ],
    },

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
