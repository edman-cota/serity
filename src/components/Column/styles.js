/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import styled from "styled-components"

export const Column = styled.div`
  padding: 15px 15px 0 15px;
  flex: 0 0 340px;
  background: ${(props) =>
    props.isDark ? "transparent" : "rgba(245,249,250, 0.9)"};
  margin-right: 20px;
  border-radius: 4px;
  // width: 340px;
  // flex-direction: column;
  // background-color: #242732;
  // height: 100%;
  // display: flex;
  // opacity: ${(props) => (props.done ? 0.4 : 1)};

  h2 {
    font-weight: 400;
    font-size: 14px;
    padding: 0 10px;
  }
`

export const TaskList = styled.div`
  padding-left: 6px;
  padding-right: 2px;
  padding-top: 8px;
  transition: background-color 0.2s ease;
  flex-grow: 1;
  // height: 71vh;
  overflow-y: scroll;
  white-space: nowrap;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.isDark ? "#1F2738" : "#EAF1F1")};
  border-radius: 6px;
  align-items: center;
  margin-bottom: 12px;
  height: 42px;
`

export const Label = styled.p`
  color: white;
  font-size: 13px;
  background: ${(props) => props.color};
  padding: 0px 10px;
  border-radius: 10px;
`

export const HeaderRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  padding-right: 6px;
`

export const Span = styled.span`
  padding: 2px 4px;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 10px;
  z-index: 100;
`
