import React from "react";
import "./Header.scss";

export const Header: React.FC = ({ children }) => (
  <header className="header">{children}</header>
);
