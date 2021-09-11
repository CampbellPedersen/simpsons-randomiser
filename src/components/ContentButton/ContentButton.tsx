import clsx from "clsx";
import React from "react";
import "./ContentButton.scss";

type Props = {
  className?: string;
  onClick: () => void;
};

export const ContentButton: React.FC<Props> = ({
  className,
  onClick,
  children,
}) => (
  <button className={clsx("circle-button", className)} onClick={onClick}>
    {children}
  </button>
);
