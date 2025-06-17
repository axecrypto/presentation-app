import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePresentation } from '../contexts/PresentationContext';
import { PresentationLayout } from '../components/layouts/PresentationLayout';
import { getPresentationById } from '../presentations';
import styled from '@emotion/styled';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ErrorTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const BackButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: background-color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const PresentationView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setPresentation } = usePresentation();

  useEffect(() => {
    if (id) {
      const entry = getPresentationById(id);
      if (entry) {
        setPresentation(entry.presentation);
      }
    }
  }, [id, setPresentation]);

  const entry = id ? getPresentationById(id) : null;

  if (!entry) {
    return (
      <ErrorContainer>
        <ErrorTitle>Presentation Not Found</ErrorTitle>
        <ErrorMessage>
          The presentation you're looking for doesn't exist or has been removed.
        </ErrorMessage>
        <BackButton onClick={() => navigate('/')}>
          Back to Home
        </BackButton>
      </ErrorContainer>
    );
  }

  return <PresentationLayout />;
};