import React from "react";
import { Header } from "./components/Header";
import { PushableButton } from "@src/components";
import { useRouting } from "@src/routes";
import { openRandomEpisode } from "@src/services/disneyplus";
import { useSettings } from "@src/services/settings";
import "./Randomise.scss";

export const RandomisePage: React.FC = () => {
  const routing = useRouting();
  const {settings} = useSettings();
  if (settings.state === 'loading') return <>Loading...</>;
  if (settings.state === 'error') return <>{settings.error}</>;
  
  return (
    <div>
      <Header title="The Simpsons Randomiser" onClickSettings={routing.goToSettings} />
      <section className="randomise">
        <PushableButton onClick={() => openRandomEpisode(settings.data)}>Randomise!</PushableButton>
      </section>
    </div>
  );
};
