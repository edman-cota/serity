import { Variants } from "framer-motion"

export const scale: Variants = {
  exit: {
    scale: 1,
    opacity: 0,
    transition: {
      opacity: { duration: 5, easings: "easeInOut" },
      scale: { duration: 0.2, easings: "easeInOut" },
    },
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
      // duration: 4,
    },
  },
}
