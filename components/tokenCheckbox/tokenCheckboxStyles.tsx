import styled from 'styled-components';

export const TokenCheckboxContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eff2f6;
  border-radius: 10px;
  padding: 18px 28px 18px 20px;
  margin-bottom: 8px;
  &:hover {
    background-color: rgba(0, 163, 255, 0.1);
  }
`;

export const TokenCheckboxWrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TokenCheckboxValueStyle = styled.div`
  color: #273852;
  font-size: 14px;
  margin-left: 12px;
`;

export const TokenCheckboxBadgeStyle = styled.div<{
  $available: boolean;
}>`
  font-family: Monrope;
  font-size: 12px;
  line-height: 20px;
  padding: 2px 8px;
  border-radius: 100px;
  color: ${({ $available }) => ($available ? '#53ba95' : '#ff9900')};
  background-color: ${({ $available }) =>
    $available ? 'rgba(83, 186, 149, 0.1)' : 'rgba(255, 153, 0, 0.1);'};
`;
