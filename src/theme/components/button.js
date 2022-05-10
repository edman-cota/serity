/* eslint-disable import/prefer-default-export */
export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        fontWeight: 400,
      },
      variants: {
        ghost: ({ colorMode }) => ({
          borderRadius: "base",
          h: "1.875rem",
          px: "0.5rem",
          _hover: {
            bg: colorMode === "dark" ? "gray.500" : "gray.100",
          },
          _focus: {
            bg: "transparent",
            boxShadow: "none",
          },
        }),
        custom: {
          display: "flex",
          borderRadius: "none",
          justifyContent: "start",
          _hover: {
            bg: "rgb(51, 59, 70)",
          },
        },
        customItem: {
          color: "rgb(66, 72, 85)",
          h: "38px",
          w: "90px",
          mx: "auto",
          borderRadius: "base",
          _hover: { bg: "rgb(244, 246, 248)" },
        },
      },
    },
  },
};
