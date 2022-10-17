/* eslint-disable import/prefer-default-export */
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const styles = {
  // colors: {
  //   gray: {
  //     50: "#f7fafc",
  //     100: "#EDF2F7",
  //     200: "#88898D", // secondary icon colorScheme
  //     500: "rgba(255, 255, 255, 0.08)", // hover bg secondary
  //     600: "#383D5B", // hover bg primary
  //     700: "#1f2733", // main
  //     800: "#1A202C",
  //     // 800: "rgb(22, 24, 28)",
  //     900: "#171923",
  //   },
  // },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("white", "gray.800")(props), // 1
        fontFamily: "Segoe UI, Hind, Open Sans, Roboto, Helvetica, sans-serif",
      },
    }),
  },
};
