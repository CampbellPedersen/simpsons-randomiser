import React from "react";
import { useHistory } from "react-router-dom";
import { Settings } from "./views/settings";
import { Randomise } from "./views/randomise";

type RouteName = "Randomise" | "Settings";

type Route = {
  path: string;
  component: React.ComponentType<unknown>;
};

export const Routes: Record<RouteName, Route> = {
  Randomise: {
    path: "/randomise",
    component: Randomise,
  },
  Settings: {
    path: "/settings",
    component: Settings,
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
