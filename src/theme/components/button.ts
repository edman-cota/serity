import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
  fontWeight: 'normal',
  borderRadius: 'base',
  _focusVisible: {
    boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  },

  _dark: {
    color: 'gray.400',

    _hover: {
      color: 'white',
    },
  },
})

const ghost = defineStyle({
  color: 'rgba(24, 29, 37, .6)',
  h: '2rem',
  w: '2rem',
  p: '0px',

  _hover: {
    color: 'black',
  },
})

const solid = defineStyle({
  bg: 'whiteAlpha.200',
  fontSize: '14px',
  color: 'white',

  _hover: {
    bg: 'whiteAlpha.300',
  },

  _dark: {
    color: 'white',
  },
})

const link = defineStyle({
  color: '#0071dc',
  my: '20px',
})

const submit = defineStyle({
  color: 'white',
  background: '#2e85ec',
  w: '100px',
  h: '2rem',

  _dark: {
    color: 'white',
    background: '#2e85ec',
    w: '100px',

    _hover: {
      bg: '#0071dc',
    },
  },
})

const remove = defineStyle({
  w: '100px',
  h: '2rem',
  color: '#FFFFFF',
  background: '#ff6666',

  _hover: {
    bg: '#ff6666',
  },
})

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: { ghost, solid, link, submit, remove },
  defaultProps: {
    variant: 'ghost',
  },
})
