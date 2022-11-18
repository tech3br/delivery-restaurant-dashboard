import styled from 'styled-components';

export const OrderCardContainer = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray0};
  border: 1px solid ${({ theme }) => `${theme.colors.gray200}50`};
  height: 128px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  & + button {
    margin-top: 24px;
  }
`;

export const IconPinContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

export const OrderContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextLogoTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray500};
  font-weight: 500;
  line-height: ${({ theme }) => theme.typography.bodyText.medium.lineWeight};
`;

export const TextLogoSubtitle = styled.p`
  display: flex;
  color: ${({ theme }) => theme.colors.gray400};
  font-size: ${({ theme }) => theme.typography.bodyText.small.fontSize};
  font-weight: 400;
  line-height: ${({ theme }) => theme.typography.bodyText.small.lineWeight};
`;

