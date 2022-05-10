/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";

export const useSplitSizes = () => {
  const { width } = useWindowSize();

  const [sizes, setSizes] = useState([]);
  const [minSize, setMinSize] = useState([]);

  useEffect(() => {
    if (width <= 770) {
      setSizes([0, 100]);
      setMinSize([0, 0]);
    }
    if (width > 770) {
      setSizes([68, 32]); // in %
      setMinSize([100, 0]); // in pixel
    }
  }, [width]);

  return { sizes, minSize };
};
