import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  list: {
    bg: 'black',
    borderColor: '#111111',
    padding: '10px',
    minWidth: '12.5rem',
  },
  item: {
    color: 'white',
    height: '36px',
    borderRadius: '6px',
    fontSize: '14px',

    _hover: {
      bg: '#0099FF',
    },
    _active: {
      bg: 'gray.700',
    },
    _focus: {
      bg: 'gray.700',
    },
  },
  divider: {
    width: '90%',
    mx: 'auto',
    borderColor: 'whiteAlpha.400',
  },
})

export const menuTheme = defineMultiStyleConfig({ baseStyle })
