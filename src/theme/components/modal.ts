import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  overlay: {
    // bg: '#0e1525A0',
    bg: 'rgba(0, 0, 0, 0.3)',
  },

  dialog: {
    bg: 'white',
    boxShadow: 'inset 0 1px 0 0 rgb(255 255 255 / 5%)',

    _dark: {
      bg: 'rgba( 28, 35, 51, 0.55 )',
      backdropFilter: 'auto',
      backdropBlur: '4px',
    },
  },
})

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
})
