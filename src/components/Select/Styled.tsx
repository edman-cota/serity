import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${(props: any) => {
    switch (props.theme) {
      case 'dark':
        return css`
          background-color: #2c313c;
          color: white;
        `
      default:
        return css`
          background-color: white;
          color: rgb(110, 86, 207);
        `
    }
  }};
  padding-left: 18px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 4px;
  border: none;

  &::placeholder {
    color: rgb(110, 86, 207);
  }
`
export const List = styled.ul`
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 4px;
  opacity: 0;
  overflow: auto;
  padding: 8px;
  width: ${(props: any) => props.width}px;
  pointer-events: none;
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 10px;
  -webkit-transform-origin: 50% 0;
  -ms-transform-origin: 50% 0;
  transform-origin: 50% 0;
  transform: scaleY(0.75) translateY(-12px);
  transition: all 0.15s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
  z-index: 999;

  &.active {
    ${(props: any) => {
      switch (props.theme) {
        case 'dark':
          return css`
            background-color: #2c313c;
          `
        default:
          return css`
            background-color: white;
          `
      }
    }};
    display: block;
    opacity: 1;
    pointer-events: auto;
    transform: scaleY(1) translateY(0);
  }
`

export const ListItem = styled.li`
  cursor: pointer;
  font-weight: 400;
  line-height: 30px;
  list-style: none;
  min-height: 30px;
  outline: none;
  border-radius: 4px;
  padding-left: 18px;
  padding-right: 29px;
  text-align: left;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;

  ${(props: any) => {
    switch (props.theme) {
      case 'dark':
        return css`
          color: white;
        `
      default:
        return css`
          color: rgb(110, 86, 207);
        `
    }
  }}

  &:hover {
    background-color: #62baea;
    color: #fff;
  }
`
export const Container = styled.div`
  -webkit-tap-highlight-color: transparent;
  border-radius: 4px;
  width: ${(props: any) => props.width}px;
  cursor: pointer;
  display: block;
  font-family: inherit;
  font-size: 14px;
  font-weight: normal;
  height: 40px;
  line-height: 40px;
  outline: none;
  position: relative;
  text-align: left !important;
  transition: all 0.4s ease-in-out;
  user-select: none;
  white-space: nowrap;
  z-index: 9999;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 10px;

  &:before {
    ${(props: any) => {
      switch (props.theme) {
        case 'dark':
          return css`
            border: 2px solid #fff;
            border-top: 2px solid #2c313c;
            border-right: 2px solid #2c313c;
          `
        default:
          return css`
            border: 2px solid rgb(110, 86, 207);
            border-top: 2px solid white;
            border-right: 2px solid white;
          `
      }
    }};
    content: '';
    position: absolute;
    right: 20px;
    top: 16px;
    z-index: 1000;
    width: 7px;
    height: 7px;
    transform: rotate(-45deg);
    transition: 0.3s;
    pointer-events: none;
  }

  &.active {
    display: block;
    opacity: 1;
    pointer-events: auto;
    transform: scaleY(1) translateY(0);

    &:before {
      top: 20px;
      transform: rotate(-225deg);
    }
  }
`
