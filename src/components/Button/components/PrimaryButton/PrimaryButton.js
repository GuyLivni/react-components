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

const primaryStyles = css`
  background: #0074c8;
  color: #fff;
  border: 1px solid #0074c8;
  border-radius: 5px;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover,
  &:focus {
    background-color: #0065ad;
    border-color: #0065ad;
  }
`;

const PrimaryButton = styled('button')`
  ${baseStyles}${primaryStyles};
`;

export default PrimaryButton;
