import styled from 'styled-components';

export const TokenToWalletStyle = styled.button`
  border: 0;
  padding: 0;
  width: 15px;
  height: 15px;
  line-height: 0;
  vertical-align: middle;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -2px;
  margin-left: 4px;
  background: ${({ theme }) => theme.colors.accentDarken};

  &:before,
  &:after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.accentContrast};
    width: 7px;
    height: 1px;
    top: 7px;
    left: 4px;
    border-radius: 0.5px;
  }

  &:after {
    height: 7px;
    width: 1px;
    top: 4px;
    left: 7px;
  }
`;
