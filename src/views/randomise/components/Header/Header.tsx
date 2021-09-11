import React from "react";
import { ContentButton, Header as BaseHeader, Logo, SettingsIcon } from "@src/components";
import "./Header.scss";

type Props = {
  title: string;
  onClickSettings: () => void;
};

export const Header: React.FC<Props> = ({ title, onClickSettings }) => (
  <BaseHeader>
    <nav className="execute-header">
      <div className="heading">
        <Logo  height={32} width={32} />
        <span>{title}</span>
      </div>
      <ContentButton className="settings-button" onClick={onClickSettings}>
        <SettingsIcon height={20} width={20} />
      </ContentButton>
    </nav>
  </BaseHeader>
);
