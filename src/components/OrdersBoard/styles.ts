import styled from 'styled-components';

export const BoardContainer = styled.div`
  padding: 16px;
  border: 1px solid ${({ theme }) => `${theme.colors.gray200}50`};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const BoardHeader = styled.header`
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BoardOrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
`;

export const CountTableTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.typography.bodyText.small.fontSize};
  font-weight: ${({ theme }) => theme.typography.bodyText.small.fontWeight};
  line-height: ${({ theme }) => theme.typography.bodyText.small.lineWeight};
`;

export const CountFoodTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.typography.bodyText.small.fontSize};
  font-weight: ${({ theme }) => theme.typography.bodyText.small.fontWeight};
  line-height: ${({ theme }) => theme.typography.bodyText.small.lineWeight};
`;

