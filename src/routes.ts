import React from "react";
import { useHistory } from "react-router-dom";
import { SettingsPage } from "./views/settings";
import { RandomisePage } from "./views/randomise";

type RouteName = "Randomise" | "Settings";

type Route = {
  path: string;
  component: React.ComponentType<unknown>;
};

export const Routes: Record<RouteName, Route> = {
  Randomise: {
    path: "/randomise",
    component: RandomisePage,
  },
  Settings: {
    path: "/settings",
    component: SettingsPage,
  },
};

type Routing = {
  goToRandomise: () => void;
  goToSettings: () => void;
  goBack: () => void;
};

export const useRouting = (): Routing => {
  const history = useHistory();

  return {
    goToRandomise: () => history.push(Routes.Randomise.path),
    goToSettings: () => history.push(Routes.Settings.path),
    goBack: history.goBack,
  };
};
