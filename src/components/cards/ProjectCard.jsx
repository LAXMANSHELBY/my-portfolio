import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  max-width: 340px;
  min-height: 260px;
  background: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  padding: 22px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  transition: all 0.4s ease;
  cursor: pointer;
  backdrop-filter: blur(12px);

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: rgba(168, 85, 247, 0.45) 0px 12px 40px;
    border-color: rgba(168, 85, 247, 0.6);
  }
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Date = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`;

const Tech = styled.div`
  font-size: 13px;
  color: #a855f7;
  font-weight: 500;
`;

const Link = styled.a`
  color: #a855f7;
  font-weight: 600;
  text-decoration: none;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <div>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </div>

      {project.tech && <Tech>{project.tech.join(" • ")}</Tech>}

      {project.github && (
        <Link href={project.github} target="_blank" rel="noopener noreferrer">
          View Code →
        </Link>
      )}
    </Card>
  );
};

export default ProjectCard;
