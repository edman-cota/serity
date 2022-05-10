/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import styled, { css } from "styled-components";

export const Card = styled.div`
  position: relative;
  ${(props) =>
    props.isDragging &&
    css`
      transform: rotate(15deg);
    `};

  // background-color: ${(props) => (props.isDragging ? "#2c2f39" : "#20212c")};

  // background-color: ${(props) => (props.isDark ? "#1F2734" : "white")};
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 0px 15px;
  cursor: grab;

  img {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    margin-top: 11px;
    border-radius: 50%;
  }
`;

export const Label = styled.span`
  // width: 60px;
  height: 20px;
  padding: 0px 7px;
  color: white;
  align-items: center;
  border-radius: 4px;
  font-size: 12px;
  display: inline-block;
  margin-right: 8px;
  background: ${(props) => props.color};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 14px;
  padding-top: 14px;

  // overflow: hidden;
  // display: -webkit-box;
  // -webkit-line-clamp: 2;
  // -webkit-box-orient: vertical;
`;

export const Title = styled.p`
  font-weight: 400 !important;
  width: 100%;
  color: ${(props) => (props.isDark ? "rgba(255, 255, 255, 0.9)" : "#585D77")};
`;
