import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => `${theme.colors.primary}`};
  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
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
  text-align: end;
`;

export const LogoImage = styled.img`

`;

export const TextLogoTitle = styled(Title)`

`;

export const TextLogoSubtitle = styled(Subtitle)`

`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
