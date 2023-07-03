import styled from "styled-components";

export const Container = styled.tbody``;

export const ContainerRow = styled.tr`
  border-bottom: 2px solid #f1f2f3;
`;

interface IContainerRowColumnProps {
  hasAction: boolean;
}

export const ContainerRowColumn = styled.td<IContainerRowColumnProps>`
  color: #223344;
  font-size: 0.85rem;
  overflow-wrap: break-word;
  vertical-align: top;
  padding: 0.5rem;
  inline-size: 100%;
  max-width: 300px;
  writing-mode: horizontal-tb;

  ${({ hasAction }) => hasAction && `cursor:pointer`}
`;
