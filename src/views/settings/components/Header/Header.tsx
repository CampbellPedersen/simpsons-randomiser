import React from "react";
import { Header as BaseHeader } from "@src/components/Header/Header";
import { ContentButton } from "@src/components/ContentButton";
import { BackIcon } from "@src/components/Icons/BackIcon";
import "./Header.scss";

type Props = {
  onBack: () => void;
};

export const Header: React.FC<Props> = ({ onBack }) => (
  <BaseHeader>
    <nav className="edit-header">
      <ContentButton className="back-button" onClick={onBack}>
        <BackIcon height={26} width={26} />
      </ContentButton>
      <span>Settings</span>
    </nav>
  </BaseHeader>
);
