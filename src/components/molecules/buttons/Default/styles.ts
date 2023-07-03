import styled from "styled-components";

interface IContainerProps {
  color?: string;
  background?: string;
  size?: string;
}

export const Container = styled.button<IContainerProps>`
  padding: 0.7em 2em;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  gap: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  ${({ color, background, size }) => {
    return `
      color: ${color ?? "#fff"};
      background: ${background ?? "#319795"};
      font-size: ${size}
    `;
  }}
`;
