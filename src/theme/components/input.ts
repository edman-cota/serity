import { inputAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const pill = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "gray.200",
    background: "gray.50",
    borderRadius: "full",
  },
})

const filled = definePartsStyle({
  field: {
    color: "black",
    opacity: "0.8",
    mt: "15px",
    h: "42px",
    border: "none",
    bg: "gray.200",
    _focus: {
      zIndex: 1,
      bg: "rgba(255, 255, 255, 0.08)",
      borderColor: "#63b3ed",
      boxShadow: "0 0 0 1px #63b3ed",
    },
  },
})

const variants = {
  filled: filled,
  custom: pill,
}

export const inputTheme = defineMultiStyleConfig({ variants })
