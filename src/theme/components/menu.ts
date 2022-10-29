import { menuAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react"

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  list: {
    bg: "black",
    borderColor: "black",
  },
  item: {
    color: "white",
    height: "40px",
    _hover: {
      bg: "gray.700",
    },
    _active: {
      bg: "gray.700",
    },
    _focus: {
      bg: "gray.700",
    },
  },
  divider: {
    width: "90%",
    mx: "auto",
    borderColor: "whiteAlpha.400",
  },
})

export const menuTheme = defineMultiStyleConfig({ baseStyle })
