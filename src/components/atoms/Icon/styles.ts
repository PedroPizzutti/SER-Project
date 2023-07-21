import styled from "styled-components";

interface ISpanProps {
  color?: string;
}

export const Span = styled.span.attrs({
  className: "material-icons",
})<ISpanProps>`
  font-size: 1rem;
  color: ${({ color }) => color};
`;
