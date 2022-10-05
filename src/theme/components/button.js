const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        fontWeight: 400,
        _focusVisible: {
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        },
      },
      variants: {
        ghost: ({ colorMode }) => ({
          borderRadius: "base",
          h: "1.875rem",
          px: "0.5rem",
          color: colorMode === "dark" ? "gray.400" : "#94959B",
          _hover: {
            bg: colorMode === "dark" ? "gray.500" : "gray.100",
            color: colorMode === "dark" ? "white" : "black",
          },
          _focus: {
            bg: "transparent",
            boxShadow: "none",
          },
          _active: {
            bg: colorMode === "dark" ? "rgba(50, 78, 132, .4)" : "gray.100",
          },
        }),
      },
    },
  },
};

export default buttonStyles;
