import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  overlay: {
    bg: 'rgba(15,23,42,.8)',
  },

  dialog: {
    bg: 'white',
    boxShadow: 'inset 0 1px 0 0 rgb(255 255 255 / 5%)',
    mx: '20px',

    _dark: {
      bg: '#1e293b',
      boxShadow: 'inset 0 1px 0 0 hsl(0deg 0% 100% / 5%)',
    },
  },
})

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
})
