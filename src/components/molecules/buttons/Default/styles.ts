import { TColorKeys, TFontSizeKeys } from "@/interfaces/theme";
import styled from "styled-components";

interface IContainerProps {
  color?: TColorKeys;
  background?: TColorKeys;
  size?: TFontSizeKeys;
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
      color: ${theme.colors[color ?? "primaryContrast"]};
      background: ${theme.colors[background ?? "primary"]};
      font-size: ${theme.fontSizes[size ?? "md"]}
    `;
  }}
`;
