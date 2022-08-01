const menuStyles = {
  components: {
    Menu: {
      parts: ["list", "item"],
      baseStyle: {
        list: {
          bg: "black",
          border: "0px",
        },
        item: {
          h: "38px",
          w: "90%",
          mx: "auto",
          color: "white",
          borderRadius: "base",
          _hover: {
            bg: "gray.700",
          },
        },
      },
    },
  },
};

export default menuStyles;
