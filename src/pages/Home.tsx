import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { getAllPresentations } from '../presentations';
import { Container, Card, Button } from '../components/common';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
`;

const PresentationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const PresentationCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex: 1;
`;

const CardMeta = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Tags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.surfaceLight};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const presentations = getAllPresentations();

  const handlePresentationClick = (id: string) => {
    navigate(`/presentation/${id}`);
  };

  return (
    <PageContainer>
      <Container>
        <Title>Presentations</Title>
        <PresentationGrid>
          {presentations.map((entry) => (
            <PresentationCard key={entry.metadata.id} padding="lg" interactive>
              <CardContent>
                <CardTitle>{entry.metadata.title}</CardTitle>
                <CardDescription>{entry.metadata.description}</CardDescription>
                <CardMeta>
                  {entry.metadata.author && <span>By {entry.metadata.author}</span>}
                  {entry.metadata.duration && <span>• {entry.metadata.duration}</span>}
                </CardMeta>
                {entry.metadata.tags && (
                  <Tags>
                    {entry.metadata.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Tags>
                )}
                <Button 
                  onClick={() => handlePresentationClick(entry.metadata.id)}
                  fullWidth
                >
                  View Presentation
                </Button>
              </CardContent>
            </PresentationCard>
          ))}
        </PresentationGrid>
      </Container>
    </PageContainer>
  );
};