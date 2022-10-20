/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useRef } from "react";
import Portal from "./Portal";
import styled from "styled-components";
import { text } from "stream/consumers";
import { Placement, TooltipProps } from "../../types/definitions";
import { radii } from "../../types/foundations/radius";
import { IoSwapHorizontal } from "react-icons/io5";
import { position } from "@chakra-ui/react";

const StyledTooltip = styled.span.attrs((p) => ({
  bg: p.bg || "black",
  delay: p.delay || 0.01,
}))`
  position: fixed;
  top: ${(p) => p.posRef.current.y}px;
  left: ${(p) => p.posRef.current.x}px;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0.02rem;
  background-color: ${(p) => p.bg};
  color: rgba(255, 255, 255, 1);
  pointer-events: none;
  padding: 8px 15px;
  border-radius: ${(p) => radii[p.radius]};
  z-index: 99999;
  display: inline-block;
  white-space: nowrap;
  opacity: ${(p) => p.show};

  transition-property: transform, opacity !important;
  transition-duration: 0.06s !important;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1) !important;
  transition-delay: ${(p) => (p.show ? p.delay : 0.02)}s !important;

  transform-origin: ${(p) => negate(p.placement)};
  transform: scale(${(p) => (p.show ? 1 : 0.7)});
`;

function isHorizontal(placement: string) {
  return placement === "left" || placement === "right";
}

function isVertical(placement: string) {
  return placement === "top" || placement === "bottom";
}

function negate(placement: string) {
  if (placement === "left") return "right";
  if (placement === "right") return "left";
  if (placement === "top") return "bottom";
  if (placement === "bottom") return "top";
}

const point = () => ({
  x: null,
  y: null,
  reset(p: any) {
    this.x = p.x;
    this.y = p.y;
  },
  restrictRect(rect: any) {
    if (this.x < rect.l) this.x = rect.l;
    else if (this.x > rect.r) this.x = rect.r;
    if (this.y < rect.t) this.y = rect.t;
    else if (this.y > rect.b) this.y = rect.b;
  },
});

const getPoint = (el, tt, placement: Placement, space) => {
  // let pt = { x: 0, y: 0 };
  let recurCount = 0;
  const pt = point();
  const bdys = {
    l: space,
    t: space,
    r: document.body.clientWidth - (tt.clientWidth + space),
    b: window.innerHeight - (tt.clientWidth + space),
  };
  const elRect = el.getBoundingClientRect();

  return (function recursive(placement) {
    recurCount++;
    switch (placement) {
      case "left":
        pt.x = elRect.left - (tt.offsetWidth + space);
        pt.y = elRect.top + (el.offsetHeight - tt.offsetHeight) / 2;
        break;
      case "right":
        pt.x = elRect.right + space;
        pt.y = elRect.top + (el.offsetHeight - tt.offsetHeight) / 2;
        break;
      case "top":
        pt.x = elRect.left + (el.offsetWidth - tt.offsetWidth) / 2;
        pt.y = elRect.top - (tt.offsetHeight + space);
        break;
      default:
        pt.x = elRect.left + (el.offsetWidth - tt.offsetWidth) / 2;
        pt.y = elRect.bottom + space;
    }

    if (recurCount < 3) {
      if (
        (isHorizontal(placement) && (pt.x < bdys.l || pt.x > bdys.r)) ||
        (isVertical(placement) && (pt.y < bdys.t || pt.y > bdys.b))
      ) {
        pt.reset(recursive(negate(placement)));
      }
    }

    // restric to rect boundry
    pt.restrictRect(bdys);

    return pt;
  })(placement);
};

function Tooltip({
  label,
  placement = "bottom",
  space = 15,
  bg = "rgba(0, 5, 11, 0.9)",
  borderRadius = "base",
  disabled = 0,
  delay,
  command,
  children,
}: TooltipProps) {
  const [show, setShow] = useState(0);
  const posRef = useRef({ x: 0, y: 0 });
  const tooltipRef = useRef();

  const handleMouseOver = (e) => {
    setShow(1);
    posRef.current = getPoint(
      e.currentTarget,
      tooltipRef.current,
      placement,
      space
    );
  };
  const handleMouseOut = () => setShow(0);

  return (
    <>
      {disabled
        ? children
        : React.cloneElement(children, {
            onMouseOver: handleMouseOver,
            onMouseOut: handleMouseOut,
          })}
      {disabled || (
        <Portal>
          <StyledTooltip
            ref={tooltipRef}
            posRef={posRef}
            show={show}
            bg={bg}
            delay={delay}
            radius={borderRadius}
          >
            {label}
            {command !== undefined ? (
              <>
                <span style={{ margin: "0 7px" }}>·</span>
                <span
                  style={{
                    backgroundColor: "#1f2733",
                    padding: "1px 6px",
                    minWidth: "12px",
                    borderRadius: "4px",
                    fontSize: "13px",
                  }}
                >
                  {command}
                </span>
              </>
            ) : null}
          </StyledTooltip>
        </Portal>
      )}
    </>
  );
}

export default Tooltip;
