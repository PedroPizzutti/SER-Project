import styled, { css } from "styled-components";
import { Link as LinkDOM } from "react-router-dom";

export const Container = styled.ol`
  display: flext;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: 5px;
`;

const linkStyle = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #6c6c6c;

  & + ::before {
    display: inline-block;
    padding: 0 0.5rem;
    color: #6c6c6c;
    content: "/";
  }
`;

export const Link = styled(LinkDOM)`
  ${linkStyle}

  :hover {
    color: #ce275c;
  }
`;

export const Item = styled.div`
  ${linkStyle};
`;
