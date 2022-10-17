/* eslint-disable import/prefer-default-export */
export const inputStyles = {
  components: {
    Input: {
      variants: {
        filled: ({ colorMode }) => ({
          color: "white",
          opacity: "0.8",
          mt: "20px",
          h: "42px",
          border: "none",
          bg: colorMode === "dark" ? "whiteAlpha.200" : "whiteAlpha.700",
        }),
      },
    },
  },
};
