import styled from 'styled-components';

export const ButtonBackStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 120px;
  font-size: 10px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  opacity: 0.9;
  transition: opasity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    0deg,
    rgb(33, 51, 251) 0%,
    rgba(0, 0, 0, 0.846) 100%
  );
  color: #fff;
  overflow: hidden;
  &:hover,
  &:focus {
    opacity: 1;
    transform: scale(1.1);
    color: #1109f0;
    background: transparent;
    box-shadow: none;
  }
  .Label {
    margin-left: 10px;
  }
`;
