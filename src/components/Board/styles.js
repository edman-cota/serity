import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0 0 28px 0; // Still an option
  height: calc(100% - 90px);
  margin-left: 20px;
`;

export const Div = styled.div`
  // border: 1px solid red;
  background: ${(props) => (props.isDraggingOver ? "red" : "green")}
  padding-top: 6px;
`;
