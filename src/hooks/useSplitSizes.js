/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";

export const useSplitSizes = () => {
  const { width } = useWindowSize();

  const [sizes, setSizes] = useState([]);
  const [paneDisplay, setPaneDisplay] = useState([]);

  useEffect(() => {
    if (width <= 770) {
      setSizes([0, 100]); // in %
      setPaneDisplay(["none", "flex"]);
    }
    if (width > 770) {
      setSizes([68, 32]); // in %
      setPaneDisplay(["flex", "flex"]);
    }
  }, [width]);

  return { sizes, paneDisplay };
};
