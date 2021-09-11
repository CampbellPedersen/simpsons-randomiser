import React from "react";
import { useRouting } from "@src/routes";
import { Header } from "./components/Header";
import { useSettings } from "@src/services/settings";
import { SettingsEditor } from "./components/SettingsEditor/SettingsEditor";

import "./Settings.scss";

export const SettingsPage: React.FC = () => {
  const routing = useRouting();
  const {settings, save} = useSettings();

  if (settings.state === 'loading') return <>Loading...</>;
  if (settings.state === 'error') return <>{settings.error}</>;

  return (
    <div>
      <Header onBack={routing.goBack} />
      <section className="settings">
        <SettingsEditor value={settings.data} onChange={save} />
      </section>
    </div>
  );
};
