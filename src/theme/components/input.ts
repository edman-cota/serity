import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys,
)

const outline = definePartsStyle({
  field: {
    _focusVisible: {
      borderColor: '#2175e2',
      boxShadow: 'none',
    },
  },
})

const filled = definePartsStyle({
  field: {
    color: 'black',
    opacity: '0.8',
    mt: '15px',
    h: '42px',
    border: 'none',
    bg: 'gray.200',
    _focus: {
      zIndex: 1,
      bg: 'rgba(255, 255, 255, 0.08)',
      borderColor: '#63b3ed',
      boxShadow: '0 0 0 1px #63b3ed',
    },
  },
})

const variants = {
  filled: filled,
  outline: outline,
}

export const inputTheme = defineMultiStyleConfig({ variants })
