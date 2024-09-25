import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

const Heading = styled.h2`
  color: #ff7f50;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2.5rem;
`;

const ExperienceItem = styled(motion.div)`
  background-color: ${({ theme }) => theme.body};
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const RoleCompany = styled.h3`
  margin-top: 0;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const LocationDuration = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.text}99;
  margin-bottom: 1rem;
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
        'Instructed 15+ students, enhancing their math skills and improving test scores.',
        'Adapted teaching methods to identify and overcome individual learning barriers.',
      ],
    },
    {
      role: 'Team Captain, UF Beach Volleyball Team',
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
        <ExperienceItem
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
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