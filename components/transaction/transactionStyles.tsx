import styled from 'styled-components';

export const TransactionTitleStyle = styled.div``;

export const TransactionDescriptionStyle = styled.div`
  margin-top: ${({ theme }) => theme.spaceMap.xs}px;
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: 1.3em;
  opacity: 0.6;
`;
