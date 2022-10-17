import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export const useSplitSizes = () => {
  const { width } = useWindowSize();
  const [sizes, setSizes] = useState<number[]>([]);
  const [paneDisplay, setPaneDisplay] = useState<string[]>([]);
  const isExpanded = useSelector((state: RootState) => state.isExpanded.value);

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
