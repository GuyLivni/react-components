import styled, { css } from 'styled-components';

const baseStyles = css`
  font-size: 14px;
  height: 50px;
  font-weight: 600;
  padding: 0 45px;
  text-rendering: geometricPrecision;
  line-height: inherit;
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  vertical-align: top;
  cursor: pointer;
`;

const secondaryStyles = css`
  background: #e0e1e2;
  color: #888787;
  border: 1px solid #e0e1e2;
  border-radius: 5px;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover,
  &:focus {
    background-color: #cacbcd;
    border-color: #cacbcd;
  }
`;

const SecondaryButton = styled('button')`
  ${baseStyles}${secondaryStyles};
`;

export default SecondaryButton;
