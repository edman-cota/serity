import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'

export const popoverStyles = {
  Popover: {
    parts: ['arrow', 'content'],
    baseStyle: {
      content: {
        bg: 'black',
        border: 'none',
      },
    },
  },
}
