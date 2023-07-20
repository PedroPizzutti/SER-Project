import theme from "@/global/styles/theme";
import styled from "styled-components";

interface IContainerProps {
  color?: keyof typeof theme.colors;
  background?: keyof typeof theme.colors;
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

  :hover {
    background: #a7a7a7;
  }

  ${({ color, background, size, theme }) => {
    return `
      color: ${color ?? "#fff"};
      background: ${theme.colors[background ?? "primaryBlue"]};
      font-size: ${size}
    `;
  }}
`;
