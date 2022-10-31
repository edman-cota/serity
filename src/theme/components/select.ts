import { selectAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(selectAnatomy.keys)

const filled = defineStyle({
  field: {
    border: 'none',

    _focusWithin: {
      bg: 'whiteAlpha.100',
      outline: 'none',
      boxShadow: 'none',
      border: 'none',
    },
  },
})

export const selectTheme = defineMultiStyleConfig({
  variants: { filled },
  defaultProps: {
    variant: 'filled',
  },
})
