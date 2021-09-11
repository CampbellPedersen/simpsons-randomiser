import { Settings } from "@src/models/settings";
import { useEffect, useState } from "react";
import { ApiResult } from "./types";

const defaultSettings: Settings = {
  filters: {
    seasons: [],
    treeHouseOfHorror: false,
  }
}

const getSettings = async (): Promise<Settings> =>
  new Promise<Settings>(function(resolve){
    chrome.storage.sync.get(['settings'], function(options) {
        console.log(options);
        resolve(options.settings ?? defaultSettings);
    })
  });

const saveSettings = async (settings: Settings): Promise<void> =>
  chrome.storage.sync.set({settings})

export const useSettings = (): {
  settings: ApiResult<Settings>,
  save: typeof saveSettings;
} => {
  const [data, setData] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const save = async (settings: Settings) => {
    setLoading(true);
    saveSettings(settings)
    .then(() => {
      setData(settings);
      setLoading(false);
    })
    .catch((e: Error) => setError(e.message))
  };

  useEffect(() => {
    if (!loading && !data && !error) {
      setLoading(true);
      getSettings()
        .then((settings) => {
          setData(settings);
          setLoading(false);
        })
        .catch((e: Error) => setError(e.message))
    }
  }, [loading, data, error]);

  if (error) return {settings: {state: 'error', error}, save};
  if (data) return {settings: {state: 'loaded', data}, save};
  return {settings: {state: 'loading'}, save};
}
