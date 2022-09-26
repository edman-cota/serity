/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { useSelector } from "react-redux";

export const useSplitSizes = () => {
  const { width } = useWindowSize();
  const [sizes, setSizes] = useState([]);
  const [paneDisplay, setPaneDisplay] = useState([]);
  const isExpanded = useSelector((state) => state.isExpanded.value);
  useEffect(() => {
    if (width <= 770) {
      setSizes([0, 100]); // in %
      setPaneDisplay(["none", "flex"]);
    }
    if (width > 770) {
      if (isExpanded) {
        setSizes([0, 100]); // in %
        setPaneDisplay(["none", "flex"]);
      } else {
        setSizes([68, 32]); // in %
        setPaneDisplay(["flex", "flex"]);
      }
    }
  }, [width, isExpanded]);

  return { sizes, paneDisplay };
};
