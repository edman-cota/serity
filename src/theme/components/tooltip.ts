import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const baseStyle = defineStyle(() => {
  return {
    px: "4",
    py: "2",
    borderRadius: "base",
    fontWeight: "normal",
    bg: "rgba(0, 5, 11, 0.9)",
    color: "rgba(255, 255, 255, 1)",
  }
})

export const tooltipTheme = defineStyleConfig({
  baseStyle,
})
