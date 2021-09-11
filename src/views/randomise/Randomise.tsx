import React from "react";
import { Header } from "./components/Header";
import { PushableButton } from "@src/components";
import { useRouting } from "@src/routes";
import "./Randomise.scss";

export const Randomise: React.FC = () => {
  const routing = useRouting();
  return (
    <div>
      <Header title="The Simpsons Randomiser" onClickSettings={routing.goToSettings} />
      <section className="randomise">
        <PushableButton onClick={() => {}}>Randomise!</PushableButton>
      </section>
    </div>
  );
};
