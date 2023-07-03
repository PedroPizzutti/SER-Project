import styled from "styled-components";

interface IContainerProps {
  color?: string;
  size?: string;
}

export const Container = styled.button<IContainerProps>`
  /* padding: 0.7em 2em; */
  border: none;
  border-radius: 5px;
  font-weight: bold;
  gap: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background: transparent;

  ${({ color, size }) => {
    return `
      color: ${color ?? "#fff"};
      font-size: ${size}
    `;
  }}
`;
