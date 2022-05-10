import React from "react";
import { BsFlag } from "react-icons/bs";

const RenderPriority = ({ priority }: { priority: number }) => {
  switch (priority) {
    case 0: // None
      return <BsFlag color="var(--none)" fontSize="14px" />;
    case 1: // Low
      return <BsFlag color="var(--low)" fontSize="14px" />;
    case 2: // Medium
      return <BsFlag color="var(--medium)" fontSize="14px" />;
    case 3: // High
      return <BsFlag color="var(--high)" fontSize="14px" />;
    default:
      return <BsFlag color="var(--none)" fontSize="14px" />;
  }
};

export default RenderPriority;
