import React from "react";

export const Container = ({
  children,
  size = "medium",
  width = "large",
  className = "",
  ...props
}) => {
  const verticalPadding = {
    custom: "",
    small: "py-8",
    medium: "py-12",
    large: "py-24",
    default: "py-12",
    navbar: "p-0",
  };
  const widthClass = {
    small: "max-w-4xl",
    medium: "max-w-5xl",
    large: "max-w-7xl",
    custom: "",
    navbar: "w-full",
    ourwork: "max-w-[1410]",
  };

  return (
    <div
      className={`${widthClass[width]} mx-auto ${verticalPadding[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
