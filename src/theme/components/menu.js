const menuStyles = {
  components: {
    Menu: {
      parts: ["list", "item", "divider"],
      baseStyle: {
        list: {
          bg: "black",
          // border: "0px",
          borderColor: "black",
        },
        item: {
          h: "40px",
          w: "100%",
          mx: "auto",
          color: "hsla(0,0%,100%,.87)",
          borderRadius: "base",
          _hover: {
            bg: "gray.700",
            color: "white",
          },
        },
        divider: {
          w: "90%",
          mx: "auto",
          color: "whiteAlpha.400",
        },
      },
    },
  },
};

export default menuStyles;
