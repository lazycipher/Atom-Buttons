import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import clsx from "clsx";

function AtomButton({
  size = "md",
  state = "primary",
  disabled = false,
  icon = null,
  iconAlignment = "left",
  children,
  overrideStyles = {},
  rounded = false,
  roundEdge = false,
  tooltip,
  ...buttonProps
}) {
  const mainClasses = clsx({
    btn: true,
    tooltip: tooltip || children === undefined,
    bottom: tooltip || children === undefined,
    "tooltip-sm":
      (tooltip && size === "sm") || (children === undefined && size === "sm"),
    "tooltip-md":
      (tooltip && size === "md") || (children === undefined && size === "md"),
    "tooltip-lg":
      (tooltip && size === "lg") || (children === undefined && size === "lg"),
    "btn-sm": size === "sm",
    "btn-md": size === "md",
    "btn-lg": size === "lg",
    disabled: disabled,
    "btn-primary": state === "primary" && !disabled,
    "btn-danger": state === "danger" && !disabled,
    "btn-ghost": state === "ghost" && !disabled,
    "btn-secondary": state === "secondary" && !disabled,
    "only-icon": children === undefined,
    rounded: rounded,
    "round-edge": roundEdge,
    "overridden-bg":
      overrideStyles?.background || overrideStyles?.backgroundColor,
  });

  const iconClasses = clsx({
    "material-icons": true,
    icon: true,
    "icon-left": icon && iconAlignment === "left",
    "icon-right": icon && iconAlignment === "right",
  });

  const contentClasses = clsx({
    content: true,
    "m-0": children === null,
    "mr-1": iconAlignment === "right",
    "ml-1": iconAlignment === "left",
  });

  return (
    <>
      <button
        className={mainClasses}
        disabled={disabled}
        style={overrideStyles}
        {...buttonProps}
        data-tooltip={tooltip}
      >
        {icon && <i className={iconClasses}>{icon}</i>}
        {children && <span className={contentClasses}>{children}</span>}
      </button>
    </>
  );
}

AtomButton.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  state: PropTypes.oneOf([
    "primary",
    "secondary",
    "ghost",
    "danger",
  ]),
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  iconAlignment: PropTypes.oneOf(["left", "right"]),
  children: PropTypes.element.isRequired,
  overrideStyles: PropTypes.object,
  rounded: PropTypes.bool,
  roundEdge: PropTypes.bool,
  tooltip: PropTypes.string,
};

export default AtomButton;
