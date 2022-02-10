import styled from 'styled-components';

export const ClaimCardStyle = styled.div`
  border: 1px solid #000a3d1f;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const ClaimStatStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f5f7fa;
  border-radius: 10px;
  padding: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom: 1px solid #000a3d1f;
`;

export const ClaimStatBalanceStyle = styled.div`
  margin-right: 18px;
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: 1.6em;
  width: 50%;

  :last-child {
    margin-right: 0;
  }
`;

export const ClaimCardTitleStyle = styled.div``;

export const ClaimStatValueStyle = styled.div<{
  $small: boolean;
  $bold: boolean;
}>`
  margin-top: 2px;
  font-size: ${({ theme, $small }) =>
    $small ? theme.fontSizesMap.sm : theme.fontSizesMap.md}px;
  line-height: 1.4em;
  white-space: nowrap;
  font-weight: ${({ $bold }) => ($bold ? 700 : 400)};
  color: #273852;
`;

export const ClaimCardEditStyle = styled.div<{ disabled?: boolean }>`
  text-align: center;
  padding: 12px 0;
  cursor: ${({ disabled }) => {
    return disabled ? `not-allowed` : `pointer`;
  }};
  color: ${({ disabled }) => {
    return disabled ? `#ade1ff` : `#00a3ff`;
  }};
`;

export const ClaimCardExtraStyle = styled.div`
  margin-top: 2px;
  opacity: 0.5;
`;

export const ClaimCardContentStyle = styled.div<{ $hidden: boolean }>`
  margin-top: 8px;
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  pointer-events: ${({ $hidden }) => ($hidden ? 'none' : 'auto')};
`;
