import styled from 'styled-components'

export const Input = styled.input`
  padding-left: 18px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: #2c313c;
  border: none;
  outline: none;
  border-radius: 5px;
  color: #fff;
  border: none;
`

export const List = styled.ul`
  background-color: #2c313c;
  border-radius: 5px;
  border: 1px solid rgba(68, 68, 68, 0.11);
  box-sizing: border-box;
  margin-top: 5px;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  width: 300px;
  pointer-events: none;
  position: absolute;
  margin-left: -1px;
  top: 100%;
  left: 0;
  -webkit-transform-origin: 50% 0;
  -ms-transform-origin: 50% 0;
  transform-origin: 50% 0;
  transform: scaleY(0.75) translateY(-12px);
  transition: all 0.15s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
  z-index: 9;

  &.active {
    display: block;
    opacity: 1;
    pointer-events: auto;
    transform: scaleY(1) translateY(0);
  }
`

export const ListItem = styled.li`
  cursor: pointer;
  font-weight: 400;
  line-height: 40px;
  list-style: none;
  min-height: 40px;
  outline: none;
  padding-left: 18px;
  padding-right: 29px;
  text-align: left;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
  color: #fff;

  &:hover {
    background-color: #62baea;
    color: #fff;
  }
`

export const Container = styled.div`
  -webkit-tap-highlight-color: transparent;
  background-color: #2c313c;
  border-radius: 5px;
  width: 300px;
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

  &:before {
    content: '';
    position: absolute;
    right: 20px;
    top: 16px;
    z-index: 1000;
    width: 7px;
    height: 7px;
    border: 2px solid #fff;
    border-top: 2px solid #2c313c;
    border-right: 2px solid #2c313c;
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
