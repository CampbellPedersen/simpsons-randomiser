import React from "react";
import { useRouting } from "../../routes";
import { Header } from "./components/Header";
import "./Settings.scss";

export const Settings: React.FC = () => {
  const routing = useRouting();
  return (
    <div>
      <Header onBack={routing.goBack} />
      <section className="edit"></section>
    </div>
  );
};
