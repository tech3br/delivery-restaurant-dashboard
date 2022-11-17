import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 656px;

  width: 100%;
  height: 198px;
  padding: 0 112px;
  left: 0px;
  top: 0px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.gray0};
  font-size: ${({ theme }) => theme.typography.heading.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.heading.h3.fontWeight};
  line-height: ${({ theme }) => theme.typography.heading.h3.lineWeight};
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray0};
  font-size: ${({ theme }) => theme.typography.bodyText.medium.fontSize};
  font-weight: ${({ theme }) => theme.typography.bodyText.medium.fontWeight};
  line-height: ${({ theme }) => theme.typography.bodyText.medium.lineWeight};
`;
